    import React, { useEffect } from "react";
    import icons from "../../icon/icon.js";
    import "./About.css";
    
import 'aos/dist/aos.css';
import Aos from "aos";

    export default function AboutUs() {
        useEffect(() => {
            Aos.init({duration:1000})
           
        
          
        }, [ ])
        
    return (
        <>
         
        <div data-aos="fade-down-right" id="aboutUssectionher" className="aboutUs bg-light">
            <div className="container">
            <h3 className=" text-center my-4">About Us</h3>
            <div>
                <div className="wrapper">
                <div className="parent">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                </div>
                <p className=" text-black-50 h6 mb-5">
                A leading Saudi company in advertising and Digital Marketing
                Solutions, authorized by the Ministry of Commerce and licensed by
                General Commission for audiovisual media. We work to spread the
                spirit of creative advertising through digital and printed
                artistic designs and innovative electronic content. We provide
                various software solutions and market them electronically. We also
                have the skill and experience to create campaigns for social media
                platforms. Through a technical and administrative team that has
                experience and talent, which makes us able to achieve our
                customers\' marketing goals.{" "}
                </p>
            </div>
            <div className="row rowcontainer  ">
                <div className="col-md-1"></div>

                <div className="hawya col-md-3 bg-white ">
                <img className="iconimage" src={icons[0]} alt="icon1" />
                <div className=" text-center pt-5 h5 ">Motion Graphic</div>
                </div>

                <div className="hawya col-md-3 bg-white">
                <img className="iconimage" src={icons[1]} alt="icon1" />
                <div className=" text-center pt-5 h5 ">Websites Programming</div>
                </div>

                <div className="hawya col-md-3 bg-white">
                <img className="iconimage" src={icons[2]} alt="icon1" />
                <div className=" text-center pt-5 h5 ">Digital Marketing</div>
                </div>

                <div className="col-md-1"></div>
                <div className="col-md-1"></div>

                <div className="hawya col-md-3 bg-white">
                <img className="iconimage" src={icons[3]} alt="icon1" />
                <div className=" text-center pt-5 h5 ">Social Content</div>
                </div>

                <div className="hawya col-md-3 bg-white">
                <img className="iconimage" src={icons[4]} alt="icon1" />
                <div className=" text-center pt-5 h5 ">Product Photography</div>
                </div>
                <div className="hawya col-md-3 bg-white">
                <img className="iconimage" src={icons[5]} alt="icon1" />
                <div className=" text-center pt-5 h5 ">Graphic Design</div>
                </div>
            </div>
            </div>
        </div>




        </>
    );
    }
