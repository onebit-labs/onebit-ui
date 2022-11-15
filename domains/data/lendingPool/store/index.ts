import { combineReducers } from 'redux'

import reserveData from './reserveData'
import reserveNormalizedIncome from './reserveNormalizedIncome'

const reducer = combineReducers({
  reserveData,
  reserveNormalizedIncome,
})

export default reducer
