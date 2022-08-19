import { render, screen, waitFor } from '@testing-library/react'

import DeleteModal from 'components/DeleteModal'
import { TestApp } from 'utils/test'

describe('Delete Modal Component', () => {
  beforeEach(() => render(<DeleteModal show={true} />, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)

    expect(screen).toMatchSnapshot()
  })

  // it('should have inventory button', async () => {
  //   await waitFor(() => {
  //     const button = screen.getAllByRole('button')[0]
  //     expect(button).toBeInTheDocument()
  //   })
  // })
})
