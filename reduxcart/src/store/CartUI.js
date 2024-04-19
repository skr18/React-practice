import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"Cart-UI",
    initialState:{
        cartIsVisbile:false
    },
    reducers:{
        toogleDisplay(state){
            state.cartIsVisbile = ! state.cartIsVisbile
        }
    }
})

export const uiAction = uiSlice.actions
export default uiSlice