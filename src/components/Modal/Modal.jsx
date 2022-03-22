import React from 'react';
import './Modal.css'
import CloseIcon from '@mui/icons-material/Close';
import AnimatedPage from '../../animated';

export default function Modal({setshowmodal}) {
  return (
    
      <div className="modal" onClick={()=>setshowmodal(false)}>
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
              <div  onClick={()=>setshowmodal(false)}>
                 <CloseIcon className='modal-icon' /> 
              </div>
              
              <h1>LOGIN AT ACCOUNT</h1>
              <div className="line3"></div>
              <p>Sign In for at Ella Boutique.</p>
              <form className='signin-form' action="">
                  <label htmlFor="">Email</label>
                  <input className='email-input' type="text" />
                  <label  htmlFor="">Password</label>
                  <input type="text" />
                  <button className=''>LOGIN</button>

              </form>
          </div>
      </div>
      
  );
}
