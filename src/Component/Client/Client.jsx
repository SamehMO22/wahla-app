import React, { useEffect } from 'react'
import { photos } from './imagees/images';
import './client.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Client() {
  useEffect(() => {
    AOS.init({duration:1000})
  
     
  }, [ ])
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
  return <>
  
 <div className="concontainer my-5">
 <div data-aos="flip-right" className="container  my-5 clientp">
 <Slider {...settings}>

            <div  className='hawyaa me-2'>


                <img className=' w-25  ' src={photos[0]} alt="" />
                <p className="  h6 my-4">owner of golden</p>
                <p className='h4 mb-5'>Ahmed elKholy</p>
                <p>Thank you for your generosity and professionalism in work, and your quick understanding of what we need.</p>



            </div>

            <div className='hawyaa me-2'>
            <img className='  w-25' src={photos[1]} alt="" />
            <p className=" h6 my-4">owner of golden</p>
                <p className='h4 mb-5'>Ahmed elKholy</p>
            <p>Thank you for your generosity and professionalism in work, and your quick understanding of what we need.</p>
            </div>

            <div className='hawyaa me-2'>
            <img className=' w-25' src={photos[0]} alt="" />
            <p className=" h6 my-4">owner of golden</p>
                <p className='h4 mb-5'>Ahmed elKholy</p>
            <p>Thank you for your generosity and professionalism in work, and your quick understanding of what we need.</p>
            </div>
      
        </Slider>
 </div>
 </div>


 <div className="container">


  
 </div>
    
 
  
  
  
  
  </>
}
