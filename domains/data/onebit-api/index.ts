import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as seriesDailySelect } from './store/seriesDaily'

const useOnebitAPIService = () => {
  const seriesDaily = useAppSelector(seriesDailySelect.selectData)

  return {
    seriesDaily,
  }
}
const { Provider: OnebitAPIProvider, createUseContext } = createContext(useOnebitAPIService)
export const createOnebitAPIContext = createUseContext

export default OnebitAPIProvider
