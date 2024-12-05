import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// to-do:
// - il bottone all'avvio c'è
// - il bottone all'avvio abbia label "MOSTRA"

// vi suggerisco di raggruppare test simili in "suites"
describe('Tutti i test del bottone', () => {
  // ora andiamo a inserire i singoli test
  test("il bottone all'avvio c'è", () => {
    // 1) monto il componente nel Virtual Dom
    render(<HiddenSection />)
    // 2) ricerco l'elemento (in questo caso il bottone)
    const button = screen.getByRole('button')
    // screen.getByText('MOSTRA')
    // 3) non intendiamo al momento interagirci, skip!
    // 4) verifica ipotesi/tesi
    expect(button).toBeInTheDocument()
  })

  test("il bottone all'avvio ha etichetta 'MOSTRA'", () => {
    // 1) monto il componente nel Virtual Dom
    render(<HiddenSection />)
    // 2) ricerco l'elemento (in questo caso il bottone)
    const button = screen.getByText(/mostra/i) // mOsTRa
    // 3) skip
    // 4) verifica ipotesi/tesi
    expect(button).toBeInTheDocument()
  })
})

// - il cane all'avvio non ci deve essere
// - se clicco il bottone, il cane appare

describe('tutti i test della card', () => {
  test("all'avvio la card con il cane non c'è", () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const card = screen.queryByAltText('dog picture') // null
    // 3)
    // 4)
    expect(card).toBeNull()
  })

  test("cliccando il bottone, la card con il cane c'è", () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra/i) // mOsTRa
    // 3) clicco il bottone
    fireEvent.click(button) // ho cliccato il bottone 1 volta
    // a questo punto, controllo l'esistenza della card

    // bonus level: controlliamo anche che ora l'etichetta sia "NASCONDI"
    const nascondi = screen.getByText(/nascondi/i)

    const card = screen.getByAltText('dog picture')
    // 4)
    expect(card).toBeInTheDocument()
  })

  test("cliccando due volte il bottone, la card con il cane NON c'è", () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra/i) // mOsTRa
    // 3) clicco il bottone
    fireEvent.click(button)
    fireEvent.click(button) // ho cliccato il bottone 2 volte
    // a questo punto, controllo l'esistenza della card

    const card = screen.queryByAltText('dog picture')
    // 4)
    expect(button).toHaveClass('btn-success')
    expect(card).not.toBeInTheDocument()
  })
})
