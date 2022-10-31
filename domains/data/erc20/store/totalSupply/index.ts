import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'erc20.totalSupply'
const { reducer, select, useRequestController: useTotalSupplyController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useTotalSupplyController }
