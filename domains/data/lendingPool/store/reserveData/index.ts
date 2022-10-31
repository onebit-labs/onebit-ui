import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'lendingPool.reserveData'
const { reducer, select, useRequestController: useReserveDataController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useReserveDataController }
