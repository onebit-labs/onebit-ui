import UI from 'UI/portfolioDetails'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { FC } from 'react'
import { withStaticTranslations } from 'app/i18n/hoc'
import { marktetIds } from 'lib/protocol/market'
import { usePagePropsEffect } from 'domains/data/portfolioDetails/application/portfolioId'

export const getStaticProps: GetStaticProps = withStaticTranslations(
  (props) => {
    const { id } = props.params
    return {
      props: {
        ...props,
        id: typeof id === 'string' ? id : id[0],
      },
    }
  },
  {
    namespaces: ['portfolioDetails'],
  }
)
export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const paths = [] as any

  locales.forEach((locale) => {
    marktetIds.forEach((id) => {
      paths.push({
        params: { id },
        locale,
      })
    })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

const Page: FC = (props) => {
  usePagePropsEffect(props)
  return <UI />
}

export default Page
