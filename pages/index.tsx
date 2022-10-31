import UI from 'doc/component/MuiComponentSamples'

import type { GetStaticProps, NextPage } from 'next'
import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: [],
})

const IndexPage: NextPage = () => {
  return <UI />
}

export default IndexPage
