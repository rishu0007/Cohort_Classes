import React, { useEffect, useState } from 'react'

function useMyFirstCustomHook() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
            const json = await res.json();
            setTodos(json.todos);
        })
    },[])
    return todos;
}

function LearnCustomHook() {

  const todos = useMyFirstCustomHook();
    
  return (
    <div>
        {todos.map((todo) => (
            <Todos key={todo.id} title={todo.title} description={todo.description}/>
        ))}
    </div>
  )
}

function Todos({title, description}) {
    return(
        <>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </>
    )

}

export default LearnCustomHook