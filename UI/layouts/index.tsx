import type { FCC } from 'app/types'
import ChainDialog from 'lib/protocol/components/wallet/ChainDialog'
import SignatureDialog from 'lib/protocol/components/wallet/SignatureDialog'
import ConnectDialog from 'lib/protocol/components/wallet/ConnectDialog'
import DialogsProvider from 'UI/dialogs'
import DepositDialog from 'UI/dialogs/DepositDialog'
import WithdrawalDialog from 'UI/dialogs/WithdrawalDialog'

import DashboardLayoutV3 from './layout-v3/DashboardLayout'

const ActiveLayout: FCC = ({ children }) => {
  return <DashboardLayoutV3>{children}</DashboardLayoutV3>
}
const Layout: FCC = ({ children }) => {
  return (
    <ActiveLayout>
      {children}
      <SignatureDialog />
      <ChainDialog />
      <ConnectDialog />
    </ActiveLayout>
  )
}

const DialogsLayout: FCC = ({ children }) => {
  return (
    <DialogsProvider>
      <Layout>{children}</Layout>
      <DepositDialog />
      <WithdrawalDialog />
    </DialogsProvider>
  )
}

export default DialogsLayout
