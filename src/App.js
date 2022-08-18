import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Login from 'container/auth/login'
import Inventory from 'container/inventory'
import Orders from 'container/orders'
import Products from 'container/products'
import Product from 'container/product'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <>
    <ToastContainer />

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:action' element={<Product />} />
      <Route path='/product/:action/:id' element={<Product />} />

      <Route path='*' element={<Navigate replace to='/login' />} />
    </Routes>
  </>
)

export default App
