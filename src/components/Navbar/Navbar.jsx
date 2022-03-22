import React from 'react';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion ,AnimatePresence } from 'framer-motion';


export default function Navbar() {
  const[showmodal,setshowmodal]=useState(false)
  const {carttotalquantity}=useSelector(state=>state.cart)
  const [showMenu,setShowMenu]=useState(false)
  return (
      <>
      <div className="navbar">
          <div className="navbar-container">
              <div className="navbar-left">
                  <span>EN</span>
                  <div className="searchbox">
                      <input type="text" />
                      <SearchIcon style={{cursor:'pointer' , fontSize:'20px' , color:'#555'}} />
                  </div>
              </div>
              <div className="navbar-center">
                <Link className='linklogo' to='/'>GUCCI</Link>
              </div>
              <div className="navbar-right">
                <Link className='register hiddenicon' to='/product/men' >PRODUCT</Link>
                <Link className='register hiddenicon' to='./register'>REGISTER</Link>
             <button className=' navbar-right-btn hiddenicon' onClick={()=>setshowmodal(true)} >SIGN IN</button>
             <Link to='/cart' >
               <Badge badgeContent={carttotalquantity} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                </Badge>
             </Link>
             <div className='menuicon'  >
               {showMenu ? <CloseIcon onClick={()=>setShowMenu(false)} /> : <MenuIcon onClick={()=>setShowMenu(true)}/> }
             </div>

              </div>
          </div>
      </div>
      
      {showMenu && (
        <div className="hamburgermenu" onClick={()=>setShowMenu(false)}>
          <AnimatePresence >
          <motion.div
          initial={{x:1000,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,ease:'easeOut'}}
        exit={{x:1000}}
          className="hamburgermenu_item" onClick={e => e.stopPropagation()}>
            <div className='hamburger__item'>
          <Link className='register12 ' to='/product/men' onClick={()=>setShowMenu(false)} >PRODUCT</Link>
                <Link className='register12 ' to='./register' onClick={()=>setShowMenu(false)}>REGISTER</Link>
             <button  onClick={()=>setshowmodal(true)} >SIGN IN</button>
             </div>
          </motion.div>
          </AnimatePresence>
        </div>
      )}
      

      {showmodal && <Modal setshowmodal={setshowmodal}/>}
      
      </>
  );
}
