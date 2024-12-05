import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.queryByText(/stefano react/i)
  // Learn React
  // LEARN REACT
  // learn react
  expect(linkElement).toBeNull()
})
