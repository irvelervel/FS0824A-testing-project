import {
  findAllByTestId,
  fireEvent,
  render,
  screen,
} from '@testing-library/react'
import FetchComponent from '../components/FetchComponent'

describe('users list', () => {
  // verifichiamo che l'input ci sia all'avvio
  test("input presente all'avvio", () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const input = screen.getByPlaceholderText(/cerca per nome/i)
    // 4)
    expect(input).toBeInTheDocument()
  })
  // all'avvio del componente, NON CI SONO elementi nella lista
  test("la lista all'avvio (prima della fetch) è vuota", () => {
    render(<FetchComponent />)
    const arrayOfUsers = screen.queryAllByTestId('list-element')
    expect(arrayOfUsers).toHaveLength(0)
  })
  // finita la fetch iniziale, ci devono essere esattamente 10 elementi di lista
  test('finita la fetch iniziale, ci devono essere esattamente 10 elementi di lista', async () => {
    render(<FetchComponent />)
    const arrayOfUsers = await screen.findAllByTestId('list-element')
    expect(arrayOfUsers).toHaveLength(10)
  })

  test("cercando la parola 'Patricia' nell'input dovrei ottenere al netto della fetch un solo list item", async () => {
    render(<FetchComponent />)
    const input = screen.getByPlaceholderText(/cerca per nome/i)
    fireEvent.change(input, { target: { value: 'Patricia' } })
    const arrayOfUsers = await screen.findAllByTestId('list-element')
    expect(arrayOfUsers).toHaveLength(1)
  })
})
