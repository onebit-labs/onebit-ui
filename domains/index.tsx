import type { FCC } from 'app/types'

import ControllersProvider, { createControllersContext } from './controllers'

const Provider: FCC = ({ children }) => {
  return (
    <ControllersProvider>
      {/* <DataProvider>{children}</DataProvider> */}
      {children}
    </ControllersProvider>
  )
}

export default Provider

export const useControllers = createControllersContext()
