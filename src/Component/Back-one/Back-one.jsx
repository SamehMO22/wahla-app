    import React, { useEffect } from "react";
    import "./back.css";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { useContext } from "react";
    import { CartContext } from "../../Context/CartStore";



    export default function Backone() {
        let { cardone , increase } = useContext(CartContext);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
        <div className="container my-5">
            <p
            data-aos="zoom-out-down"
            className="h3 my-5  text-info socialpadding"
            >
            Social Media Designs Packs
            </p>
            <p data-aos="zoom-out-down" className=" text-black">
            Creating social media designs has become vital in the world of digital
            marketing. Social media platforms also play a significant role in
            engaging with the audience, and innovative designs capture attention
            and pique the interest of followers. Through Whlaah Advertising, we
            offer a variety of designs including images, videos, and graphics,
            enabling you to effectively communicate with your audience and convey
            your brand's messages clearly. These designs should be attractive,
            fresh, and aligned with the brand's identity and the target audience's
            preferences. Using appropriate colors and simplified text contributes
            to achieving a powerful impact. Thanks to these designs, strong
            audience interaction can be built, and brand awareness can be
            increased. They have also become an essential part of digital
            marketing strategies, enhancing brand presence and contributing to
            achieving growth and engagement goals. Subscribe now with Whlaah
            Advertising packages and enjoy the experience
            </p>

            <div className="row my-5">
            <div data-aos="zoom-out-right" className="col-md-4 ">
                <div className="titlebg ">
                <p className=" text-center h4 p-5 text-white silverpadding">
                    Silver Pack Social Media Designs
                </p>
                </div>
                <div className=" titlebg">
                <p className=" text-center text-white h4 p-2">
                    999 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>10 Designs
                    Monthly
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Cover
                    Page Design
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Marketing
                    Content Creator
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Share and
                    add Hashtags{" "}
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Marketing
                    Content Creator
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Weekly
                    Reports
                </p>
                <p className="onebyone m-0  ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i> Social accounts
                    Managmenets
                </p>
                <p className="onebytwo m-0 ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i>Media Buyer
                    Managmenet{" "}
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Silver Pack Social Media Designs ' , 999)
                }}   className="titlebg w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-down" className="col-md-4">
                <div className="titlebgtwo ">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Golden Pack Social Media Designs
                </p>
                </div>
                <div className=" titlebgtwo">
                <p className=" text-center text-white h4 p-2">
                    1800 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>20 Designs
                    Monthly
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Cover
                    Page Design
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Marketing
                    Content Creator
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Share and
                    add Hashtags{" "}
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Marketing
                    Content Creator
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Weekly
                    Reports
                </p>
                <p className="onebyone m-0  ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i> Social accounts
                    Managmenets
                </p>
                <p className="onebytwo m-0 ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i>Media Buyer
                    Managmenet{" "}
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('back2' , 1800)
                }} className="titlebgtwo w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-left" className="col-md-4">
                <div className="titlebgthree">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Diamon Pack Social Media Designs
                </p>
                </div>
                <div className=" titlebgthree">
                <p className=" text-center text-white h4 p-2">
                    2800 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>10 Designs
                    Monthly
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Cover
                    Page Design
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Marketing
                    Content Creator
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Share and
                    add Hashtags{" "}
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Marketing
                    Content Creator
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Weekly
                    Reports
                </p>
                <p className="onebyone m-0  ">
                    <i className=" correcticon me-2 fa-solid fa-check"></i> Social
                    accounts Managmenets
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Media
                    Buyer Managmenet{" "}
                </p>
                </div>

                <button  className="titlebgthree w-100 cartbtn btn btn-outline-light py-3 " onClick= { ()=>{
                    increase()
                    cardone('back 3 ' , 2800)
                }}>
                {" "}
                add to cart
                </button>
            </div>
            </div>
        </div>
        </>
    );
    }
