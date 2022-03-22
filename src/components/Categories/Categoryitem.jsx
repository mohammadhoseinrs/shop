import React from 'react';
import './Categoryitem.css'

export default function Categoryitem({cat}) {
  return (
      <div className="cat-item">
        <img className='cat-card' src={cat.img} alt="" />
        <div className="cat-card-content">
            <h2>{cat.title}</h2>
            <button>SHOP NOW</button>
         </div>
      </div>
  );
}
