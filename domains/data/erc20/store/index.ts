import { combineReducers } from 'redux'

import balanceOf from './balanceOf'
import isApproved from './isApproved'
import oracle from './oracle'
import totalSupply from './totalSupply'

const reducer = combineReducers({
  balanceOf,
  isApproved,
  oracle,
  totalSupply,
})

export default reducer
