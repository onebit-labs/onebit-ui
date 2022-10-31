import UI from 'UI/explorePortfolios'

import type { GetStaticProps, NextPage } from 'next'
import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: ['explorePortfolios'],
})

const Page: NextPage = () => {
  return <UI />
}

export default Page
