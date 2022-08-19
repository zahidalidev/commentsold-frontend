import { render, screen, waitFor } from '@testing-library/react'

import DeleteModal from 'components/DeleteModal'
import { TestApp } from 'utils/test'

describe('Delete Modal Component', () => {
  const Modal = <DeleteModal show />

  beforeEach(() => render(Modal, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 2 buttons', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })
  })

  it('should have yes buttons', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', {
        name: 'Yes',
      })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have no buttons', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', {
        name: 'No',
      })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have description', async () => {
    const element = await screen.findAllByText(/Are you sure you want to delete?/i)
    expect(element[0]).toHaveClass('description')
  })

  it('should have modal', async () => {
    const modal = screen.getAllByTestId('modal-container')
    expect(modal).toHaveLength(1)
  })
})
