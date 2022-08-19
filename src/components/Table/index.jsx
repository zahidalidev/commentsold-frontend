import DataTable from 'react-data-table-component'
import { defaultPageCount } from 'utils/constants/common'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'

export default ({
  data, count, columns, setPageNumber, setRowsPerPage, setSortBy,
}) => {
  const table = (
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
      onSort={(column, order) => setSortBy({ sortColumn: column.name, sortOrder: order })}
    />
  )
  const skeleton = (
    <Skeleton>
      <Table rows={5} cols={[<u key='a' />]} />
    </Skeleton>
  )

  return data.length !== 0 ? table : skeleton
}
