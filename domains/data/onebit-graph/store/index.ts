import { combineReducers } from 'redux'

import depositor from './depositor'
import lendingPool from './lendingPool'
import portfolioTerm from './portfolioTerm'
import transaction from './transaction'

const reducer = combineReducers({
  depositor,
  lendingPool,
  portfolioTerm,
  transaction,
})

export default reducer
