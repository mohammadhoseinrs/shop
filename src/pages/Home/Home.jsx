import React from 'react';
import './Home.css'
import Announcement from '../../components/Navbar/Announcement';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Product from '../../components/Product/Product';
import Membershiptext from '../../components/Text/Membershiptext';
import Productslide from '../../components/Productslide/Productslide';
import Contenttext from '../../components/Text/Contenttext';
import Content1 from '../../components/Content-1/Content1';
import Aboutus from '../../components/Aboutus/Aboutus';
import AnimatedPage from '../../animated';


export default function Home() {
  return(
      <AnimatedPage>
      <Announcement />
      
      <Slider />
      <div className='container-home'>
      <Categories />
      <Product simplified />
      </div>
      <Membershiptext />
      <div className='container-home' >
        <Productslide />
      </div>
      <Contenttext />
      <div className='container-home' >
        <Content1 />
      </div>
      <div className="line"></div>
      
      <div className='container-home' >
      <Aboutus />
      
      </div>
      
      
      
      
      
      
      </AnimatedPage>
  );
}
