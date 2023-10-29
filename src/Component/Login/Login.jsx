import React from 'react'
import'./Login.css'

export default function Login() {
    return<>


    <div className="container bg-white">

        
    <h1>login</h1>

<form >
<label htmlFor="email" className='mt-3 mb-1 ms-2'>email</label>
<input type="text" className=' form-control the-input' id='email' name='email' placeholder='Enter you email' />
<label htmlFor="password" className='mt-3 mb-1 ms-2'>password</label>
<input type="text" className=' form-control the-input ' id='password' name='password' placeholder='Enter you passwprd' />


<button className='my-3 btn btn-outline-danger'>Login</button>
</form>
    </div>
    
    
    
    
    
    </> 
}
