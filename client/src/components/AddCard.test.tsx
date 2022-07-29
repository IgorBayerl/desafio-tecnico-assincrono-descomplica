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
})
