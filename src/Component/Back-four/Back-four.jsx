    import React, { useEffect } from "react";
    import "../Back-one/back.css";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { useContext } from "react";
    import { CartContext } from "../../Context/CartStore";

    export default function Backfour() {
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
            Profile Company Design Bundle
            </p>
            <p data-aos="zoom-out-down" className=" text-black">
            Writing and designing company and institution profiles are two
            essential steps in building a strong and appealing identity. The
            profile serves as a presentation document that succinctly and clearly
            reflects the company's features, values, and services. Through
            skillful texts and innovative designs, the spotlight can be placed on
            the company's most important information in a way that captures the
            attention of potential clients and partners. The profile typically
            includes information about history, vision, mission, and offered
            services, as well as achievements. The process of designing the
            profile requires harmony between texts, images, and graphics to create
            a cohesive visual experience. Through expertly writing and designing
            the profile, the initial impression of the company can be enhanced,
            leading to a positive interaction with the audience and potential
            clients.
            </p>
            <p className="h3 my-5  text-info socialpadding">
            Explore Whlaah profile company packages and introduce yourself in a
            way that suits you.
            </p>

            <div className="row my-5">
            <div data-aos="zoom-out-right" className="col-md-4">
                <div className="titlebg ">
                <p className=" text-center h4 p-5 text-white silverpadding">
                    Foundation Pack Profile Company
                </p>
                </div>
                <div className=" titlebg">
                <p className=" text-center text-white h4 p-2">
                    800 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    Number of Pages <span className="hampozoo">8:12</span>
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Page
                    Layout
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Content
                    Writing
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>
                    High-Resolution Images
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Print
                    Version Design
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Print
                    Version Design
                </p>
                <p className="onebyone m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Digital
                    PDF Design
                </p>
                <p className="onebytwo m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Review and
                    Revisions <span className=" ps-5">2</span>
                </p>
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Project
                    Duration <span className=" ps-5">5:7Days</span>
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Foundation Pack Profile Company ' , 800)
                }} className="titlebg w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-down" className="col-md-4">
                <div className="titlebgtwo ">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Growth Package Profile Company
                </p>
                </div>
                <div className=" titlebgtwo">
                <p className=" text-center text-white h4 p-2">
                    1500 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    Number of Pages <span className="ps-5">20:24</span>
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Page
                    Layout
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Content
                    Writing
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>
                    High-Resolution Images
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Print
                    Version Design
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Print
                    Version Design
                </p>
                <p className="onebyone m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Digital
                    PDF Design
                </p>
                <p className="onebytwo m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Review and
                    Revisions <span className=" ps-5">4</span>
                </p>
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Project
                    Duration <span className=" ps-5">5:7Days</span>
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Growth Package Profile Company ' , 1500)
                }} className="titlebgtwo w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-left" className="col-md-4">
                <div className="titlebgthree">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Development Package Profile Company
                </p>
                </div>
                <div className=" titlebgthree">
                <p className=" text-center text-white h4 p-2">
                    2000 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    Number of Pages <span className="ps-5">32:36</span>
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Page
                    Layout
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Content
                    Writing
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>
                    High-Resolution Images
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Print
                    Version Design
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Print
                    Version Design
                </p>
                <p className="onebyone m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Digital
                    PDF Design
                </p>
                <p className="onebytwo m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Review and
                    Revisions <span className=" ps-5">Unlimited</span>
                </p>
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Project
                    Duration <span className=" ps-5">5:7Days</span>
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Development Package Profile Company' , 2000)
                }} className="titlebgthree w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>
            </div>
        </div>
        </>
    );
    }
