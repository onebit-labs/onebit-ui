import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitAPI.seriesDaily'
const { reducer, select, useRequestController: useSeriesDailyController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, useSeriesDailyController }
