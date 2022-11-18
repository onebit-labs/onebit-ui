import { createContext } from 'app/utils/createContext'
import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { select as reserveDataSelect } from 'domains/data/lendingPool/store/reserveData'

export const useLoadingService = () => {
  const reserveDataSource = useAppSelector(reserveDataSelect.selectData)
  const reserveDataSourceLoading = useAppSelector(reserveDataSelect.selectLoading)
  const portfolio = useMemo(() => {
    return {
      init: !!reserveDataSource,
      loading: reserveDataSourceLoading,
    }
  }, [reserveDataSource, reserveDataSourceLoading])

  return { portfolio }
}

const { Provider: LoadingProvider, createUseContext } = createContext(useLoadingService)

export const createLoadingContext = createUseContext
export default LoadingProvider
