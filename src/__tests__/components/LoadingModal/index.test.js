import { render, screen } from '@testing-library/react'

import LoadingModal from 'components/LoadingModal'
import { TestApp } from 'utils/test'

describe('Loading Modal Component', () => {
  const Modal = <LoadingModal show />

  beforeEach(() => render(Modal, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)

    expect(screen).toMatchSnapshot()
  })
})
