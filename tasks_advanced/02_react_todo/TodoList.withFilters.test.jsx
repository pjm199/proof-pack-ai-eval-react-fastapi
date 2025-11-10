import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoListWithFilters from './TodoList.withFilters'
test('filters work', ()=>{
  render(<TodoListWithFilters initialItems={[
    {id:'1',text:'milk',done:false},
    {id:'2',text:'bread',done:true}
  ]}/>)
  expect(screen.getByText('milk')).toBeInTheDocument()
  expect(screen.getByText('bread')).toBeInTheDocument()
  fireEvent.click(screen.getByText('Active'))
  expect(screen.getByText('milk')).toBeInTheDocument()
  expect(screen.queryByText('bread')).toBeNull()
  fireEvent.click(screen.getByText('Done'))
  expect(screen.getByText('bread')).toBeInTheDocument()
  expect(screen.queryByText('milk')).toBeNull()
})
