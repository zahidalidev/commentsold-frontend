import { render, screen, waitFor } from '@testing-library/react'

import Appbar from 'components/Appbar'
import { TestApp } from 'utils/test'

describe('Appbar Component', () => {
  beforeEach(() => render(<Appbar />, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)

    expect(screen).toMatchSnapshot()
  })

  it('should have inventory button', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')[0]
      expect(button).toBeInTheDocument()
    })
  })

  it('should have four buttons', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(4)
    })
  })
})
