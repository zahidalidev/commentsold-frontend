import {
  Box, Button, CardContent, Paper, Typography,
} from '@mui/material'
import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material'
import Card from '@mui/joy/Card'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { defaultPageCount } from 'utils/constants/common'
import { fetchAllProducts, removeProducts } from 'api/products'
import { isEmpty } from 'lodash'
import { productColumnsKeys } from 'utils/constants/product'
import {
  AppBar, DeleteModal, LoadingModal, Table,
} from 'components'
import { formatNumbers, getToken } from 'utils/helpers'

import './styles.scss'

const Products = () => {
  const [products, setProducts] = useState([])
  const [productsCount, setProductsCount] = useState(0)
  const [confirmModal, setConfirmModal] = useState(false)
  const [currentProductId, setcurrentProductId] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [loading, setloading] = useState(false)
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Name',
    sortOrder: 'asc',
  })
  const navigate = useNavigate()

  const handleProducts = async () => {
    setloading(true)
    const tempSortBy = { ...sortBy }
    tempSortBy.name = productColumnsKeys[tempSortBy.sortColumn]
    const { count, rows } = await fetchAllProducts(rowsPerPage, pageNumber, tempSortBy)

    if (count !== undefined) {
      setProducts(rows)
      setProductsCount(count)
    } else {
      const token = getToken()
      if (!token) {
        navigate('/login')
      }
    }
    setloading(false)
  }

  useEffect(() => {
    handleProducts()
  }, [rowsPerPage, pageNumber, sortBy])

  const handleRemoveProduct = async () => {
    setloading(true)
    const data = await removeProducts(currentProductId)
    if (!isEmpty(data)) {
      await handleProducts()
      toast.success('Product removed')
    } else {
      toast.error('Error! product not removed')
    }
    setloading(false)
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
      wrap: true,
    },
    {
      name: 'Style',
      selector: (row) => row.style,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Brand',
      selector: (row) => row.brand,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Action',
      selector: (row) => (
        <>
          <DeleteOutlineOutlined
            className='delete-icon'
            onClick={() => handleAction('remove', row.id)}
          />
          <EditOutlined className='edit-icon' onClick={() => handleAction('update', row.id)} />
        </>
      ),
      wrap: true,
    },
  ]

  return (
    <>
      <AppBar />
      <LoadingModal show={loading} />
      <DeleteModal
        handleDelete={handleRemoveProduct}
        setConfirmModal={setConfirmModal}
        show={confirmModal}
      />
      <Box className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>
              Products - Total Products ({formatNumbers(parseInt(productsCount, 10))})
            </Typography>
            <CardContent className='mat-card-header'>
              <Button
                onClick={() => navigate('/product/add')}
                className='add-button'
                variant='outlined'
              >
                Add Product
              </Button>
            </CardContent>
            <Table
              data={products}
              count={productsCount}
              columns={productsColumns}
              setPageNumber={setPageNumber}
              setRowsPerPage={setRowsPerPage}
              setSortBy={setSortBy}
              loading={loading}
            />
          </Card>
        </Paper>
      </Box>
    </>
  )
}

export default Products
