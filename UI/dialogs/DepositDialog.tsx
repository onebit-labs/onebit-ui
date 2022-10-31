import Dialog from 'components/dialog/Dialog'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useDialogs } from '.'
import { ROOT } from 'styles/dialog'
import FlexBetween from 'components/flexbox/FlexBetween'
import { H4, H5, Paragraph } from 'components/Typography'
import { useNetwork, usePortfolio } from 'domains/data'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'
import { useInputSlider } from './useInputSlider'
import Stack from '@mui/material/Stack'
import DialogActions from '@mui/material/DialogActions'
import TimePeriod from 'components/date/TimePeriod'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { usePost } from 'app/hooks/request'
import type { depositProps } from 'lib/protocol/typechain/onebit'

const DepositDialog: FC = () => {
  const { deposit } = useDialogs()
  const { t } = useTranslation()
  const { portfolioData } = usePortfolio()
  const portfolio = useMemo(() => {
    const id = deposit.id
    if (!id || !portfolioData.length) return {} as undefined
    const returnValue = portfolioData.find((i) => i.id === id) || ({} as undefined)
    return returnValue
  }, [deposit.id, portfolioData])
  const { networkAccount } = useWallet()

  const { walletBalance, lockTime, purchaseBeginTimestamp, purchaseEndTimestamp, address } = portfolio

  const { input } = useInputSlider({ balance: walletBalance })
  const {
    contracts: { lendingPool, erc20Service },
  } = useNetwork()

  const sendTransaction = useSendTransaction()

  const fn = useCallback(
    (props: depositProps) => {
      return transaction({
        createTransaction: lendingPool.deposit(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [lendingPool, sendTransaction]
  )

  const { post, loading } = usePost(fn)

  return (
    <Dialog {...deposit} title={t('wallet.btn.deposit')}>
      <ROOT>
        <Stack spacing={2}>
          <FlexBetween>
            <H4>Amount</H4>
            <Paragraph color="text.secondary">
              Wallet Balance: <NumberDisplay value={walletBalance} options="number" /> USDT
            </Paragraph>
          </FlexBetween>
          <NumberInput value={input.value} disabled={input.disabled} onChange={input.onChange} onMax={input.onMax} />
          <Stack spacing={1}>
            <H5>Lock-Up Period</H5>
            <Paragraph color="text.secondary">{lockTime} Days</Paragraph>
            <Paragraph color="text.secondary">
              <TimePeriod start={purchaseBeginTimestamp} end={purchaseEndTimestamp} />
            </Paragraph>
          </Stack>
        </Stack>
      </ROOT>
      <DialogActions>
        <Button
          variant="contained"
          disabled={loading || !networkAccount || !input.value}
          onClick={() => {
            post({
              pool: address.LendingPool,
              erc20Service,
              reserve: address.symbol,
              user: networkAccount,
              amount: input.value,
            })
          }}
        >
          {t('common:wallet.btn.deposit')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DepositDialog
