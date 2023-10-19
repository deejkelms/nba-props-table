import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import PropTableContainer from '../PropTableContainer'

describe('PropTableContainer', () => {
  it('should render the component with default props and filters', () => {
    // Act
    render(<PropTableContainer />)

    // Assert
    expect(screen.getByTestId('app-heading')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Search by player or team')
    ).toBeInTheDocument()
    expect(screen.getByText('Select Market')).toBeInTheDocument()
    expect(screen.getByText('Select Position')).toBeInTheDocument()
    expect(screen.getByText('Select Status')).toBeInTheDocument()
  })
})
