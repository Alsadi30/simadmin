import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {Provider} from 'react-redux'
import setAuthToken from './utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import Types from './store/actions/type'
import './assets/styles/style.css';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const token = localStorage.getItem('auth_token')

if(token){
  let decode = jwtDecode(token)
  setAuthToken(token)
  store.dispatch({
    type:Types.SET_ME,
    payload:{
      user:decode
    }
  })
}





ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
        <App />
        <ToastContainer/>
   </React.StrictMode>
 </Provider>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
