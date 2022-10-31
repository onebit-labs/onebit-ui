import { useNumberFormat } from 'app/utils/math/hooks/useNumberFormat'
import type { FC } from 'react'
import { useMemo } from 'react'
import { valueToBigNumber } from 'app/utils/math'
import type { BigNumberValue } from 'app/utils/math/types'

type NumberDisplayProps = {
  value: BigNumberValue
  options?: 'number' | 'USD' | 'percent'
  numberFormatOptions?: Intl.NumberFormatOptions
}

const NumberDisplay: FC<NumberDisplayProps> = ({ value, options, numberFormatOptions }) => {
  const NF = useNumberFormat()

  const data = useMemo(() => {
    const d = valueToBigNumber(value)
    if (!d || d.isNaN() || d.eq(0)) return '-'
    return NF.format(d, NF.options(options, numberFormatOptions))
  }, [NF, numberFormatOptions, options, value])
  return <span>{data}</span>
}

export default NumberDisplay
