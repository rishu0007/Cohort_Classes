import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { notifications } from '../atoms'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  return(
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
      
    </>
  )
  
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res => {
  //     setNetworkCount(res.data)
  //   })
  // },[])

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging}) </button>
      <button>Notification ({networkCount.notifications})</button>
      <button>Me </button>
      
    </>
  )
}

export default App
