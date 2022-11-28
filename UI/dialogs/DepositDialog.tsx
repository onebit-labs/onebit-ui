import Dialog from 'components/dialog/Dialog'
import { Trans, useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useDialogs } from '.'
import { ROOT } from 'styles/dialog'
import FlexBetween from 'components/flexbox/FlexBetween'
import { H5, Paragraph } from 'components/Typography'
import { useNetwork, usePortfolio } from 'domains/data'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'
import { useInputSlider } from './useInputSlider'
import Stack from '@mui/material/Stack'
import DialogActions from '@mui/material/DialogActions'
import TimePeriod from 'components/date/TimePeriod'
import Button from '@mui/material/Button'
import { useControllers, useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { usePost } from 'app/hooks/request'
import type { depositProps } from 'lib/protocol/typechain/onebit'
import { createPromise } from 'app/utils/promise'
import Alert from '@mui/material/Alert'

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
  const { networkAccount, signature } = useWallet()

  const {
    walletBalance,
    lockTime,
    purchaseEndTimestamp,
    redemptionBeginTimestamp,
    address,
    symbol,
    managementFeeRate,
    performanceFeeRate,
  } = portfolio

  const { input } = useInputSlider({ balance: walletBalance })
  const {
    contracts: { lendingPool, erc20Service },
  } = useNetwork()
  const { updateData } = useControllers()

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
            <H5>{t('wallet.deposit.amount')}</H5>
            <Paragraph color="text.secondary">
              {t('wallet.deposit.walletBalance')}: <NumberDisplay value={walletBalance} options="number" /> {symbol}
            </Paragraph>
          </FlexBetween>
          <NumberInput value={input.value} disabled={input.disabled} onChange={input.onChange} onMax={input.onMax} />
          <Stack spacing={1}>
            <H5>{t('wallet.deposit.lockUpPeriod')}</H5>
            <Paragraph color="text.secondary">
              {lockTime} {t('wallet.deposit.days')}
            </Paragraph>
            <Paragraph color="text.secondary">
              <TimePeriod start={purchaseEndTimestamp} end={redemptionBeginTimestamp} />
            </Paragraph>
          </Stack>
          <Alert severity="info">
            <Trans
              i18nKey="wallet.deposit.tip"
              t={t}
              components={{
                managementFee: (
                  <NumberDisplay
                    value={managementFeeRate}
                    options="percent"
                    numberFormatOptions={{ minimumFractionDigits: 0 }}
                  />
                ),
                performanceFee: (
                  <NumberDisplay
                    value={performanceFeeRate}
                    options="percent"
                    numberFormatOptions={{ minimumFractionDigits: 0 }}
                  />
                ),
              }}
            />
          </Alert>
          <Alert severity="warning">
            <Stack spacing={1}>
              <H5>{t('wallet.deposit.reInvestment')}</H5>
              <Paragraph color="text.secondary">{t('wallet.deposit.description')}</Paragraph>
            </Stack>
          </Alert>
        </Stack>
      </ROOT>
      <DialogActions>
        <Button
          variant="contained"
          disabled={loading || !networkAccount || !input.value}
          onClick={() => {
            const { promise, reslove } = createPromise()
            if (!signature.hasUserAgreement) {
              signature.dialog.open(reslove)
            } else {
              reslove()
            }

            return promise
              .then(() =>
                post({
                  pool: address.LendingPool,
                  erc20Service,
                  reserve: address.symbol,
                  user: networkAccount,
                  amount: input.value,
                })
              )
              .then(() => {
                updateData()
                deposit.close()
              })
          }}
        >
          {t('wallet.btn.deposit')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DepositDialog
