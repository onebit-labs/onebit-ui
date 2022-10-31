import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'erc20.oracle'
const { reducer, select, useRequestController: useOracleController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useOracleController }
