import { useState, useEffect } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'

function App() {
  //List of todo description
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  //Create a new list and set that to todos
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  //index: position of the to-do item you want to delete from the list.
  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index; // If todoIndex is not equal to index (todoIndex !== index).
                                  // that item will be kept in the new array.
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    
    // Check if localTodos exists and is not null before parsing
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos);
      
      // Make sure 'todos' exists within the parsed object
      if (parsedTodos && parsedTodos.todos) {
        setTodos(parsedTodos.todos);
      }
    }
  }, []);
  
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
  )
}

export default App
