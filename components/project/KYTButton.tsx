import type { FCC } from 'app/types'
import Button from '@mui/material/Button'
import { ethers } from 'ethers'
import type { Portfolio } from 'domains/data/portfolio'
import { usePost } from 'app/hooks/request'
import { useTranslation } from 'next-i18next'
import { useNetwork } from 'domains/data'
import { createToastifyPromise } from 'app/utils/promise/toastify'
import { useControllers, useWallet } from 'domains'
import { VaultService } from 'lib/openapi'
import { catchError } from 'app/utils/catch/error'
import { safeGet } from 'app/utils/get'
import { useCallback } from 'react'

type KYTButtonProps = {
  portfolio: Portfolio
}
const KYTButton: FCC<KYTButtonProps> = ({ portfolio: { useWhitelist, userInWhitelist, address }, children }) => {
  const { t } = useTranslation('common', { keyPrefix: 'wallet.KYT' })
  const {
    vault: { userExpirationTimestamp },
  } = useControllers()
  const {
    provider,
    contracts: { vault },
  } = useNetwork()
  const {
    chainName,
    networkAccount,
    signature: { userKYT },
  } = useWallet()
  const account = networkAccount
  const Vault = safeGet(() => address.Vault)
  const VaultAddress = safeGet(() => ethers.utils.getAddress(address.Vault))
  const addWhitelist = usePost(() => {
    return userKYT(account, VaultAddress).then((signature) =>
      VaultService.addToWhitelistApiNetworkAccountsAddressWhitelistPost(chainName, account, {
        signature,
        vault: VaultAddress,
      })
    )
  })
  const waitForTransaction = usePost((transactionHash: string) => provider.waitForTransaction(transactionHash))
  const updateUserExpirationTimestamp = useCallback(() => {
    return userExpirationTimestamp.run({
      vaultService: vault,
      vaults: [Vault],
      account,
    })
  }, [account, Vault, vault, userExpirationTimestamp])
  if (!networkAccount || !useWhitelist || userInWhitelist) return <>{children}</>
  if (addWhitelist.loading) {
    return (
      <Button variant="contained" key="KYTButton" disabled>
        {t('conducting')}
      </Button>
    )
  }
  if (waitForTransaction.loading) {
    return (
      <Button variant="contained" key="KYTButton" disabled>
        {t('adding')}
      </Button>
    )
  }

  return (
    <Button
      key="KYTButton"
      variant="contained"
      onClick={() => {
        if (addWhitelist.loading) return
        return createToastifyPromise(
          addWhitelist
            .post()
            .then(({ transaction }) => waitForTransaction.post(transaction))
            .then(() => updateUserExpirationTimestamp()),
          {
            serializeError: (e) => {
              updateUserExpirationTimestamp()
              return {
                ...catchError(e),
                autoClose: false,
              }
            },
          }
        )
      }}
    >
      {t('getWhitelisted')}
    </Button>
  )
}

export default KYTButton
