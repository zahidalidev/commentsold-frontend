import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Login from 'container/auth/login'
import { TestApp } from 'utils/test'

describe('Login Container', () => {
  beforeEach(() => act(() => render(<Login />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have form', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('content-form')).toBeInTheDocument()
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      expect(screen.getByRole('heading')).toBeInTheDocument()
    })
  })
})
