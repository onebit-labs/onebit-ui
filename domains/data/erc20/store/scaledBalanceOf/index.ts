import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'erc20.scaledBalanceOf'
const {
  reducer,
  select,
  useRequestController: useScaledBalanceOfController,
} = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useScaledBalanceOfController }
