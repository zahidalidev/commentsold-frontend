import instance from 'api'
import { saveToken } from 'utils/helpers'

const login = (body) => (
  instance.post('/auth/login', {
    email: body.email,
    password: body.password,
  })
    .then(({ data }) => {
      instance.defaults.headers.common['access-token'] = data.token
      saveToken(data.token)

      return data
    })
    .catch(() => ({}))
)

export default login
