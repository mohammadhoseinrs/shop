import React, { useEffect } from 'react';
import './Cart.css'
import AnimatedPage from '../../animated';
import { Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useState , useContext } from 'react';
import Cartcomponent from './Cart-component';
import { useDispatch, useSelector } from 'react-redux';
import { gettotal } from '../../Redux/cartslice';


export default function Cart() {
    
    const[country,setcountry]=useState('')
    const[region,setregion]=useState('')
    const {cart,carttotalprice,carttotalquantity}=useSelector(state=>state.cart)
    console.log(carttotalquantity);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(gettotal())
    },[dispatch,cart])
  return (
      <AnimatedPage>
          <div className="cart">
              <div className="cart-container container-home">
                  <div className="caert-top">
                      <h2>My Cart</h2>
                  <div className="cart-header">
                      <Link className='home1' to='/'>Home</Link>
                      <p>/</p>
                      <p>Shopping Cart</p>
                  </div>
                  </div>
                  <div className="cart-bottom">
                      <div className="cart-bottom-left">
                        <div className="cart-left-header">
                          <p className='product-cart'>PRODUCTS</p>
                          <p>PRICE</p>
                          <p className='quantity-cart'>QUANTITY</p>
                          <p className='total-cart'>TOTAL</p>
                          <div className='line4'></div>
                      </div>  
                      <div >
                    {cart.map(c=>{
                        return <Cartcomponent c={c}  />
                    })}
                      </div>
                      </div>
                      <div className="cart-bottom-right">
                          <h3>ORDER SUMMARY</h3>
                          <div className="line5"></div>
                          <div className="sub-total">
                              <p className='fontweight'> Sub Total</p>
                              <p className='fontweight'>${carttotalprice}</p>
                          </div>
                          <div className="line5"></div>
                          <p className='fontweight'>Additional Comments</p>
                          <textarea name="" id="" cols="40" rows="4" placeholder="Special instruction for seller..."></textarea>
                          <h4 className='fontweight'>GET SHIPPING ESTIMATES</h4>
                          <div className="line5"></div>
                          <label className='fontweight' htmlFor="">Select Your Country</label>
                          <CountryDropdown value={country} name="" id="" onChange={(value)=>setcountry(value)}>
                          </CountryDropdown>
                          <label className='fontweight' htmlFor="">Select Your City</label>
                          <RegionDropdown value={region} name="" id="" onChange={(value)=>setregion(value)}>
                          </RegionDropdown>
                          <button className='cart-btn'>CALCULATE SHIPPING</button>
                          <div className="line5"></div>
                          <div className="total-calc">
                              <p className='fontweight'>TOTAL</p>
                              <p className='fontweight'>${carttotalprice}</p>
                          </div>
                          <button className='cart-btn'>
                              PROCEED TO CHECKOUT </button>
                      </div>
                  </div>
              </div>
          </div>
      </AnimatedPage>
  );
}
