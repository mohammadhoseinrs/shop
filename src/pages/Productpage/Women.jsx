import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../../animated';
import './Women.css'
import Productitem from '../../components/Product/Productitem';
import { useState, useEffect , useContext } from 'react';
import { productdata } from '../../Sliderdata';
import Pagination from './Pagination';
import { useGetAllProductsQuery } from '../../Redux/fetchingdata';


export default function Women() {
  const[prodata,setprodata]=useState(productdata)
  const[currentpage,setcurrentpage]=useState(0)
  const productperpage=8
  const indexoflastproduct=currentpage*productperpage
  const currenproduct=prodata.slice(indexoflastproduct,indexoflastproduct+productperpage)

  return(
      <AnimatedPage>
        <div className="container-home container-women">
            <div className="women-top">
                <div className="women-top-left">
                  <Link className='women-top-left-link' to='/' >Home</Link>
                  <p>/</p>
                  <p>Women</p>
                </div>
                <div className="women-top-right">
                  <label htmlFor="">Sort by</label>
                  <select name="" id="">
                      <option value="">Default</option>
                      <option value="">Increasing by price</option>
                      <option value="">Deacrising by price</option>
                  </select>
                </div>
            </div>
            <div className="line6"></div>
            <div className="container-women-product">
                {currenproduct?.map(product=>(
                <Productitem key={product.id} product={product}  />
                ))}
            </div>
          <Pagination productperpage={productperpage} prodata={prodata} setcurrentpage={setcurrentpage}/> 
        </div>
      </AnimatedPage>
  ) ;
}
