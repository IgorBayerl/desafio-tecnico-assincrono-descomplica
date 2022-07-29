import AddCard from './AddCard'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, test } from 'vitest'
import { IStudentAdd } from '../graphql/interfaces'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

describe('AddCard', () => {
  const addItem = (student: IStudentAdd) => {}
  test('should render', () => {
    render(<AddCard addItem={addItem} />)
    expect(screen.getByTestId('add-card')).toBeInTheDocument()
  })

  test('should render inputs', () => {
    render(<AddCard addItem={addItem} />)
    expect(screen.getByTestId('name-input')).toBeInTheDocument()
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
    expect(screen.getByTestId('cpf-input')).toBeInTheDocument()
  })

  test('should render buttons', () => {
    render(<AddCard addItem={addItem} />)
    expect(screen.getByTestId('add-button')).toBeInTheDocument()
    expect(screen.getByTestId('cancel-button')).toBeInTheDocument()
  })
})
