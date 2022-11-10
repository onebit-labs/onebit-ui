import { useCallback, useEffect, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { safeGet } from 'app/utils/get'

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

export const useSignature = (account: string) => {
  const [hasUserAgreement, setUserAgreement] = useState(false)
  useEffect(() => {
    if (!account) return
    fetch(`/onebit-api/user_agreement?req_id=8b20dd8819bc7569f4994b1080646713&eoa=${account}`, {
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
    })
      .then((data) => data.json())
      .then((data) => {
        const hasUserAgreement = !!safeGet(() => data.data.memo)
        setUserAgreement(hasUserAgreement)
      })
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
        .then((data) => {
          console.log(data)
          setUserAgreement(true)
        })
    )
  }, [account])

  return {
    hasUserAgreement,
    userAgreement,
  }
}
