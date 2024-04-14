import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "./searchSlice"
import cartSlice from "./cartSlice"


const store = configureStore({
    reducer: {
        cart: cartSlice,
        search: searchSlice,
    }
})

export default store