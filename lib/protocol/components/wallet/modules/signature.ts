import { useCallback, useEffect, useRef, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { safeGet } from 'app/utils/get'
import { useDialog } from 'app/hooks/useDialog'

const signMessage = async (message: string) => {
  if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.')

  await window.ethereum.send('eth_requestAccounts')
  const provider = new Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const signature = await signer.signMessage(message)
  // const address = await signer.getAddress()

  return {
    message,
    signature,
    // address,
  }
}

export function useSignatureDialog() {
  const ref = useRef<() => void>()
  const { visible, open, close } = useDialog({
    onOpen: (callback) => {
      ref.current = callback
    },
    onClose: (type) => {
      if (type === 'success' && ref.current) ref.current()
    },
  })
  return { visible, open, close }
}

export const useSignature = (account: string) => {
  const dialog = useSignatureDialog()
  const [hasUserAgreement, setUserAgreement] = useState(false)
  useEffect(() => {
    if (!account) return
    dialog.open()
    // fetch(`/onebit-api/user_agreement?req_id=8b20dd8819bc7569f4994b1080646713&eoa=${account}`, {
    //   body: null,
    //   method: 'GET',
    //   mode: 'cors',
    //   credentials: 'omit',
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     const hasUserAgreement = !!safeGet(() => data.data.memo)
    //     setUserAgreement(hasUserAgreement)
    //   })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  const userAgreement = useCallback(() => {
    const message = `${account}`
    return signMessage(message).then(({ signature }) =>
      fetch(
        `/onebit-api/user_agreement?req_id=8b20dd8819bc7569f4994b1080646713&eoa=${account}&signature=${signature}&memo=userAgreement`,
        {
          body: null,
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
        }
      )
        .then((data) => data.json())
        .then(() => setUserAgreement(true))
    )
  }, [account])

  return {
    dialog,
    hasUserAgreement,
    userAgreement,
  }
}
