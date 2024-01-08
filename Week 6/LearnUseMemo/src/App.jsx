import { useEffect, useMemo, useState, memo, useCallback } from 'react'
import './App.css'
import LearnCustomHook from './components/learnCustomHook';


function App() {
  const [counter, setCounter] = useState(0);

  const logSomething = useCallback(() => {
    console.log("Hii Rishu")
  },[])

  return (
    
    <>
      <ButtonComponent inputFunction= {logSomething}/>

      <br />

      <button onClick={() => {
        setCounter(counter+1);
      }}>Counter {counter}</button>

      <br />

      <LearnCustomHook/>

    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("chid rendered")

  return(
    <>
      <button>Button Clicked</button>
    </>
  )
})


export default App
