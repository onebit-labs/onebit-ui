import { combineReducers } from 'redux'

import portfolioDaily from './portfolioDaily'
import seriesDaily from './seriesDaily'

const reducer = combineReducers({
  portfolioDaily,
  seriesDaily,
})

export default reducer
