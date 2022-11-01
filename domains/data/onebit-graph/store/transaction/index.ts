import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitGraph.transaction'
const { reducer, select, useRequestController: useTransactionController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useTransactionController }
