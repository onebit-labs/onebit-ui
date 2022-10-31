import UI from 'UI/dashboard'

import type { GetStaticProps, NextPage } from 'next'
import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: ['dashboard'],
})

const Page: NextPage = () => {
  return <UI />
}

export default Page
