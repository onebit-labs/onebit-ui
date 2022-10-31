import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitAPI.portfolioDaily'
const { reducer, select, useRequestController: usePortfolioDailyController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, usePortfolioDailyController }
