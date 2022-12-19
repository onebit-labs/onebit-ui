import { toBN } from 'lib/math'
import type { Portfolio } from '..'

export const getNetValueByCalculate = ({
  initialDeposit,
  managementFeeRate,
  lockDays,
  totalSupply,
  performanceFeeRate,
}: Pick<Portfolio, 'initialDeposit' | 'managementFeeRate' | 'lockDays' | 'totalSupply' | 'performanceFeeRate'>) => {
  let netValueByCalculate = toBN(0)
  if (!managementFeeRate || !initialDeposit || (initialDeposit.eq(0) && totalSupply.eq(0)))
    return netValueByCalculate

  const managementFeeTimeValue = managementFeeRate.multipliedBy(lockDays).div(365)
  const $managementFeeTimeValue = toBN(1).minus(managementFeeTimeValue)

  const assetsUnderManagementDivOpeningAssets = totalSupply.div(initialDeposit)
  if (assetsUnderManagementDivOpeningAssets.gt($managementFeeTimeValue)) {
    netValueByCalculate = assetsUnderManagementDivOpeningAssets
      .minus(performanceFeeRate)
      .div($managementFeeTimeValue.minus(performanceFeeRate))
  } else {
    netValueByCalculate = assetsUnderManagementDivOpeningAssets.plus(managementFeeTimeValue)
  }

  return netValueByCalculate
}