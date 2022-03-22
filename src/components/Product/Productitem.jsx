import React, { useContext, useState } from 'react';
import './Productitem.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { addtocart , removefromcart } from '../../Redux/cartslice';
import { useDispatch } from 'react-redux';
import Rating from './Rating';



export default function Productitem({product}) {
  
  const dispacth=useDispatch()
  const [incart,setincart]=useState(false)
  const [heart,setheart]=useState(true)
  const [rate,setrate]=useState(4)


  
function addhandler(product){
  dispacth(addtocart(product))
  setincart(true)

}

function removehandler(product){
  dispacth(removefromcart(product))
  setincart(false)

}
  
  
  
  return (
    <>


    <div className="pro-cart">
      <Link to={`/product/women/${product.id}`} >
      <img src={product.img} alt="" />
      </Link>
    
    <div className="pro-bootom">
        <div className="pro-b-top">
            <p>{product.title}</p>
            <div className="heart" style={{cursor:'pointer'}} onClick={()=>setheart(prevstate=>prevstate = !prevstate)}>
             {heart ?
            (<FavoriteBorderOutlinedIcon  style={{color:'red' , fontSize:'15px'}} />)
            :
            (<FavoriteOutlinedIcon style={{color:'red' , fontSize:'15px'}} />)} 
            </div>
            
        </div>
        <div className="pro-b-m">
            <p>{product.desc}</p>
            <h5>${product.price}</h5>
        </div>
        <div className="pro-b-b">
            <div className="pro-b-b-icon">
            <Rating rating={product.rating} />
            </div>
            {incart ? (

<div className="pro-b-b-right" onClick={()=>removehandler(product)}>
            <RemoveShoppingCartOutlinedIcon className='sale-icon' />
            </div>
            ):(
<div className="pro-b-b-right" onClick={()=>addhandler(product)}>
            <AddShoppingCartIcon className='sale-icon' />
            </div>

            )}
            
        </div>

    </div>
    </div>
    </>
  );
}
