import './App.css';
import {useRoutes} from 'react-router-dom'
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { gettotal } from './Redux/cartslice';

function App() {

  const {cart}=useSelector(state=>state.cart)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(gettotal())
    },[dispatch,cart])

  let router=useRoutes(routes)
  return (
    
    <>
    
    <Navbar />
     {router}
    <Footer />
    
    </>  
  );
}

export default App;
