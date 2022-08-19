import Button from '@mui/material/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import DeleteModal from 'components/deleteModal'
import { defaultPageCount, productColumnsKeys } from 'utils/constants'
import { getAllProducts, removeProducts } from 'api/products'
import Table from 'components/table'

import 'container/products/styles.scss'

const Products = () => {
  const [products, setProducts] = useState([])
  const [productsCount, setProductsCount] = useState(0)
  const [confirmModal, setConfirmModal] = useState(false)
  const [currentProductId, setcurrentProductId] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Name',
    sortOrder: 'asc',
  })
  const navigate = useNavigate()

  const handleProducts = async () => {
    try {
      const tempSortBy = { ...sortBy }
      tempSortBy.name = productColumnsKeys[tempSortBy.sortColumn]
      const { count, rows } = await getAllProducts(rowsPerPage, pageNumber, tempSortBy)
      setProducts(rows)
      setProductsCount(count)
    } catch (error) {
      toast.error(error)
      navigate('/login')
    }
  }

  useEffect(() => {
    handleProducts()
  }, [rowsPerPage, pageNumber, sortBy])

  const handleRemoveProduct = async () => {
    try {
      await removeProducts(currentProductId)
      await handleProducts()
    } catch (error) {
      toast.error(error)
    }
    setConfirmModal(false)
  }

  const handleAction = (type, id) => {
    if (type === 'update') navigate(`/product/update/${id}`)
    else {
      setcurrentProductId(id)
      setConfirmModal(true)
    }
  }

  const productsColumns = [
    {
      name: 'Name',
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: 'Style',
      selector: (row) => row.style,
      sortable: true,
    },
    {
      name: 'Brand',
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => (
        <>
          <DeleteOutlineOutlinedIcon
            className='delete-icon'
            onClick={() => handleAction('remove', row.id)}
          />
          <EditOutlinedIcon className='edit-icon' onClick={() => handleAction('update', row.id)} />
        </>
      ),
    },
  ]

  return (
    <>
      <AppBar />
      <DeleteModal
        deleteProduct={handleRemoveProduct}
        setConfirmModal={setConfirmModal}
        show={confirmModal}
      />
      <div className='container-fluid product-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card className='mat-card'>
            <CardContent className='mat-card-header'>
              <div className='card-heading'>
                <Typography noWrap className='product-heading' variant='h4'>
                  User Products
                </Typography>
                <Button
                  onClick={() => navigate('/product/add')}
                  className='add-button'
                  variant='outlined'
                >
                  Add Product
                </Button>
              </div>
            </CardContent>
            <Table
              data={products}
              count={productsCount}
              columns={productsColumns}
              setPageNumber={setPageNumber}
              setRowsPerPage={setRowsPerPage}
              setSortBy={setSortBy}
            />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Products
