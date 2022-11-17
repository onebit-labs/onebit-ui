import type { FC } from 'react'
import { useMemo } from 'react'
import { toBN } from 'lib/math'
import type { BNValue } from 'lib/math/types'
import { useMath } from 'domains/utils'
import type { AbbreviateOptions } from '../format/abbreviate'
import { getAbbreviateData } from '../format/abbreviate'
import { safeGet } from 'app/utils/get'

type NumberDisplayProps = {
  value: BNValue
  min?: BNValue
  max?: BNValue
  options?: 'number' | 'USD' | 'percent'
  abbreviate?: AbbreviateOptions
  numberFormatOptions?: Intl.NumberFormatOptions
}

const NumberDisplay: FC<NumberDisplayProps> = ({
  value: source,
  min,
  max,
  options,
  abbreviate,
  numberFormatOptions,
}) => {
  const { NF } = useMath()

  const value = useMemo(() => {
    const v = toBN(source)
    if (!v || v.isNaN() || v.eq(0)) return toBN(0)
    if (typeof min != 'undefined') {
      const minValue = toBN(min)
      if (!minValue.isNaN() && v.lt(minValue)) return minValue
    }
    if (typeof max != 'undefined') {
      const maxValue = toBN(max)
      if (!maxValue.isNaN() && v.gt(maxValue)) return maxValue
    }
    return v
  }, [max, min, source])

  const data = useMemo(() => {
    const v = toBN(value)
    if (!v || v.isNaN() || v.eq(0)) return '-'
    const getFormatValue = (value: BNValue, props: Intl.NumberFormatOptions = {}) => {
      return NF.format(
        value,
        NF.options(options, {
          ...props,
          ...numberFormatOptions,
        })
      )
    }

    if (abbreviate && v.gt(1)) {
      const {
        sign,
        scaledValue,
        options: { maximumFractionDigits },
        suffix,
      } = getAbbreviateData(v, abbreviate)
      return `${getFormatValue(
        safeGet(() => scaledValue.multipliedBy(sign ? 1 : -1) || 0),
        { maximumFractionDigits }
      )}${suffix || ''}`
    }

    return getFormatValue(v)
  }, [NF, abbreviate, numberFormatOptions, options, value])
  return <span>{data}</span>
}

export default NumberDisplay
