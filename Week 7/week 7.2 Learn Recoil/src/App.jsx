import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { CountContext } from './context'
import { useContext, useState } from 'react'
import { countAtom, evenSelector } from './store/atom/count'

function App() {

  // wrap anyone that wants to use the teleported value inside a provider

  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
        
    </>
  )
}

function Count() {
  return (
    <>
        <CountRender/>
        <EvenCountRenderer/>
        <Buttons/>
    </>
  )
}

function CountRender() {
  const count = useRecoilState(countAtom);
  return(
    <>
      <b>
        {count}
      </b>
      <br />
      
    </>
  )
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  const text = isEven == 0 ? "even" : "";

  return(
    <>
      {text}
    </>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return(
    <>
      <button onClick={() => {
        setCount((count) => count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount((count) => count-1)
      }}>Decrease</button>
    </>
  )
}

export default App
