import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
function App() {

  return (
    <div>
      <h2>Redux Todo App</h2>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
