import { useEffect, useState } from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"

function App() {
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index){
    const newList = todos.filter((todo, todoindex)=>{
      return todoindex != index
    })
    persistData(newTodoList)
    setTodos(newList)
  }
  function handleEditTodos(index){
    const newTodo = todos[index]
    setTodoValue(newTodo)
    handleDeleteTodo(index)
  }
  useEffect(() => {
    if(!localStorage){
        return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])
  return (
    <>  
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodos={handleDeleteTodo} handleEditTodos={handleEditTodos} todos={todos}/>
    </>
  )
}

export default App
