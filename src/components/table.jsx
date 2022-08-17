import DataTable, { createTheme } from 'react-data-table-component'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'
import { useNavigate } from 'react-router-dom'

createTheme('solarized', {
  action: {
    hover: 'rgb(230, 244, 255)',
  },
})

const CusTable = ({ data, columns, touch = false }) => {
  const navigate = useNavigate()

  const table = (
    <DataTable
      theme='solarized'
      onRowClicked={(row) => touch && navigate(`/products/${row.id}`, { state: row })}
      columns={columns}
      defaultSortFieldId={1}
      data={data}
      pagination
      highlightOnHover
      pointerOnHover
      paginationPerPage={15}
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
