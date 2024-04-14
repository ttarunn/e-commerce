import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name :"cart",
    initialState:{
        item:[]
    },
    reducers:{
        addItem: (state,action) =>{
            state.item.push(action.payload);
        },
        removeItem: (state,action) =>{
            state.item = state.item.filter((item) => item.id !== action.payload)
        }
    }
});


export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;