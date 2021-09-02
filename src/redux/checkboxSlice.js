import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    check: false
}

const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        toggleCheckbox: state => {state.check = !state.check}
    }
});

export const {
    toggleCheckbox
} = checkboxSlice.actions
export default checkboxSlice.reducer