import {createSlice, configureStore } from "@reduxjs/toolkit"

const initialTask ={
    candidates:[]
}
const taskSlice = createSlice({
    name:"taskHandler",
    initialState:initialTask,
    reducers:{
        addTask(state,action){
            //console.log("action ",action.payload)
            //state.candidates.push(...action.payload);
            //console.log("state ",state.candidates.length)
            //state.candidates = [...state.candidates , ...action.payload]
            state.candidates = state.candidates.concat(action.payload)
        }
    }
})

const store = configureStore({
    reducer:taskSlice.reducer
})

export const taskAction = taskSlice.actions;
export default store;