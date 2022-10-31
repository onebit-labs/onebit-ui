import { Fragment } from 'react'
import type { NextPage, GetStaticProps } from 'next'

import UI from 'UI/dev'
import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: [],
})

const Page: NextPage = () => {
  return (
    <Fragment>
      <UI />
    </Fragment>
  )
}

export default __DEV__ ? Page : (): any => null
