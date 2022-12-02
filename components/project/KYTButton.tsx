import type { FCC } from 'app/types'
import Button from '@mui/material/Button'
import { ethers } from 'ethers'
import type { Portfolio } from 'domains/data/portfolio'
import { usePost } from 'app/hooks/request'
import { useTranslation } from 'next-i18next'
import { useNetwork } from 'domains/data'
import { createToastifyPromise } from 'app/utils/promise/toastify'
import { useControllers, useWallet } from 'domains'
import { LendingPoolService } from 'lib/openapi'
import { catchError } from 'app/utils/catch/error'
import { safeGet } from 'app/utils/get'
import { useCallback } from 'react'

type KYTButtonProps = {
  portfolio: Portfolio
}
const KYTButton: FCC<KYTButtonProps> = ({ portfolio: { useWhitelist, userInWhitelist, address }, children }) => {
  const { t } = useTranslation('common', { keyPrefix: 'wallet.KYT' })
  const {
    lendingPool: { userExpirationTimestamp },
  } = useControllers()
  const {
    provider,
    contracts: { lendingPool },
  } = useNetwork()
  const {
    chainName,
    networkAccount,
    signature: { userKYT },
  } = useWallet()
  const account = networkAccount
  const LendingPool = safeGet(() => address.LendingPool)
  const LendingPoolAddress = safeGet(() => ethers.utils.getAddress(address.LendingPool))
  const addWhitelist = usePost(() => {
    return userKYT(account, LendingPoolAddress).then((signature) =>
      LendingPoolService.addToWhitelistApiNetworkAccountsAddressWhitelistPost(chainName, account, {
        signature,
        pool: LendingPoolAddress,
      })
    )
  })
  const waitForTransaction = usePost((transactionHash: string) => provider.waitForTransaction(transactionHash))
  const updateUserExpirationTimestamp = useCallback(() => {
    return userExpirationTimestamp.run({
      lendingPoolService: lendingPool,
      lendingPools: [LendingPool],
      account,
    })
  }, [account, LendingPool, lendingPool, userExpirationTimestamp])
  if (!useWhitelist || userInWhitelist) return <>{children}</>
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
