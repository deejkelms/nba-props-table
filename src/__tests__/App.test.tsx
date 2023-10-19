import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('should render the PropTableContainer component', () => {
    render(<App />)
    expect(screen.getByTestId('app-heading')).toHaveTextContent(
      'NBA Player Props'
    )
  })
})
