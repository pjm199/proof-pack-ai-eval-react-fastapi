import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from './TodoList'
test('add & toggle', ()=>{
  render(<TodoList initialItems={[]}/>)
  const input = screen.getByLabelText('todo-input')
  fireEvent.change(input,{target:{value:'milk'}}); fireEvent.keyDown(input,{key:'Enter'})
  expect(screen.getByText('milk')).toBeInTheDocument()
  fireEvent.click(screen.getByText('milk'))
  expect(screen.getByText('milk')).toHaveStyle('text-decoration: line-through')
})
