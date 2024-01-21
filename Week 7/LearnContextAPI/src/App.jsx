import { useState } from 'react'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // wrap anyone that wants to use the teleported value inside a provider

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
      
    </>
  )
}

function Count({setCount}) {
  return (
    <>
      <CountRender/>
      <Buttons setCount={setCount}/>
    </>
  )
}

function CountRender() {
  const count = useContext(CountContext)
  return(
    <>
      {count}
    </>
  )
}

function Buttons({setCount}) {
  const count = useContext(CountContext)
  return(
    <>
      <button onClick={() => {
        setCount(count+1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count-1)
      }}>Decrease</button>
    </>
  )
}



export default App
