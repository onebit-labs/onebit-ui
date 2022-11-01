import { combineReducers } from 'redux'

import lendingPool from './lendingPool'
import portfolioTerm from './portfolioTerm'

const reducer = combineReducers({
  lendingPool,
  portfolioTerm,
})

export default reducer
