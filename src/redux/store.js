import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";
import themeSlice from "./themeSlice";
import checkboxSlice from "./checkboxSlice";
import jobsSlice from "./jobsSlice";
import searchSlice from "./searchSlice";
const persistConfig = {
    key: 'root',
    storage
}
const reducers = combineReducers({
    theme : themeSlice,
    check : checkboxSlice,
    jobs : jobsSlice,
    search: searchSlice,
})
const persistedReducer = persistReducer(persistConfig,reducers)
const store = configureStore({
    reducer: persistedReducer
})
export default store