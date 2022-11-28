import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as seriesDailySelect } from './store/seriesDaily'
import { select as portfolioDailySelect } from './store/portfolioDaily'

const useOnebitAPIService = () => {
  const seriesDaily = useAppSelector(seriesDailySelect.selectData)
  const portfolioDaily = useAppSelector(portfolioDailySelect.selectData)

  return {
    seriesDaily,
    portfolioDaily,
  }
}
const { Provider: OnebitAPIProvider, createUseContext } = createContext(useOnebitAPIService)
export const createOnebitAPIContext = createUseContext

export default OnebitAPIProvider
