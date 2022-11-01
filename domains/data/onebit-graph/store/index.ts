import { combineReducers } from 'redux'

import lendingPool from './lendingPool'
import portfolioTerm from './portfolioTerm'
import transaction from './transaction'

const reducer = combineReducers({
  lendingPool,
  portfolioTerm,
  transaction,
})

export default reducer
