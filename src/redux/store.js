import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { PersistGate } from "redux-persist/integration/react";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";
import themeSlice from "./themeSlice";
const persistConfig = {
    key: 'root',
    storage
}
const reducers = combineReducers({
    theme : themeSlice
})
const persistedReducer = persistReducer(persistConfig,reducers)
const store = configureStore({
    reducer: persistedReducer
})
export default store