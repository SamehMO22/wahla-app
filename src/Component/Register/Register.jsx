import React from 'react'
// import Login from './../Login/Login';
// import { Link } from 'react-router-dom';

export default function Register() {
  return<>


  <div className="container bg-white-50">
  <h1>
  signUp
  </h1>

<form >
<label htmlFor="firstName" className='mt-3 mb-1 ms-2'>first-Name</label>
<input type="text" className=' form-control the-input' id='firstName' name='firstName' placeholder='Enter you firstName' />
<label htmlFor="lastName" className='mt-3 mb-1 ms-2'>last-Name</label>
<input type="text" className=' form-control the-input' id='lastName' name='lastName' placeholder='Enter you lastName' />
<label htmlFor="email" className='mt-3 mb-1 ms-2'>email</label>
<input type="text" className=' form-control the-input' id='email' name='email' placeholder='Enter you email' />
<label htmlFor="password" className='mt-3 mb-1 ms-2'>password</label>
<input type="text" className=' form-control the-input ' id='password' name='password' placeholder='Enter you passwprd' />
<label htmlFor="country" className='mt-3 mb-1 ms-2'>first-Name</label>
<input type="text" className=' form-control the-input' id='country' name='country' placeholder='Enter you country' />



<button className='my-3 btn btn-outline-danger'>signUp</button>
 </form>
  </div>
  
  
  
  
  
  </> 
}
