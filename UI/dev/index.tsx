import type { FC } from 'react'
import { Fragment } from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'

import { I18n } from './I18n'
import { Protocol } from './Protocol'

const Content = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}))

const Dev: FC = () => {
  return (
    <Fragment>
      <Content>
        <Stack spacing={2}>
          <I18n />
          <Protocol />
        </Stack>
      </Content>
    </Fragment>
  )
}

export default Dev
