import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitGraph.depositor'
const { reducer, select, useRequestController: useDepositorController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useDepositorController }
