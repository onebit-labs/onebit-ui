import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'vault.userExpirationTimestamp'
const {
  reducer,
  select,
  useRequestController: useUserExpirationTimestampController,
} = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useUserExpirationTimestampController }
