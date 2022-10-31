import { combineReducers } from 'redux'

import balanceOf from './balanceOf'
import isApproved from './isApproved'
import oracle from './oracle'

const reducer = combineReducers({
  balanceOf,
  isApproved,
  oracle,
})

export default reducer
