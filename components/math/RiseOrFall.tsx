import type { FC } from 'react'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import type { TypographyTypeMap } from '@mui/material'
import { Stack } from '@mui/material'
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone'
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone'
import { Typography } from '@mui/material'

import { valueToBigNumber } from 'app/utils/math'

import NumberDisplay from './NumberDisplay'

type RiseOrFallProps = { value: any; displayIcon: boolean } & TypographyTypeMap<{}, 'span'>['props']
const RiseOrFall: FC<RiseOrFallProps> = ({ value, displayIcon, ...props }) => {
  const theme = useTheme()
  const bn = useMemo(() => valueToBigNumber(value), [value])
  const isZero = useMemo(() => bn.isNaN() || bn.isZero(), [bn])
  const color = useMemo(() => {
    if (isZero) return theme.palette.text.primary
    if (bn.gt(0)) return theme.palette.success.main
    return theme.palette.error.main
  }, [bn, isZero, theme.palette.error.main, theme.palette.success.main, theme.palette.text.primary])

  return (
    <Typography {...props} color={color} justifyContent="center" alignItems="center" display="flex">
      {isZero ? (
        <span>0%</span>
      ) : (
        <Stack spacing={1} direction="row">
          {displayIcon && bn.gt(0) ? <ArrowCircleUpTwoToneIcon /> : <ArrowCircleDownTwoToneIcon />}
          <span>
            {bn.gt(0) && <span>+</span>}
            <NumberDisplay
              value={value}
              options="percent"
              numberFormatOptions={{
                maximumFractionDigits: 2,
              }}
            />
          </span>
        </Stack>
      )}
    </Typography>
  )
}

export default RiseOrFall
