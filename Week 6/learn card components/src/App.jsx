import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 10000);
    
  }, [])

  return (
    <>
    
      {todos.map((todo) => (
        <Todos key={todo.id} title = {todo.title} description={todo.description}></Todos>
      ))}

      {/* <CardWrapper>
        <div>
          hi there
        </div> 
      </CardWrapper>
      <CardWrapper>
        <div>
          Hello from Rishu
        </div> 
      </CardWrapper>
      <CardWrapper>
        <div>
          Kya haal chal Rishu
        </div> 
      </CardWrapper> */}
    </>
  )
}

// function CardWrapper({children}) {
//   return <div style={{border: "2px solid black", padding: 20, margin: 10}}>
//     {children}
//   </div>
// }

function Todos({title, description}) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
  </>
  )
  
}






export default App
