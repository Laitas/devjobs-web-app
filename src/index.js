import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
let persistor = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>   
    <BrowserRouter>
    <App />
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
