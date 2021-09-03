import { createSlice } from '@reduxjs/toolkit'

const jobsSlice = createSlice({
    name: 'jobs',
    initialState:[],
    reducers: {
        setJobs : (state,action) => state = action.payload
    }
});

export const {
    setJobs
} = jobsSlice.actions
export default jobsSlice.reducer