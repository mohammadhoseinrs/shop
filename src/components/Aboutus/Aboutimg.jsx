import React from 'react';
import './Aboutimg.css'

export default function Aboutimg({about}) {
  return (
      <div className="aboutimg">
          <img src={about.img} alt="" />
      </div>
      
  );
}
