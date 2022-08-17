import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Routes from 'components/routes'

const App = () => (
  <RecoilRoot>
    <ToastContainer />
    <Routes />
  </RecoilRoot>
)

export default App
