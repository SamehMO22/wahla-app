import React from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
  return <>
   <div className="container">
        <div className="my-5  ">
          <p className="h2 text-center ">
            Activities of the Kingdom of Saudi Arabia
          </p>
        </div>

        <div className="wrapper">
          <div className="parent">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

         

        <div data-aos="fade-right" className=" row my-5">



          <div className="col-md-4  ">
            
            <div className=" events mb-5  d-flex align-items-center   ">
              <i className="icons   fa-solid fa-book"></i>
              <Link className=" h6 mt-3 ps-3 pb-2">Environment events</Link>
            </div>

            <div className="events-box   d-flex align-items-cente  ">
              <p className="h6 text-black  mt-3 ps-3">count of Events in the mont</p>
              <div className="counter">
                {" "}
                <p className="h5 text-center">3</p>
              </div>
            </div>
          </div>




          <div className="col-md-4 ">
            <div className="events mb-5  d-flex align-items-center  ">
              <i className="icons fa-solid fa-user-doctor"></i>
              <Link className="h6 mt-3 ps-3 pb-2">health events</Link>
            </div>

            <div className="events-box   d-flex align-items-center  ">

              <p className="h6 text-black  pb-1 mt-3 ps-3">count of Events in the mont</p>
              <div className="counter">
                {" "}
                <p className="h5  text-center">8</p>
              </div>
            </div>
          </div>


          <div className="col-md-4 ">
            <div className="events mb-5   d-flex align-items-center  ">
            <i className="icons   fa-solid fa-cake-candles "></i>
              <Link className="h6 mt-3 ps-3 pb-2">Education events</Link>
            </div>

            <div className="events-box   d-flex align-items-center  ">
              <p className="h6 text-black pb-1 mt-3 ps-3">count of Events in the mont</p>
              <div className="counter">
                {" "}
                <p className=" h5 text-center">9</p>
              </div>
            </div>
          </div>


        </div>
        
         

      
      </div>
  
  
  
  </>
}
