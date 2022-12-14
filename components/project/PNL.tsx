import Box from '@mui/material/Box'
import { safeGet } from 'app/utils/get'
import type { Portfolio } from 'domains/data/portfolio'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import type { FC } from 'react'
import { useMemo } from 'react'

type PNLProps = Portfolio
const PNL: FC<PNLProps> = ({ PNL, PNLRate }) => {
  const value = useMemo(() => safeGet(() => PNL) || toBN(0), [PNL])
  if (value.isNaN() || value.isZero()) return <span>-</span>
  return (
    <RiseOrFall value={value}>
      <Box fontWeight={600}>
        <NumberDisplay value={value} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
        <span>(</span>
        <NumberDisplay value={PNLRate} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        <span>)</span>
      </Box>
    </RiseOrFall>
  )
}
export default PNL
