import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import { todosAtomFamily } from './atoms'
import { useEffect } from 'react';

function App() {

  return (
    <>
      <RecoilRoot>
        <Updater/>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={2}/>
        <Todo id={2}/>
        <Todo id={2}/>
      </RecoilRoot>
    </>
  )
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id))

  return (
    <>
      {currentTodo.title}
      <br />
      {currentTodo.description}
      <br />
      <br />
    </>
  )
}


function Updater() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 2,
        title: "new todo",
        description: "new todo description"
      })
    },5000)
  },[])
  return (
    <>
    </>
  )
}

export default App
