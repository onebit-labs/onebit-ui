import UI from 'UI/portfolioDetails'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { FC } from 'react'
import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations(
  (props) => {
    const { id } = props.params
    return {
      props: {
        id: typeof id === 'string' ? id : id[0],
      },
    }
  },
  {
    namespaces: ['portfolioDetails'],
  }
)
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Page: FC<{ id: string }> = (props) => {
  console.log(props)
  return <UI />
}

export default Page
