import { useDialog } from 'app/hooks/useDialog'
import { createContext } from 'app/utils/createContext'
import { useState } from 'react'

const useIdDialog = () => {
  const [id, setId] = useState('')

  const dialog = useDialog({
    onOpen: (id) => setId(id),
    onClose: () => setId(''),
  })

  return {
    id,
    ...dialog,
  }
}

const useDialogsService = () => {
  const deposit = useIdDialog()
  const withdraw = useIdDialog()
  return { deposit, withdraw }
}
const { Provider: DialogsProvider, createUseContext } = createContext(useDialogsService)
export const useDialogs = createUseContext()

export default DialogsProvider
