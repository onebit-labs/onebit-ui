import type { FC } from 'react'

import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

const Activities: FC = () => {
  const table = useTable()

  return <BasicTable {...table} />
}

export default Activities
