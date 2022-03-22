import React from 'react';
import {Link} from 'react-router-dom'
import './Register.css'
import AnimatedPage from '../../animated';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { Formik , Form } from 'formik';
import * as yup from 'yup'
import Formikcontrol from '../../validation/Formikcontrol';

export default function Register() {
    const[showmodal,setshowmodal]=useState(false)

    const radioData=[
      {key:'MEN',value:'men'},
      {key:'WOMEN' , value:'women'},
    ]
    const initialValues={
      Firstname:'',
      lastname:'',
      Email:'',
      Password:'',
      confirmpassword:'',
      radioOption:''
    }
    const validationSchema=yup.object({
      Firstname:yup.string().required('Please Enter Your First Name'),
      Lastname:yup.string().required('Please Enter Your Last Name'),
      Email:yup.string().email('The Email is Invalid').required('Please Enter Your Email'),
      Password:yup.string().min(5).required('Please Enter Your Password'),
      confirmpassword:yup.string().oneOf([yup.ref('Password'),''],'Password must be match').required('Please Enter Your Password again'),
      radioOption:yup.string().required('Please Select Your Gender')

    })
    const onSubmit=values=>{
      console.log(values);
    }
  return (
      <AnimatedPage>
      <div className="register1 container-register">
        <div className="register-link">
        <Link className='home1' to='/' >Home</Link>
        <p className='slash'>/</p>
        <p>Create An Account</p>
      </div>  
      <div className="create-an-account">
          <h3>Create An Account</h3>
      </div>
      <div className="line2"></div>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        {
          formik=>{
            console.log(formik)
            return(
      <div className='formik-div'>  
      <Form action="" className="register-form">
          <p>Sign up for a free account at Ella Boutique.</p>
          <Formikcontrol control='input' name='Firstname'  label='First Name' type='text'  />
          <Formikcontrol control='input' name='Lastname' label='Last Name' type='text' />
          <Formikcontrol control='input' name='Email' type='text' label='Email' />
          <Formikcontrol control='input' name='Password' type='password' label='Password' />
          <Formikcontrol control='input' name='confirmpassword' type='password' label='Confirm Password' />
          <Formikcontrol control='radio' name='radioOption' label='Gender' options={radioData} />
          <button type='submit'
          disabled={!formik.isValid}
          >CREATE AN ACCOUNT</button>
          <div className="form-login">
            <p style={{minWidth:'100px'}}>I Have An Account.</p>
          <a className='form-btn'  onClick={()=>setshowmodal(true)}> sign in</a>
          </div>
      </Form>
      <img className='formik-div-img' src="https://images.pexels.com/photos/6069543/pexels-photo-6069543.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
      </div>   
            )
              }
                }
      </Formik>
      </div>
      {showmodal && <Modal closemodal={setshowmodal}/>}
      </AnimatedPage>
  );
}
