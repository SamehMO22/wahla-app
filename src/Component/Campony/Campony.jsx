import React, { useEffect } from 'react'
import { photos } from './companes/imag'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './comp.css'

export default function Campony() {
    useEffect(() => {
        AOS.init({duration:1000})
      
         
      }, [ ])
      const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };
    
    return<>
    <div  data-aos="flip-down" className="container mt-5">
        <div className="sliderdigital mt-5">
        {/* <h2> Multiple items </h2> */}
        <Slider className="borderimages my-5" {...settings}>
            <div>
            <img src={photos[0]} alt="" />
             </div>
            <div>
            <img src={photos[1]} alt="" />
             </div>
            <div>
            <img src={photos[2]} alt="" />
             </div>
            <div>
            <img src={photos[3]} alt="" />
             </div>
            <div>
            <img src={photos[4]} alt="" />
             </div>
            <div>
            <img src={photos[5]} alt="" />
             </div>
            <div>
            <img src={photos[6]} alt="" />
             </div>
            <div>
            <img src={photos[7]} alt="" />
             </div>
            <div>
            <img src={photos[8]} alt="" />
             </div>
        </Slider>
        </div>
    </div>
    </>
}
