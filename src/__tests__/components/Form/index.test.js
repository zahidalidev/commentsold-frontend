import { render, screen, waitFor } from '@testing-library/react'

import Form from 'components/Form'
import { TestApp } from 'utils/test'

describe('Form Component', () => {
  const form = (
    <Form
      fieldsInitialValues={{ product_name: '' }}
      handleSubmition={() => null}
      action='add'
      validate={() => null}
      fields={[
        {
          id: 0,
          label: 'Product name',
          name: 'product_name',
          type: 'text',
        },
      ]}
    />
  )

  beforeEach(() => render(form, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have add button', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button', { name: 'add' })
      expect(button).toHaveLength(1)
    })
  })

  it('should have textbox', async () => {
    await waitFor(() => {
      const textbox = screen.getAllByRole('textbox')
      expect(textbox).toHaveLength(1)
    })
  })
})
