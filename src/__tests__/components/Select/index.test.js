import { render, screen } from '@testing-library/react'

import Select from 'components/Select'
import { TestApp } from 'utils/test'

describe('Select Component', () => {
  beforeEach(() => render(<Select />, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)

    expect(screen).toMatchSnapshot()
  })
})
