import { useState } from 'react';
import './App.css'

function App() {

  const [todos, setTodos ] = useState([{
    title: "study",
    description: "Go to gym",
    completed: false
  } , {
    title: "play",
    description: "play something",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "a random todo",
      description: "desc of a random todo"
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Random Todo</button>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description}/>
      ))}
    </>
  )
}

function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  )
}

export default App
