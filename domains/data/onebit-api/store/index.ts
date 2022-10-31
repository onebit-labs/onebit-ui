import { combineReducers } from 'redux'

import seriesDaily from './seriesDaily'
import portfolioDaily from './portfolioDaily'

const reducer = combineReducers({
  seriesDaily,
  portfolioDaily,
})

export default reducer
