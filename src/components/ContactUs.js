import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../functions/functions';
import "../assets/contactUs.css";

const ContactUs = () => {
    const formik =useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            tel:"",
            text:""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15,'Must be 15 character or less')
            .required('Required'),
            lastName: Yup.string()
            .max(20,'Must be 20 character or less')
            .required('Required'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            tel: Yup.string()
            .max(11,'invalid mobile number')
            .required('Required'),
            text: Yup.string()
            .required('Required'),
        }),
        onSubmit: values => {
           notify("Success", "success")
        }
    });
   
  return (
    <div className='contact-container'>
        <div className='contact-us-content'>
            <h2>Let's Talk With Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p> when an unknown printer took a galley of type and scrambled it to make a type</p>
            <p> specimen book. It has survived not only five centuries, but also the leap into </p>
            <p>electronic typesetting, remaining essentially unchanged. It was popularised</p>
            <p>the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="form-contact-us">
            <div className='form-control'>
                <label htmlFor='firsName'>FirstName</label>
                <input 
                  type="text"
                  id='firstName'
                  name='firstName'
                  placeholder='First Name'
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
            </div>
            <div className='form-control'>
                <label htmlFor='lastName'>lastName</label>
                <input
                  type='text'
                  id="lastName"
                  name='lastName'
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
            </div>
            <div className='form-control'>
                <label htmlFor='email'>E-Mail</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <div className='form-control'>
                <label htmlFor='tel'>Mobile Number</label>
                <input
                  type="tel"
                  id='tel'
                  name="tel"
                  placeholder='Mobile Number'
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tel && formik.errors.tel ? <p>{formik.errors.tel}</p> : null}
            </div>
            <div className='form-control'>
                <label htmlFor='text'>Message</label>
                <textarea
                  id="text"
                  name="text"
                  placeholder='Enter Your Message'
                  rows='4'
                  cols='30'
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.text && formik.errors.text ? <p>{formik.errors.text}</p> : null}
            </div>
            <div className='form-control'>
                <button type='submit'>
                    Submit
                </button>
            </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  )
}

export default ContactUs