import React from 'react';
import './Cart-component.css'
import { removefromcart,decrease,increase } from '../../Redux/cartslice';
import { useDispatch } from 'react-redux';


export default function Cartcomponent({c}) {
  const dispatch=useDispatch()
  function removehandler(c){
    dispatch(removefromcart(c))
  }
  function decreasehandler(c){
    dispatch(decrease(c))
  }
  function increasehandler(c){
    dispatch(increase(c))
  }
  return (
        <>

    <div className="cart-component">
      <img src={c.img} alt="" />
     <p className='product-cart-item'>{c.title}
     <button className='cart-remove' 
     onClick={()=>removehandler(c)}
     >remove</button></p>
     <p>${c.price}</p>
    <div className='quantity-cart-item'>
    <button className='quantity-btn'
    onClick={()=>decreasehandler(c)}
    >
      -
    </button>
    <p>{c.itemquantity}</p>
    <button  className='quantity-btn'
    onClick={()=>increasehandler(c)}
    >
      +
    </button>
    </div>
     <p className='total-cart'>${c.price * c.itemquantity}</p>
     <div className='line4'></div>
      </div> 
    <div className="line8"></div>
        </>
  );
}