import React from 'react'

const ColorBox = ({color,func}) => {
    const changeColor = ()=>{
        func(color)
    }
  return (
    <button style={{backgroundColor:color,color:"pink",marginRight:10}} onClick={changeColor} >{color}</button>
  )
}

export default ColorBox