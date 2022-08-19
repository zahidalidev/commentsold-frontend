import { render, screen, waitFor } from '@testing-library/react'

import SelectFilter from 'components/SelectFilter'
import { TestApp } from 'utils/test'

describe('SelectFilter Component', () => {
  beforeEach(() => render(<SelectFilter />, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)

    expect(screen).toMatchSnapshot()
  })

  it('should have combobox', async () => {
    await waitFor(() => {
      const combobox = screen.getAllByRole('combobox')
      expect(combobox).toHaveLength(1)
    })
  })

  it('should have options', async () => {
    await waitFor(() => {
      const options = screen.getAllByRole('option')
      expect(options).toHaveLength(3)
    })
  })
})
