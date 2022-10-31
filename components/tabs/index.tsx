import { TabContext, TabList, TabPanel } from '@mui/lab'

import type { ReactNode, SyntheticEvent } from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import type { FCC } from 'app/types'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import FlexBetween from 'components/flexbox/FlexBetween'
import Tab from '@mui/material/Tab'

const StyledCard = styled(Card)(() => ({
  position: 'relative',
}))
const StyledTabList = styled(TabList)(({ theme }) => ({
  [theme.breakpoints.down(780)]: {
    width: '100%',
    marginBottom: 20,
    '& .MuiTabs-flexContainer': { justifyContent: 'space-between' },
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiTabs-flexContainer': {
      minWidth: 400,
      justifyContent: 'space-between',
    },
  },
}))
const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.text.primary,
}))
const StyledTabPanel = styled(TabPanel)(() => ({ padding: 0 }))

type TabItem = {
  title: string
  children: {
    component: any
    props?: any
  }
}
export type TabsProps = {
  tabs: TabItem[]
  header?: ReactNode
  sx?: any
}
const Tabs: FCC<TabsProps> = ({ tabs, header, sx }) => {
  const [value, setValue] = useState('0')
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <StyledCard>
        {header}
        <FlexBetween flexWrap="wrap" padding="0 2rem">
          <StyledTabList onChange={handleChange} sx={sx}>
            {tabs.map(({ title }, index) => {
              return <StyledTab key={title} label={title} value={index.toString()} />
            })}
          </StyledTabList>
        </FlexBetween>
      </StyledCard>
      <Grid container pt={2}>
        <Grid item xs={12}>
          {tabs.map(({ title, children }, index) => {
            return (
              <StyledTabPanel key={title} value={index.toString()}>
                <children.component {...(children.props || {})} />
              </StyledTabPanel>
            )
          })}
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default Tabs
