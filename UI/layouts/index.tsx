import type { FC, PropsWithChildren } from 'react'

import DashboardLayoutV3 from './layout-v3/DashboardLayout'

const ActiveLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <DashboardLayoutV3>{children}</DashboardLayoutV3>
}

export default ActiveLayout
