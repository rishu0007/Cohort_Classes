import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'


function App() {
  const [value, setValue] = useState(1);


  return (
    <>
      <button onClick={() => {
        setValue(1)
      }}>1</button>
      <button onClick={() => {
        setValue(2)
      }}>2</button>
      <button onClick={() => setValue(3)}>3</button>
      <button onClick={() => setValue(4)}>4</button>
      <Todos id={value} />
    </>
  )
}

function Todos({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((res) => {
      setTodo(res.data.todo);
    })
  },[id])
  return (
    <div>
      Id: {id}
      <h2>{todo.title}</h2>
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App
