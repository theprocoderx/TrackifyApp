import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Sidebar from '../components/Sidebar'

describe('Sidebar Component', () => {
  it('renders the sidebar text', () => {
    render(<Sidebar />)
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
  })
})
