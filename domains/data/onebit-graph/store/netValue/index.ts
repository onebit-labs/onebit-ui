import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitGraph.netValue'
const { reducer, select, useRequestController: useNetValueController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useNetValueController }
