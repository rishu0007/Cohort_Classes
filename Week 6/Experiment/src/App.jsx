import { useState } from "react";
import React from "react";
import "./App.css";
let counter = 4;
function App() {
  // const [title, setTitle] = useState("my name is rishu");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "do something",
      description: "do now",
    },
    {
      id: 2,
      title: "go and eat",
      description: "eat at 10",
    },
    {
      id: 3,
      title: "study",
      description: "study now",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </>
  );
}

function Todo({title, description}) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
}

// function HeaderWithButton() {
//   const [title, setTitle] = useState("my name is rishu");
//   function updateTitle() {
//     setTitle(`my name is ${Math.random()}`)
//   }
//   return (
//     <>
//       <button onClick={updateTitle}>Click to update</button>
//       <Header title={title}></Header>
//     </>
//   )
// }

// const Header = React.memo( function Header({title}) {
//   return(
//     <div>
//       {title}
//     </div>
//   )
// })

export default App;
