import Box from '@mui/material/Box'
import { safeGet } from 'app/utils/get'
import type { Portfolio } from 'domains/data/portfolio'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import type { FC } from 'react'
import { useMemo } from 'react'

type PNLProps = Portfolio
const PNL: FC<PNLProps> = ({ PNL, previousPNL }) => {
  const value = useMemo(() => safeGet(() => PNL.minus(previousPNL)) || toBN(0), [PNL, previousPNL])
  if (value.isNaN() || value.isZero()) return <span>-</span>
  return (
    <RiseOrFall value={value}>
      <Box>
        <NumberDisplay value={value} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
        <span>(</span>
        <NumberDisplay value={value.div(PNL)} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        <span>)</span>
      </Box>
    </RiseOrFall>
  )
}
export default PNL
