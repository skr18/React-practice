import { useState } from 'react'
import './App.css'

function App() {
  let currTime = new Date().toLocaleTimeString()
  const [time, setTime] = useState(currTime)
  setInterval(()=>{
    currTime = new Date().toLocaleTimeString()
    setTime(currTime)
  },1000)
  return (
    <>
     <h1>Time : {time}</h1>
    </>
  )
}

export default App
