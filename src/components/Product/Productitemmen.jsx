import React from 'react';
import './Productitem.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import { addtocart } from '../../Redux/cartslice';
import { useDispatch } from 'react-redux';


export default function Productitemmen({product }) {

  const dispatch=useDispatch()

  function addhandler(product){
    dispatch(addtocart(product))
  }
  return (
    <>


    <div className="pro-cart">
      <Link to={`/product/men/${product.id}`} >
      <img src={product.img} alt="" />
      </Link>
    
    <div className="pro-bootom">
        <div className="pro-b-top">
            <p>{product.title}</p>
            <FavoriteBorderOutlinedIcon style={{color:'red' , fontSize:'15px'}} />
        </div>
        <div className="pro-b-m">
            <p>{product.desc}</p>
            <h5>{product.price}</h5>
        </div>
        <div className="pro-b-b">
            <div className="pro-b-b-icon">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
            </div>
            <div className="pro-b-b-right" onClick={()=>addhandler(product)}>
            <AddShoppingCartIcon className='sale-icon' />
            </div>
        </div>

    </div>
    </div>
    </>
  );
}
