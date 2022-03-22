import React from 'react';
import './Productslide.css'

export default function Productslide() {
  return (
      <>
      <div className="productslide">
          <div className="img1">
            <img src="https://images.pexels.com/photos/6069557/pexels-photo-6069557.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='img11' />
            <button className='btn-img1'>SHOP NOW</button>
          </div>
          <div className="img3">
                <img src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='img11' />
                <button className='btn-img1'>SHOP NOW</button>
          </div>
          <div className="img4">
                <img src="https://images.pexels.com/photos/6069555/pexels-photo-6069555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='img11 img4' />
                <button className='btn-img1'>SHOP NOW</button>
          </div>
      </div>
      </>
  );
}
