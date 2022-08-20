import { Box } from '@mui/material'
import DataTable from 'react-data-table-component'
import { defaultPageCount } from 'utils/constants/common'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'

export default ({
  data, count, columns, setPageNumber, setRowsPerPage, setSortBy, loading,
}) => {
  const table = (
    <Box data-testid='table'>
      <DataTable
        theme='solarized'
        columns={columns}
        defaultSortFieldId={1}
        data={data}
        pagination
        highlightOnHover
        paginationTotalRows={count}
        paginationPerPage={defaultPageCount}
        paginationServer
        onChangePage={(number) => setPageNumber(number - 1)}
        onChangeRowsPerPage={(number) => setRowsPerPage(number)}
        sortServer
        persistTableHead
        onSort={(column, order) => setSortBy({ sortColumn: column.name, sortOrder: order })}
      />
    </Box>
  )

  const skeleton = (
    <Skeleton>
      <Table rows={5} />
    </Skeleton>
  )

  const load = loading ? skeleton : table

  return data.length !== 0 ? table : load
}
