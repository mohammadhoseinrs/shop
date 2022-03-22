import React from 'react';
import './Productpage.css'
import AnimatedPage from '../../animated';
import { NavLink ,Outlet } from 'react-router-dom';

export default function Product() {
  return (
    <AnimatedPage>
          <div className="product-header">
            <NavLink className={(Link)=>Link.isActive ?'.active' :''} className='product-header-link' to='women' >women</NavLink>
            <NavLink className='product-header-link' to='men'> men</NavLink>
            <NavLink className='product-header-link' to='kids' >kids</NavLink>
          </div>
        <Outlet/>
    </AnimatedPage>
  );
}
