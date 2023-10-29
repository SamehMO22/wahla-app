import React, { useEffect } from 'react'
import { photos } from './images/imag'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PortfolioSlider.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function PortfolioSlider() {
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
    return  <>
    <h2 className=' mt-5 text-center'>Protofolio</h2>
    <div className="wrapper">
                <div className="parent">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                </div>
    <div  data-aos="flip-down"className="container">
        <div className="  mt-5">
        {/* <h2> Multiple items </h2> */}
        <Slider className="protofolyo" {...settings}>
            <div>
            <img src={photos[0]} alt="" />
            <p className=" my-4">Social Media Analytics</p>
            </div>
            <div>
            <img src={photos[1]} alt="" />
            <p className=" my-4">Products Photography </p>
            </div>
            <div>
            <img src={photos[2]} alt="" />
            <p className=" my-4"> Logo Designs</p>
            </div>
            <div>
            <img src={photos[3]} alt="" />
            <p className=" my-4">Profile Company Design</p>
            </div>
            <div>
            <img src={photos[4]} alt="" />
            <p className=" my-4">Identity Designs</p>
            </div>
            <div>
            <img src={photos[5]} alt="" />
            <p className=" my-4">Presentation Designs</p>
            </div>
            <div>
            <img src={photos[6]} alt="" />
            <p className=" my-4">Menu's Designs</p>
            </div>
            <div>
            <img src={photos[7]} alt="" />
            <p className=" my-4">Anuual Reports Designs</p>
            </div>
            <div>
            <img src={photos[8]} alt="" />
            <p className=" my-4">Anuual Reports Designs</p>
            </div>
            <div>
            <img src={photos[9]} alt="" />
            <p className=" my-4">Anuual Reports Designs</p>
            </div>
            <div>
            <img src={photos[10]} alt="" />
            <p className=" my-4">Anuual Reports Designs</p>
            </div>
            <div>
            <img src={photos[11]} alt="" />
            <p className=" my-4">Anuual Reports Designs</p>
            </div>
        </Slider>
        </div>
    </div>
    </>
}
