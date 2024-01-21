import { useState } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0);
  return (
    <>
      <Count count = {count} setCount={setCount}/>

    </>
  )
}

function Count({count, setCount}) {
  return(
    <>
      {count}
      <br />
      <Button count={count} setCount={setCount}/>
    </>
  )
}

function Button({count, setCount}) {
  return (
    <>
      <button onClick={() => {
        setCount(count+1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(count-1)
      }}>Decrement</button>
    </>
  )
}

export default App
