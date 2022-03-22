import React, { useEffect, useState } from 'react';
import './Product.css'
import Productitem from './Productitem';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../Redux/fetchingdata';
import { productdata } from '../../Sliderdata';





export default function Product() {
    const [data, setdata] = useState([])
    const [screenSize,setScreenSize]=useState(null)
    useEffect(()=>{
        const handleResize=()=>{
            setScreenSize(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        handleResize()
    })
    useEffect(()=>{
        if(screenSize<768){
            setdata(productdata.slice(0,10))
        }else{
            setdata(productdata)
        }
    },[screenSize])
  return (
      <>
      <div className="product-title">
          <h1>BEST SELLING</h1>
          <Link className='product-title-link' to='/product/women'> view all</Link>
      </div>
      <div className="products">
          {data && data.map(product=>(
              <Productitem product={product} simplified/>
              

          ))}

      </div>
      </>
  );
}

