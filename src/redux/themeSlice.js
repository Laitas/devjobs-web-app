import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lightTheme: true
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => { state.lightTheme = !state.lightTheme}
    }
});

export const {
    toggleTheme
} = themeSlice.actions
export default themeSlice.reducer