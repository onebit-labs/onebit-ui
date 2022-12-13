import type { ThunkAction, Action } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import theme from 'app/theme/store'
import erc20 from 'domains/data/erc20/store'
import vault from 'domains/data/vault/store'
import onebitAPI from 'domains/data/onebit-api/store'
import onebitGraph from 'domains/data/onebit-graph/store'
import nprogress from 'lib/nprogress/store/nprogress'

export function makeStore() {
  return configureStore({
    reducer: {
      theme,
      erc20,
      vault,
      onebitAPI,
      onebitGraph,
      nprogress,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
