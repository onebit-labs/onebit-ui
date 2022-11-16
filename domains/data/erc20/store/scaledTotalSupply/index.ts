import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'erc20.scaledTotalSupply'
const {
  reducer,
  select,
  useRequestController: useScaledTotalTotalSupplyController,
} = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useScaledTotalTotalSupplyController }
