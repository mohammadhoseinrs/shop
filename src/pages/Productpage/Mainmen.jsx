import React from 'react';
import './Mainwomen.css'
import AnimatedPage from '../../animated';
import {Link } from 'react-router-dom'
import { useParams  } from 'react-router-dom';
import { menclothes } from '../../Sliderdata';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Mainmen() {

    const [womendata,setwomendata]=useState(menclothes)

    let params=useParams()

    console.log(params.menid);

    let womenproduct=womendata.find(women=>{
        return women.id==params.menid
    })

    console.log(womenproduct)
  return (
      <AnimatedPage>

          <div className="women-container">
              <div className="women-image-container">
                <img className='women-image' src={womenproduct.img} alt="" />
              </div>
              <div className="women-right">
                  <div className="women-right-top register-link">
                      <Link to='/'  className='home1'>Home</Link>
                      <p className='slash'>/</p>
                      <p>Abore Et Dolore Magna Aliqua</p>
                  </div>
                  <h1>{womenproduct.name}</h1>
                  <div className="women-star">
                      <div className="women-star-2">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon/>
                        <StarBorderIcon />
                      </div>
                      <p>No Reviews</p>
                      <div className="women-atish">
                            <LocalFireDepartmentIcon />
                          <p>5 Sold In Last 25 Hours</p>
                      </div>
                  </div>
                  <div className="vendor">
                      <p className="vendor1">Vendor : </p>
                      <p className="vendor2">G-Star</p>
                  </div>
                  <div className="vendor">
                      <p className="vendor1">Availability : </p>
                      <p className="vendor2">5 In stock</p>
                  </div>
                  <div className="vendor">
                      <p className="vendor1">Product Type : </p>
                      <p className="vendor2">Dincidunteros</p>
                  </div>
                  <h1>{womenproduct.price}</h1>
                  <p className='women-para'>lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                  <div className="women-color">
                      <p>color :</p>
                      <p className='women-color-1'>IndianRed</p>
                  </div>
                  <div className="women-button-colored">
                      <button className='women-button-colored-1 red' >INDIANRED</button>
                      <button className='women-button-colored-1 orange'>DARKSALMON</button>
                  </div>
                  <div className="women-color">
                      <p>Size :</p>
                      <p className='women-color-1'>Please Choose A Size</p>
                  </div>
                  <div className="box-size">
                      <button>L</button>
                      <button>XL</button>

                  </div>
                  <button className='buyit'>Buy it Now</button>
              </div>
          </div>




      </AnimatedPage>
  )
}
