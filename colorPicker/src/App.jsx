import { useState } from 'react'
import ColorBox from './colorBox'

function App() {
  const [color, setColor] = useState("orange")
  const arr =["red","green","blue","purple","black"]
  const chnageBackGroundColor = (newColor)=>{
    setColor(newColor)
  }
  return (
    <>
     <div style={{backgroundColor:color,height:"100vh",width:"100vw"}}>
        {
          arr.map((item)=>{
            return(
              <ColorBox key={item} color={item} func={chnageBackGroundColor}/>
            )
          })
        }
     </div>
    </>
  )
}

export default App
