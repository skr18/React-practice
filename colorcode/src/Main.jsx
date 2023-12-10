import React, { useState } from 'react'

const Main = () => {
    const [colorName,setcolorName] = useState("Empty")
    const divstyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        margin: "auto",
        height: "160px",
        border: "1px solid black"
    };
    const chnagecolor=(name)=>{
        if(CSS.supports('color',name)){
           setcolorName(name);
           document.getElementById("box").style.backgroundColor=name;
        }else{
            document.getElementById("box").style.backgroundColor="white";
            setcolorName("Empty");
        }
    }

    // const backgroundcolor = 
  return (
    <div>
        <div id='box' style={divstyle}>
            {colorName}
        </div>
        <div>
           Enter color name: 
           <input type='text' onChange={(e)=>chnagecolor(e.target.value)}/>
        </div>
    </div>

  )
}

export default Main