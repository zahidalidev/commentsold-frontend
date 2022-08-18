import DataTable, { createTheme } from 'react-data-table-component'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'

createTheme('solarized', {
  action: {
    hover: 'rgb(230, 244, 255)',
  },
})

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
      pointerOnHover
      paginationTotalRows={data.count}
      paginationPerPage={15}
      paginationServer
      onChangePage={(number) => setPageNumber(number)}
      onChangeRowsPerPage={(number) => setRowsPerPage(number)}
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
