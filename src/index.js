import React  from 'react';
import ReactDOM from 'react-dom';
import {  useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import cartReducer, { gettotal } from './Redux/cartslice'
import { productsApi } from './Redux/fetchingdata';


const store=configureStore({
  reducer:{
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(productsApi.middleware)
  }
})
store.dispatch(gettotal())
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

ReactDOM.render(
  <BrowserRouter>
  <Wrapper>
  <Provider store={store}>
    <App />
  </Provider>
  </Wrapper> 
  </BrowserRouter>,
  document.getElementById('root')
);


