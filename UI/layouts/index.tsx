import ChainDialog from 'lib/protocol/components/wallet/ChainDialog'
import ConnectDialog from 'lib/protocol/components/wallet/ConnectDialog'
import type { FC, PropsWithChildren } from 'react'

import DashboardLayoutV3 from './layout-v3/DashboardLayout'

const ActiveLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <DashboardLayoutV3>{children}</DashboardLayoutV3>
}
const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ActiveLayout>
      {children}
      <ChainDialog />
      <ConnectDialog />
      {/* <DepositDialog />
      <BorrowDialog /> */}
    </ActiveLayout>
  )
}

export default Layout
