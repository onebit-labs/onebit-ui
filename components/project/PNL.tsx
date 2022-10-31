import Box from '@mui/material/Box'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import type { FC } from 'react'

type PNLProps = {
  PNL: number
  previousPNL: number
}
const PNL: FC<PNLProps> = ({ PNL, previousPNL }) => {
  const value = PNL - previousPNL
  return (
    <RiseOrFall value={value}>
      <Box>
        <NumberDisplay value={value} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
        <span>(</span>
        <NumberDisplay value={value / PNL} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        <span>)</span>
      </Box>
    </RiseOrFall>
  )
}
export default PNL
