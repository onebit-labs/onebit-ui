import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'lendingPool.userExpirationTimestamp'
const {
  reducer,
  select,
  useRequestController: useUserExpirationTimestampController,
} = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useUserExpirationTimestampController }
