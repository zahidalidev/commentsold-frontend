import { Route, Routes, Navigate } from 'react-router-dom'

import { routeList } from 'utils/constants'

const AppRoutes = () => (
  <Routes>
    {routeList.map((item) => (
      <Route key={item.path} path={item.path} exact element={item.component} />
    ))}
    <Route path='*' element={<Navigate replace to='/login' />} />
  </Routes>
)

export default AppRoutes
