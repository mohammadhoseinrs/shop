import React from 'react';
import './Content1.css'

export default function Content1() {
  return( 
  <div className="content1">
   <div className="content1-top">
       <div className="content1-img1">
          <img className='img-after' src="https://images.pexels.com/photos/6069563/pexels-photo-6069563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>
          <div className="content1-top-right content-content">
              <h5>NEW COLLECTION</h5>
              <h1>Jungleries</h1>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              <button>SHOP THE COLLECTION</button>
          </div>
      </div>
      <div className="content1-bottom">
          <div className="content1-bottom-left content-content">
              <h5>NEW COLLECTION</h5>
              <h1>Elegant Sexy</h1>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              <button>SHOP THE COLLECTION</button>
          </div>
          <div className='bottom1'>
               <img className='img-after' src="https://images.pexels.com/photos/6069564/pexels-photo-6069564.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          </div>
        </div>
  </div>
  
  )
}
