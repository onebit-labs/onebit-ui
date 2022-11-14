import { safeGet } from 'app/utils/get'
import type { TableColumnsProps } from '../types'

export const getCellData = (row: any, column: TableColumnsProps) => {
  const value = safeGet(() => row[column.dataKey])
  let cellData: any
  if (column.isSelect) {
    cellData = safeGet(() => column.selectOptions[value])
  }
  return cellData || value
}
