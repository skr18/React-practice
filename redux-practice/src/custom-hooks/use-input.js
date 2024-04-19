import { useState } from 'react'

const useInput = (isTextValid) => {

    const [enteredValue,setEnteredValue] = useState("");
    const [istouched,setistouched] = useState(false);

    const valid = isTextValid(enteredValue);
    const hasError = istouched && !valid;

    const inputHandler = (event)=>{
        setEnteredValue(event.target.value)
    }
    const inputBlurHandler = ()=>{
        setistouched(true)
    }
    const reset = ()=>{
      setEnteredValue("");
      setistouched(false);
    }

  return{
    hasError,
    value:enteredValue,
    valid,
    inputBlurHandler,
    inputHandler,
    reset
  }
}

export default useInput