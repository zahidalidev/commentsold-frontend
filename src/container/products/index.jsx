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
import ConfirmModal from 'components/confirmationAlert'
import { defaultPageCount } from 'utils/constants'
import { getToken } from 'utils/helpers'
import { getAllProducts, removeProducts } from 'services/products'
import Table from 'components/table'

import 'container/products/styles.scss'

const Products = () => {
  const [products, setProducts] = useState({})
  const [confirmModal, setConfirmModal] = useState(false)
  const [currentProductId, setcurrentProductId] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const navigate = useNavigate()

  const handleRemoveProduct = async () => {
    const oldProd = { ...products }
    try {
      const rows = oldProd.rows.filter((item) => item.id !== currentProductId)
      const tmepProducts = {
        rows,
        count: (oldProd.count -= 1),
      }
      setProducts(tmepProducts)

      const token = getToken()
      await removeProducts(currentProductId, token)
    } catch (error) {
      setProducts(oldProd)
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

  const handleProducts = async () => {
    try {
      const token = getToken()
      const { data } = await getAllProducts(token, rowsPerPage, pageNumber)
      setProducts(data)
    } catch (error) {
      toast.error(error)
      navigate('/login')
    }
  }

  useEffect(() => {
    handleProducts()
  }, [rowsPerPage, pageNumber])

  return (
    <>
      <AppBar />
      <ConfirmModal
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
              columns={productsColumns}
              setPageNumber={setPageNumber}
              setRowsPerPage={setRowsPerPage}
            />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Products
