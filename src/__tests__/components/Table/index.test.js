import { render, screen, waitFor } from '@testing-library/react'

import { orderColumns } from 'utils/constants/order'
import Table from 'components/Table'
import { TestApp } from 'utils/test'

describe('Table Component', () => {
  beforeEach(() => render(<Table data={orderColumns} />, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 11 rows', async () => {
    await waitFor(() => {
      const row = screen.getAllByRole('row')
      expect(row).toHaveLength(11)
    })
  })

  it('should have 2 rowgroup', async () => {
    await waitFor(() => {
      const rows = screen.getAllByRole('rowgroup')
      expect(rows).toHaveLength(2)
    })
  })
})
