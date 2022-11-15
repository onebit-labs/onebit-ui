import { combineReducers } from 'redux'

import depositor from './depositor'
import lendingPool from './lendingPool'
import netValue from './netValue'
import portfolioTerm from './portfolioTerm'
import transaction from './transaction'

const reducer = combineReducers({
  depositor,
  lendingPool,
  netValue,
  portfolioTerm,
  transaction,
})

export default reducer
