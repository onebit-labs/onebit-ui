import { combineReducers } from 'redux'

import depositor from './depositor'
import vault from './vault'
import netValue from './netValue'
import portfolioTerm from './portfolioTerm'
import transaction from './transaction'

const reducer = combineReducers({
  depositor,
  vault,
  netValue,
  portfolioTerm,
  transaction,
})

export default reducer
