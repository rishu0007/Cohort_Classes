import './App.css'

function App() {

  return (
    <>
      <Todos title='Goto Gym' description='Going to gym at 10PM' isCompleted={false}/>
    </>
  )
}

interface todoProps {
  title: string,
  description: string,
  isCompleted: boolean
}

function Todos(props: todoProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.isCompleted}</h3>
    </>
  )
}

export default App
