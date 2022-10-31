import type { FCC } from 'app/types'
import { createContext as c, useContext } from 'react'

export function createContext<T>(fn: (...args: any[]) => T, initialValue: T | undefined = undefined) {
  const Context = c(initialValue as T)
  const Provider: FCC = ({ children }) => <Context.Provider value={fn()}>{children}</Context.Provider>
  const createUseContext = () => () => useContext(Context)
  return {
    Context,
    Provider,
    createUseContext,
  }
}
