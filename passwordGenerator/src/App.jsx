import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [isNumberChecked, setIsNumberChecked] = useState(false)
  const [isCharChecked, setIsCharChecked] = useState(false)
  const [password , setPassword] = useState()

  const generatePassword = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isCharChecked){
      str+="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    }
    if(isNumberChecked){
      str+="0123456789"
    }
    for(let i=1; i<=length;i++){
      let index = Math.floor(Math.random() * str.length +1)
      pass +=str[index]
    }
    setPassword(pass)
  },[length,isCharChecked,isNumberChecked])

  useEffect(()=>{
    generatePassword()
  },[length,isCharChecked,isNumberChecked])

  const inputPass = useRef(null)
  const handleCopy = ()=>{
    window.navigator.clipboard.writeText(password)
    inputPass.current.select()
  }

  return (
    <>
      <div style={{backgroundColor:"#436095",margin:"auto",width:"100vw",height:"100vh"}}>
        <h1 style={{color:"white"}}>Password Generator</h1>
        <div style={{backgroundColor:"gray",width:"50%",height:"20%",margin:"auto"}}>
          <div style={{display:"flex",alignItems:"center"}} >
            <input type="text" name="" id="" value={password} ref={inputPass} />
            <button onClick={handleCopy}>Copy</button>
          </div>
          <div>
            <input type="range" name="" id="" min="6"  max="20" value={length} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={isNumberChecked} name="" id="" onChange={()=>setIsNumberChecked((prev)=>!prev)}/>
            <label htmlFor="">Numbers</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={isCharChecked} name="" id="" onChange={()=>setIsCharChecked((prev)=>!prev)} />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
