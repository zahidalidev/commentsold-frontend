import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Products from 'container/products'
import { TestApp } from 'utils/test'

describe('Products Container', () => {
  beforeEach(() => act(() => render(<Products />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have appbar', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('appbar')).toBeInTheDocument()
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('heading').length).toBe(1)
    })
  })

  it('should have 5 button', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBe(5)
    })
  })
})
