import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'vault.reserveNormalizedIncome'
const {
  reducer,
  select,
  useRequestController: useReserveNormalizedIncomeController,
} = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useReserveNormalizedIncomeController }
