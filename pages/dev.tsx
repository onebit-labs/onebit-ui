import UI from 'UI/dev'

import type { NextPage, GetStaticProps } from 'next'
import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: [],
})

const Page: NextPage = () => {
  return <UI />
}

export default __DEV__ ? Page : (): any => null
