import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Inventory from 'container/inventory'
import { TestApp } from 'utils/test'

describe('Inventory Container', () => {
  beforeEach(() => act(() => render(<Inventory />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have select filter', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('select-filter')).toBeInTheDocument()
    })
  })

  it('should have appbar', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('appbar')).toBeInTheDocument()
    })
  })

  it('should have textbox', async () => {
    await waitFor(() => {
      const textbox = screen.getAllByRole('textbox')
      expect(textbox).toHaveLength(1)
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('heading').length).toBe(1)
    })
  })

  it('should have table', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('table')).toBeInTheDocument()
    })
  })
})
