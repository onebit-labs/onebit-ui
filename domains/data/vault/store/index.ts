import { combineReducers } from 'redux'

import reserveData from './reserveData'
import reserveNormalizedIncome from './reserveNormalizedIncome'
import userExpirationTimestamp from './userExpirationTimestamp'

const reducer = combineReducers({
  reserveData,
  reserveNormalizedIncome,
  userExpirationTimestamp,
})

export default reducer
