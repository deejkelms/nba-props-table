import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import SelectFilter from '../SelectFilter'

describe('SelectFilter', () => {
  it('should render select element with options and label', () => {
    // Arrange
    const options = ['Option 1', 'Option 2', 'Option 3']
    const label = 'Filter'
    const onFilterChange = () => {}

    // Act
    render(
      <SelectFilter
        options={options}
        label={label}
        onFilterChange={onFilterChange}
      />
    )
    const filterSelect = screen.getByTestId('select-filter')

    // Assert
    expect(screen.getByText(`Select ${label}`)).toBeInTheDocument()
    expect(filterSelect).toHaveValue('')
    expect(filterSelect).toHaveStyle('width: 8rem;')
    expect(filterSelect.querySelectorAll('option')).toHaveLength(
      options.length + 1
    )
  })
})
