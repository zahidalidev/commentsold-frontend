import Login from 'container/auth/login'

export const routeList = [{ path: '/login', component: <Login /> }]

export const inputFieldsInitialValues = { email: '', password: '' }
export const inputFields = [
  {
    id: 0,
    type: 'email',
    label: 'Enter email address',
  },
  {
    id: 1,
    type: 'password',
    label: 'Enter password',
  },
]
