import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Orders from 'container/orders'
import { TestApp } from 'utils/test'

describe('Orders Container', () => {
  beforeEach(() => act(() => render(<Orders />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have appbar', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('appbar')).toBeInTheDocument()
    })
  })

  it('should have table', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('table')).toBeInTheDocument()
    })
  })
})
