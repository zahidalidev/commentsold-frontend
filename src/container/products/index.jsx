import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/joy/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import AppBar from 'components/appbar'
import Table from 'components/table'
import { getToken } from 'utils/helpers'
import { getAllProducts, removeProducts } from 'services/products'

import 'container/products/styles.scss'
import ConfirmModal from 'components/confirmationAlert'

const Products = () => {
  const [products, setProducts] = useState([])
  const [confirmModal, setConfirmModal] = useState(false)
  const [currentAction, setcurrentAction] = useState(false)
  const [currentProductId, setcurrentProductId] = useState(false)
  const navigate = useNavigate()

  const handleProductAction = async () => {
    if (currentAction === 'edit') navigate(`/product/edit/${currentProductId}`)
    else {
      const oldProd = [...products]
      try {
        const tmepProducts = oldProd.filter((item) => item.id !== currentProductId)
        setProducts(tmepProducts)

        const token = getToken()
        await removeProducts(currentProductId, token)
      } catch (error) {
        setProducts(oldProd)
        toast.error('Error: Product not deleted!')
      }
    }
    setConfirmModal(false)
  }

  const handleAction = (type, id) => {
    setcurrentProductId(id)
    setcurrentAction(type)
    setConfirmModal(true)
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
        <div>
          <DeleteOutlineOutlinedIcon
            sx={{ color: '#FF3333' }}
            onClick={() => handleAction('remove', row.id)}
          />
          <EditOutlinedIcon
            sx={{ color: '#01225a', marginLeft: '1rem' }}
            onClick={() => handleAction('edit', row.id)}
          />
        </div>
      ),
      sortable: true,
    },
  ]

  const handleProducts = async () => {
    try {
      const token = getToken()
      const { data } = await getAllProducts(token)
      setProducts(data)
    } catch (error) {
      toast.error('Session expired')
      navigate('/login')
    }
  }

  useEffect(() => {
    handleProducts()
  }, [])

  return (
    <>
      <AppBar />
      <ConfirmModal
        deleteProduct={handleProductAction}
        setConfirmModal={setConfirmModal}
        show={confirmModal}
      />
      <div className='container-fluid product-container'>
        <Paper className='mat-paper' elevation={2}>
          <Typography className='product-heading' variant='h4'>
            User Products
          </Typography>
          <Button className='add-button' variant='contained' size='large'>
            Add Product
          </Button>
          <Card className='mat-card'>
            <Table data={products} columns={productsColumns} touch />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Products
