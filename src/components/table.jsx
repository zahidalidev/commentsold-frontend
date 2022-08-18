import DataTable from 'react-data-table-component'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'

const CusTable = ({
  data, columns, setPageNumber, setRowsPerPage,
}) => {
  const table = (
    <DataTable
      theme='solarized'
      columns={columns}
      defaultSortFieldId={1}
      data={data.rows}
      pagination
      highlightOnHover
      paginationTotalRows={data.count}
      paginationPerPage={10}
      paginationServer
      onChangePage={(number) => setPageNumber(number)}
      onChangeRowsPerPage={(number) => setRowsPerPage(number)}
      paginationIconFirstPage={false}
      paginationIconLastPage={false}
    />
  )

  const skeleton = (
    <Skeleton>
      <Table rows={5} cols={[<u key='a' />]} />
    </Skeleton>
  )

  return data.length !== 0 ? table : skeleton
}

export default CusTable
