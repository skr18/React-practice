import React from 'react'
import "./ConfirmModal.css"
const ConfirmModal = (props) => {
    const {title,message,onConfirm} = props
  return (
    <div className='modalContainer-backdrop' onClick={onConfirm}>
        <div className='modalContainer'>
            <header style={{color:"black",fontWeight:600}}>
                {title}
                <span className='close' onClick={onConfirm}>x</span>
            </header>
            <div>{message}</div>
            <footer>
                <div>
                    <button type="button" onClick={onConfirm}>No</button>
                    <button type="button" onClick={onConfirm}>Yes</button>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default ConfirmModal