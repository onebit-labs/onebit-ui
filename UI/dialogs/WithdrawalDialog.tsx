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
import Button from '@mui/material/Button'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { usePost } from 'app/hooks/request'
import type { withdrawProps } from 'lib/protocol/typechain/onebit'

const WithdrawDialog: FC = () => {
  const { withdraw } = useDialogs()
  const { t } = useTranslation()
  const { portfolioData } = usePortfolio()
  const portfolio = useMemo(() => {
    const id = withdraw.id
    if (!id || !portfolioData.length) return {} as undefined
    const returnValue = portfolioData.find((i) => i.id === id) || ({} as undefined)
    return returnValue
  }, [withdraw.id, portfolioData])
  const { networkAccount } = useWallet()

  const { balanceOf, address } = portfolio

  const { input } = useInputSlider({ balance: balanceOf })
  const {
    contracts: { lendingPool, erc20Service },
  } = useNetwork()

  const sendTransaction = useSendTransaction()

  const fn = useCallback(
    (props: withdrawProps) => {
      return transaction({
        createTransaction: lendingPool.withdraw(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [lendingPool, sendTransaction]
  )

  const { post, loading } = usePost(fn)

  return (
    <Dialog {...withdraw} title={t('wallet.btn.withdraw')}>
      <ROOT>
        <Stack spacing={2}>
          <FlexBetween>
            <H5>Amount</H5>
            <Paragraph color="text.secondary">
              Wallet Balance: <NumberDisplay value={balanceOf} options="number" /> USDT
            </Paragraph>
          </FlexBetween>
          <NumberInput value={input.value} disabled={input.disabled} onChange={input.onChange} onMax={input.onMax} />
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
          {t('common:wallet.btn.withdraw')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WithdrawDialog