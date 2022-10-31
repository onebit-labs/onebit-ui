import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'erc20.isApproved'
const { reducer, select, useRequestController: useIsApprovedController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useIsApprovedController }
