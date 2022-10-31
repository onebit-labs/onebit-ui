import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'erc20.balanceOf'
const { reducer, select, useRequestController: useBalanceOfController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useBalanceOfController }
