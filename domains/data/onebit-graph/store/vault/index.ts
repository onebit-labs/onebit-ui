import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitGraph.vault'
const { reducer, select, useRequestController: useVaultController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useVaultController }
