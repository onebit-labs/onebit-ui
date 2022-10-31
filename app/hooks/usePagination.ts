import type { BasicTableProps } from 'components/table/BasicTable/types'
import { useCallback, useState } from 'react'

type PaginationProps = {
  total: any
}
export const usePagination = () => {
  const [pageSize, setPageSize] = useState(10)
  const [pageNo, setPageNo] = useState(1)

  const getPagination = useCallback(
    ({ total }: PaginationProps) =>
      ({
        count: parseInt(total as any) || 0,
        page: pageNo - 1,
        rowsPerPage: pageSize,
        onPageChange: (event, newPage) => {
          setPageNo(newPage + 1)
        },
        onRowsPerPageChange: (event) => {
          setPageSize(parseInt(event.target.value, 10))
          setPageNo(1)
        },
      } as BasicTableProps['pagination']),
    [pageNo, pageSize]
  )

  return {
    getPagination,
    pageSize,
    pageNo,
  }
}
