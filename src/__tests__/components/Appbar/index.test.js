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
      expect(screen.getAllByRole('button')[0]).toBeInTheDocument()
    })
  })

  it('should have four buttons', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('button')).toHaveLength(4)
    })
  })
})
