import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title : '',
    location : '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTitle: (state,action) => {state.title = action.payload},
        setLocation: (state,action) => {state.location = action.payload}
    }
});

export const {
    setLocation,setTitle
} = searchSlice.actions
export default searchSlice.reducer