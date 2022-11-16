import { combineReducers } from 'redux'

import balanceOf from './balanceOf'
import scaledBalanceOf from './scaledBalanceOf'
import isApproved from './isApproved'
import oracle from './oracle'
import totalSupply from './totalSupply'
import scaledTotalSupply from './scaledTotalSupply'

const reducer = combineReducers({
  balanceOf,
  scaledBalanceOf,
  isApproved,
  oracle,
  totalSupply,
  scaledTotalSupply,
})

export default reducer
