    import React, { useEffect } from "react";
    import "../Back-one/back.css";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { useContext } from "react";
    import { CartContext } from "../../Context/CartStore";

    export default function Backtwo() {
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
            Logo and identity Bundle
            </p>
            <p data-aos="zoom-out-down" className=" text-black my-5">
            Designing logos and visual identities represent essential aspects in
            shaping the identity of any brand. The logo is a visual symbol that
            distinguishes the brand and uniquely represents it. It should be
            simple and easily recognizable, leaving a lasting impression on
            consumers' minds. As for the visual identity, it comprises visual
            elements such as colors, fonts, and shapes that create a cohesive
            image reflecting the brand's personality. Logo and visual identity
            design are characterized by uniqueness and distinctiveness, aiming to
            create a strong visual impact and enhance brand recognition. Through
            these elements, the brand becomes distinguishable in the competitive
            market and builds an interactive relationship with its audience. Logo
            and visual identity design contribute to building trust, recognition,
            and a strong brand identity, making them essential elements in any
            organization's marketing strategy. At Wihla Advertising and Promotion,
            we specialize in crafting unique logos, as our creative and
            professional team combines experience and inspiration to create
            exceptional logos. We believe that design can truly make a difference
            in how your brand is represented and captures attention. Contact us
            today to embark on a journey of creating or enhancing your distinctive
            visual identity.
            </p>

            <div className="row my-5">
            <div data-aos="zoom-out-right" className="col-md-4">
                <div className="titlebg ">
                <p className=" text-center h4 p-5 text-white silverpadding">
                    Silver Pak Logo Designs & Identity
                </p>
                </div>
                <div className=" titlebg">
                <p className=" text-center text-white h4 p-2">
                    1400 <br />
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
                    <i className="correcticon me-2 fa-solid fa-check"></i> Share and
                    add Hashtags
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Marketing
                    Content Creator
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Weekly
                    Reports
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Social
                    accounts Managmenets
                </p>
                <p className="onebyone m-0  ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i> Profile Company
                    (magazine)
                </p>
                <p className="onebytwo m-0 ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i>Foundation
                    Social Media
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Silver Pak Logo Designs & Identity' , 1400)
                }}  className="titlebg w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-down" className="col-md-4">
                <div className="titlebgtwo ">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Golden Pack Logo Designs & Identity{" "}
                </p>
                </div>
                <div className=" titlebgtwo">
                <p className=" text-center text-white h4 p-2">
                    2200 <br />
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
                    cardone('Golden Pack Logo Designs & Identity' , 2200)
                }} className="titlebgtwo w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-left" className="col-md-4">
                <div className="titlebgthree">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Diamond Pack Logo Designs & Identity
                </p>
                </div>
                <div className=" titlebgthree">
                <p className=" text-center text-white h4 p-2">
                    3000 <br />
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

                <button onClick= { ()=>{
                    increase()
                    cardone('Diamond Pack Logo Designs & Identity' , 3000)
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
