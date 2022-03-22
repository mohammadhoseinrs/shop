import React from 'react';
import './Contenttext.css'

export default function Contenttext() {
  return (
<div className="Contenttext">
    <div className="contenttext-left content-text">
      <img src="./img/img-slider/download.png" alt="" />
      <h4>Tailor-Made With Passion</h4>
      <p>We use only the very best materials and manufacturers.</p>
      <p>If our product rips or frays, we’ll make it right.</p>
      <p className='gold'>LEARN MORE</p>
    </div>
    <div className="contenttext-right content-text ">
      <img src="./img/img-slider/4.webp" alt="" />
      <h4>Tailor-Made With Passion</h4>
      <p>Question or concern? Not sure what to get? Don’t know</p>
      <p>Our team is here to help!</p>
      <p className='gold'>CONTACT US</p> 
    </div>
</div>
  );
}
