import './App.css'
import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms.js';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2}/>
    <Todo id={2}/>
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));

   /*
      {
        contents,
        state
      }
   */

      if(todo.state === 'loading') {
        return(
          <div>
            loading....
          </div>
        )
      } else if(todo.state === 'hasValue') {
          return (
            <>
              {todo.contents.title}
              {todo.contents.description}
              <br />
            </>
          )
      } else if(todo.state === 'hasError') {
        return(
          <>
            Error while getting data form server.......
          </>
        )
      }
}

export default App
