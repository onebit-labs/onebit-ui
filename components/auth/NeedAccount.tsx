import type { FCC } from 'app/types'
import { useWallet } from 'domains'

import FlexRowAlign from 'components/flexbox/FlexRowAlign'
import ConnectButton from 'lib/protocol/components/wallet/ConnectButton'

const NeedAccount: FCC = ({ children }) => {
  const { account } = useWallet()
  if (!account)
    return (
      <FlexRowAlign minHeight={600}>
        <ConnectButton />
      </FlexRowAlign>
    )
  return <>{children}</>
}

export default NeedAccount
