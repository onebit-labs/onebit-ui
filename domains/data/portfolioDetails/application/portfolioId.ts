import { useUnmount } from 'app/hooks/useUnmount'
import { usePortfolioDetails } from 'domains/data'
import { useEffect, useState } from 'react'

export const usePagePropsEffect = (props: any) => {
  const { portfolioId } = usePortfolioDetails()

  useEffect(() => {
    portfolioId.set(props.id)
  }, [portfolioId, props.id])

  useUnmount(() => {
    portfolioId.set(undefined)
  })
}

export const usePortfolioId = () => {
  const [portfolioId, setPortfolioId] = useState('')

  return {
    value: portfolioId,
    set: setPortfolioId,
  }
}
