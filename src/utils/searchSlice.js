import { createSlice } from "@reduxjs/toolkit";
import data from '../helper/data.json';

const searchSlice = createSlice({
    name :"search",
    initialState:{
        data:data
    },
    reducers:{
        searchResults: (state, action) => {
            state.data = data.filter((item) => item.title.includes(action.payload));
        }
    }
});


export const { searchResults } = searchSlice.actions;

export default searchSlice.reducer;