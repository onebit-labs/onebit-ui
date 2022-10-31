import { Fragment } from 'react'
import type { NextPage } from 'next'

import UI from 'UI/dev'

const Page: NextPage = () => {
  return (
    <Fragment>
      <UI />
    </Fragment>
  )
}

export default __DEV__ ? Page : (): any => null
