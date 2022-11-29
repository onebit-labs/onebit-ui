import type { ColumnProps, TableProps } from 'react-virtualized'

export interface BasicTableProps<D = any> {
  columns: TableColumnsProps[]
  rowHeight?: number
  headerHeight?: number
  data: Array<D>
  dataFetcher?: (data: D) => Promise<any>
  tableProps?: Partial<TableProps>
  pagination?: {
    count: number
    page: number
    rowsPerPage: number
    onPageChange: (event: unknown, newPage: number) => void
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  loadMore?: {
    end: boolean
    disabled: boolean
    onLoadMore: (event: unknown) => void
  }
}

export type TableColumnsProps = ColumnProps & {
  isSelect?: boolean
  selectOptions?: Record<any, string>
  filters?: Array<(...args: any[]) => any>
}
