import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../../animated';
import './Women.css'
import Productitemkids from '../../components/Product/Productitemkids';
import { useState} from 'react';
import { kidsclothes } from '../../Sliderdata';


export default function Kids() {
  const[prodata,setprodata]=useState(kidsclothes)
  /*useEffect(async()=>{
      await fetch('https://foroshgah-5acf1-default-rtdb.firebaseio.com/kidsclothes.json')
      .then(response=>response.json())
      .then(data=>setprodata(Object.entries(data)))
  },[]) */
  return(
      <AnimatedPage>

        <div className="container-home container-women">
            <div className="women-top">
              <div className="women-top-left">
                <Link className='women-top-left-link' to='/' >Home</Link>
                <p>/</p>
                <p>men</p>
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
            {prodata.map(product=>(
              <Productitemkids key={product.id} product={product}  />
          ))}
              
            </div>
            
        </div>

      </AnimatedPage>
  ) ;
}
