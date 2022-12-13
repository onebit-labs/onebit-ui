import Dialog from 'components/dialog/Dialog'
import { useTranslation } from 'next-i18next'
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
import type { DepositProps } from 'lib/protocol/typechain/onebit'
import { createPromise } from 'app/utils/promise'
import Alert from '@mui/material/Alert'
import KYTButton from 'components/project/KYTButton'
import KYTTip from 'components/project/KYTTip'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'

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
    contracts: { vault, erc20Service },
  } = useNetwork()
  const { updateData } = useControllers()

  const sendTransaction = useSendTransaction()

  const fn = useCallback(
    (props: DepositProps) => {
      return transaction({
        createTransaction: vault.deposit(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [vault, sendTransaction]
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
              {<TimePeriod start={purchaseEndTimestamp} end={redemptionBeginTimestamp} />} {'('}
              {lockTime} {t('wallet.deposit.days')}
              {')'}
            </Paragraph>
          </Stack>
          <Stack spacing={1}>
            <Tooltip title={t('portfolioDetails:fees.management.description')}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <H5>{t('portfolioDetails:fees.management.title')}</H5>
                <HelpOutlinedIcon fontSize="inherit" sx={{ color: 'text.secondary' }} />
              </Stack>
            </Tooltip>
            <Paragraph color="text.secondary">
              <NumberDisplay
                value={managementFeeRate}
                options="percent"
                numberFormatOptions={{ minimumFractionDigits: 0 }}
              />
            </Paragraph>
          </Stack>
          <Stack spacing={1}>
            <Tooltip title={t('portfolioDetails:fees.performance.description')}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <H5>{t('portfolioDetails:fees.performance.title')}</H5>
                <HelpOutlinedIcon fontSize="inherit" sx={{ color: 'text.secondary' }} />
              </Stack>
            </Tooltip>
            <Paragraph color="text.secondary">
              <NumberDisplay
                value={performanceFeeRate}
                options="percent"
                numberFormatOptions={{ minimumFractionDigits: 0 }}
              />
            </Paragraph>
          </Stack>
          <Alert severity="warning">
            <Stack spacing={1}>
              <H5>{t('wallet.deposit.reInvestment')}</H5>
              <Paragraph color="text.secondary">{t('wallet.deposit.description')}</Paragraph>
            </Stack>
          </Alert>
          <KYTTip portfolio={portfolio} />
        </Stack>
      </ROOT>
      <DialogActions>
        <KYTButton portfolio={portfolio}>
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
                    vault: address.Vault,
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
        </KYTButton>
      </DialogActions>
    </Dialog>
  )
}

export default DepositDialog
