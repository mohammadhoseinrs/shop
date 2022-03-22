import React from 'react';
import './Slider.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import sliderdata from '../../Sliderdata';
import { useState , useEffect } from 'react';


export default function Slider() {
  const [slideindex,setslideindex]=useState(0)
  const [sliderimg,setsliderimg]=useState(sliderdata)
  const clickhandler=(direction)=>{
    if(direction==='left'){
      setslideindex(slideindex>0 ? slideindex-1:2)
    }else{
      setslideindex(slideindex<2 ? slideindex+1 :0 )
    }
  }
 /* useEffect(async()=>{
    await fetch('https://foroshgah-5acf1-default-rtdb.firebaseio.com/slider.json')
    .then(response=>response.json())
    .then(data=>setsliderimg(Object.entries(data)))
   
},[]) */
  return (
      <>
      <div className="slider-container">
        <div className="arrow arrow1" onClick={()=>clickhandler('left')}>
          <ArrowLeftIcon  />
        </div>
        <div className="wrapper" style={{transform:`translateX(${slideindex* -100}vw)`}}>   
            {sliderimg.map(slider=>(
              <div className="slider">
          <img className='img2' src={slider.img} alt="" />
          </div>
          ))}     
        </div>
        <div className="arrow arrow2" onClick={()=>clickhandler('right')}>
          <ArrowRightIcon />
        </div>
      </div>    
      </>
  );
}
