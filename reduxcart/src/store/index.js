import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./items";
import uiSlice from "./CartUI";

const store = configureStore({
    reducer: {cart : cartSlice.reducer, ui:uiSlice.reducer}
})

export default store;