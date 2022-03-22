import React from 'react';
import './Aboutus.css'
import Aboutimg from './Aboutimg';
import { useState, useEffect } from 'react';
import { aboutimgdata } from '../../Sliderdata';


export default function Aboutus() {
   
    const[aboutimg,setaboutimg]=useState(aboutimgdata)

   /* useEffect(async()=>{
        await fetch('https://foroshgah-5acf1-default-rtdb.firebaseio.com/aboutimg.json')
        .then(response=>response.json())
        .then(data=>setaboutimg(Object.entries(data)))
       
    },[]) */
  return (
      <>
      <div className="about-top">
          <h1>We Are GUCCI</h1>
          <p style={{color: 'rgb(187, 160, 7)'}}>ABOUT US</p>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
      </div>
      <div className="bottom">
          <h1>Fashion’s Instagram</h1>
          <p style={{color: 'rgb(187, 160, 7)'}} >FOLLOW US @FASHION</p>
      </div>
      
      <div className="aboutcontainer">
          {aboutimg.map(about=>(
              <Aboutimg about={about} />
          ))}
      </div>
      </>
  );
}
