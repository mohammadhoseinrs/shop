import React from 'react';
import Categoryitem from './Categoryitem';
import './Categories.css'
import { useState , useEffect } from 'react';
import { category } from '../../Sliderdata';

export default function Categories() {
   const[categorydata,setcategorydata]=useState(category)
 /* useEffect(async()=>{
    await fetch('https://foroshgah-5acf1-default-rtdb.firebaseio.com/categorydata.json')
    .then(response=>response.json())
    .then(data=>setcategorydata(Object.entries(data)))
   
},[]) */
  return (
      <div className="category-container">
        {categorydata.map(cat=>(
         <Categoryitem cat={cat}  /> 
      ))}  
      </div> 
  );
}
