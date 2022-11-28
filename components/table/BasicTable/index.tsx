import type { FC } from 'react'
import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TablePagination from '@mui/material/TablePagination'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'
import Button from '@mui/material/Button'

import PCTable from './PCTable'
import MobileTable from './MobileTable'
import type { BasicTableProps } from './types'
import { Paragraph } from 'components/Typography'

const BasicTable: FC<BasicTableProps> = (props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Fragment>
      {matches ? <PCTable {...props} /> : <MobileTable {...props} />}
      {props.pagination && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={props.pagination.count}
          rowsPerPage={props.pagination.rowsPerPage}
          page={props.pagination.page}
          onPageChange={props.pagination.onPageChange}
          onRowsPerPageChange={props.pagination.onRowsPerPageChange}
        />
      )}
      {props.loadMore && (
        <FlexRowAlign paddingTop={2}>
          {props.loadMore.end ? (
            <Paragraph color="text.secondary">{t('table.noMoreData')}</Paragraph>
          ) : (
            <Button disabled={props.loadMore.disabled} onClick={props.loadMore.onLoadMore}>
              {t('table.loadMore')}
            </Button>
          )}
        </FlexRowAlign>
      )}
    </Fragment>
  )
}

export default BasicTable
