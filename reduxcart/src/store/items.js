import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0,
        toalCartPrice:0
    },
    reducers:{
        addItem(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find((ele)=> ele.id === newItem.id)
            state.totalQuantity++;
            state.toalCartPrice = state.toalCartPrice + newItem.price
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItem(state,action){
            const id = action.payload
            const currentItem = state.items.find((item)=>item.id === id)
            state.totalQuantity--;
            state.toalCartPrice = state.toalCartPrice - currentItem.price;
            if(currentItem.quantity === 1){
                state.items = state.items.filter((item)=>item.id !==id)
            }else{
                currentItem.quantity--;
                currentItem.totalPrice = currentItem.totalPrice - currentItem.price
            }
        }
    }
})
export const cartAction  = cartSlice.actions
export default cartSlice