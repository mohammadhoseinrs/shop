import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
      <>
      <div className="footer-top">
          <div className="footer-top-content">
              <h2>Sign-Up For EllaNews</h2>
              <p>Stay informed about the latest style advice and product launches. Learn more about our emails and our Privacy Policy.</p>
              <div className="footer-input">
                  <input type="text" name="" id="" placeholder='Your Email Address' />
                  <button className='footer-btn'>SUBSCRIBE</button>
              </div>
          </div>
      </div>
      <div className="footer-bottom container-home">
          <ul>
                <li className='fo-ti'>SHOP</li>
              <li><a href="">New In</a></li>
              <li><a href="">Women</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Shoes</a></li>
              <li><a href="">Bags Accessories</a></li>
              <li><a href="">Top Brands</a></li>
          </ul>
          <ul>
              <li className='fo-ti'>INFORMATION</li>
              <li><a href="">About</a></li>
              <li><a href="">Customer Service</a></li>
              <li><a href="">Reward Program</a></li>
              <li><a href="">Shipping Returns</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms  Conditions</a></li>
              <li><a href="">Blog</a></li>
          </ul>
          <ul>
              <li className='fo-ti'>CUSTOMER SERVICE</li>
              <li><a href="">Search Terms</a></li>
              <li><a href="">Advanced Search</a></li>
              <li><a href="">Orders And Returns</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Theme FAQs</a></li>
              <li><a href="">Consultant</a></li>
              <li><a href="">Store Locations</a></li>
          </ul>
          <div className="footer-right">
              <h5 className='fo-ti'>KEEP IN TOUCH</h5>
              <div className="footer-icon">
              <FacebookIcon />
              <TwitterIcon  style={{margin:'0 10px'}}/>
              <InstagramIcon />
                <PinterestIcon style={{margin:'0 10px'}} />
                <YouTubeIcon />

              </div>
                <h5 className='fo-ti'>PAYMENT ACCEPT</h5>
                <ul className='footer-payment'>
                    <li><img src="./img/img-slider/p1.jpeg" alt="" /></li>
                    <li><img src="./img/img-slider/p2.jpeg" alt="" /></li>
                    <li><img src="./img/img-slider/p3.jpeg" alt="" /></li>
                    <li><img src="./img/img-slider/p4.jpeg" alt="" /></li>
                    <li><img src="./img/img-slider/p5.jpeg" alt="" /></li>
                </ul>
          </div>
      </div>
      </>

  );
}

