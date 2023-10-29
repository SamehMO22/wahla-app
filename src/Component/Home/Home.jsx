import React, { useEffect, useState } from "react";
import "./Home.css";
import product1 from "../..//img/1.jpg";
import product2 from "../../img/2.jpg";
import product3 from "../../img/3474189.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Link } from "react-router-dom";
import Sliderevent from './../sliderEvent/Sliderevent';
import AboutUs from './../AboutUs/AboutUs.jsx';
import CounterSection from './../CounterSection/CounterSection';
import Services from './../Services/Services';
// import DigitalSlider from './../DigitalSlider/DigitalSlider';
import PortfolioSlider from './../PortfolioSlider/PortfolioSlider';
import Client from './../Client/Client';
import Campony from './../Campony/Campony';

const images = [product1, product2, product3];

export default function Home() {
  const [image, setimage] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      AOS.init({duration:1000})
      next();
    }, 3000);

    return () => {
      clearInterval(time);
    };
  }, []);

  function prev() {
    setimage((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  }
  function next() {
    setimage((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  }

  return (
    <>
    

      <div className="slider">
        <div
          className="containers"
          style={{
            transform: `translateX(-${image * 100}vw)`,
          }}
        >
          <img src={images[1]} alt="1" />
          <img src={images[2]} alt="1" />
          <img src={images[0]} alt="1" />
        </div>

        <div className="btns">
          <button className="plus_minas" onClick={prev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="plus_minas" onClick={next}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

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
        
        <Sliderevent/>

      
      </div>
      <AboutUs/>
      
    <CounterSection/>
    <Services/>
    <PortfolioSlider/>
    <Client/>
    <Campony/>
    
      
    
    </>
  );
}
