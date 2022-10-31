import { useNumberFormat } from 'lib/math/hooks/useNumberFormat'
import type { FC } from 'react'
import { useMemo } from 'react'
import { toBN } from 'lib/math'
import type { BNValue } from 'lib/math/types'

type NumberDisplayProps = {
  value: BNValue
  options?: 'number' | 'USD' | 'percent'
  numberFormatOptions?: Intl.NumberFormatOptions
}

const NumberDisplay: FC<NumberDisplayProps> = ({ value, options, numberFormatOptions }) => {
  const NF = useNumberFormat()

  const data = useMemo(() => {
    const d = toBN(value)
    if (!d || d.isNaN() || d.eq(0)) return '-'
    return NF.format(d, NF.options(options, numberFormatOptions))
  }, [NF, numberFormatOptions, options, value])
  return <span>{data}</span>
}

export default NumberDisplay
