import React, { useEffect } from 'react'
import './conter.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
 

export default function CounterSection() {
    useEffect(() => {
        AOS.init({duration:1000})
      
         
      }, [ ])
    return<>
        <div data-aos="fade-up-left" className="greenSection mt-5">
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        
                         <i className="iconcounter fa-regular fa-thumbs-up  d-flex justify-content-center "></i>  

                        <h3 className=' d-flex justify-content-center pb-4 text-white  ps-5'>13</h3>
                        <p className='text-white h5  d-flex justify-content-center '>Number of years of experience</p>
                    </div>
                    <div className="col-md-3">
                    <i className="iconcounter fa-solid fa-pencil  d-flex justify-content-center "></i>
                        <h3 className='text-white pb-4 ps-5  d-flex justify-content-center '>60</h3>
                        <p className='text-white h5  d-flex justify-content-center '>Number of client</p>
                    </div>
                    <div className="col-md-3">
                    <i className="iconcounter fa-regular fa-pen-to-square  d-flex justify-content-center "></i>
                        <h3 className=' pb-4  ps-5 text-white  d-flex justify-content-center '>34</h3>
                        <p className='text-white h5  d-flex justify-content-center '>Number of servic</p>

                    </div>
                    <div className="col-md-3">
                    <i className="iconcounter fa-solid fa-computer d-flex justify-content-center "></i>
                        <h3 className=' pb-4  ps-5 text-white  d-flex justify-content-center '>84</h3>
                        <p className='text-white h5  d-flex justify-content-center '>Number of design</p>

                    </div>

                </div>
            
            </div>

        </div>
    
    
    
    </>  
}
