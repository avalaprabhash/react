import { useState } from 'react'
import User from './components/User/User.jsx'
import Work from './components/Workspace/Work.jsx'
import './App.css'

function App() {
  const [UserDetails,setUserDetails] = useState([{
    id : 1,
    name : "abhi",
    email : "a@gmail.com"
  }])
  const [state, setState] = useState(0)

  return (
    <div className="app-wrapper">
      <User userDetails={UserDetails} setUserDetails={setUserDetails} setState1={setState} />
      <Work workState = {setState} UserDetails={UserDetails} state={state} setUserDetails1={setUserDetails} />
    </div>
  )
}

export default App
