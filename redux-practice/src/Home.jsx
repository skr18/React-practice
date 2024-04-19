import React from "react";
import useInput from "./custom-hooks/use-input";
import  './Home.css'
import useHttp from "./custom-hooks/use-http";
import { useDispatch } from "react-redux";
import { taskAction } from "./store";


const isTextValid = value=> {
    return value.trim() !== ""
}

const isEmailValid =(value)=>{
    return value.trim().includes("@");
}

const Home = ()=>{
    const {
        value:name, 
        hasError:nameHasError,
        valid:nameValid,
        inputHandler:nameInputHandler,
        reset:nameReset,
        inputBlurHandler:nameBlurHandler} = useInput(isTextValid)

    const {
        value:Lastname, 
        hasError:LastnameHasError,
        vaild:isLastnameValid,
        inputHandler:LastnameInputHandler,
        reset:lastNameReset,
        inputBlurHandler:LastnameBlurHandler} = useInput(isTextValid)

    const {
        value:email, 
        hasError:emailHasError,
        valid:emailValid,
        inputHandler:emailInputHandler,
        reset:emailReset,
        inputBlurHandler:emailBlurHandler} = useInput(isEmailValid)

    let fromIsValid = false;
    //console.log("ye ",isLastnameValid)
    if( emailValid && nameValid){
        fromIsValid=true
    }

    const {sendReq} = useHttp();
    const dispatch = useDispatch()
    const addTask = (curInfo,res)=>{
        console.log("yaha aya")
        const info ={id:res.name,...curInfo}
        dispatch(taskAction.addTask(info))
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        if(!fromIsValid){
            console.log("error ")
            return ;
        }
        const info={
            name:name,
            Lastname:Lastname,
            email:email
        }
        sendReq({
            url:"https://redux-practice-57af7-default-rtdb.firebaseio.com/candidate.json",
            method:"POST",
            body:info,
            headers:{
                "Content-Type":"application/json"
                }
            },
            addTask.bind(null,info))
        nameReset();
        lastNameReset();
        emailReset();
        console.log("submited sucessfully")
    }
    return(
        <form className="form" onSubmit={submitHandler}>
            <div style={{display:"flex"}}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="" id="name" value={name} onChange={nameInputHandler} onBlur={nameBlurHandler}/>
                    {nameHasError && <p style={{color:'red'}}>Enter a valid name</p>}
                </div>
                <div style={{marginLeft:"5%"}}>
                    <label htmlFor="last">Last Name: </label>
                    <input type="text" name="" id="last" value={Lastname} onChange={LastnameInputHandler} onBlur={LastnameBlurHandler} />
                    {LastnameHasError && <p style={{color:'red'}}>Enter a valid last name</p>}
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between",marginTop:15}}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="" id="email" value={email} onChange={emailInputHandler} onBlur={emailBlurHandler} />
                    {emailHasError && <p style={{color:'red'}}>Enter a valid email</p>}
                </div>
                <div>
                    <button className="SubmitButton" type="submit" disabled={!fromIsValid}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Home;