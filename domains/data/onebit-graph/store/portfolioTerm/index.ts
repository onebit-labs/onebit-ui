import { createStoreRequest } from 'store/helpers/request'
import type { SliceState } from './adapter'
import { request } from './adapter'

const key = 'onebitGraph.portfolioTerm'
const { reducer, select, useRequestController: usePortfolioTermController } = createStoreRequest<SliceState>(key)(request)

export default reducer
export { select, usePortfolioTermController }
