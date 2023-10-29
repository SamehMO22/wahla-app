    import React, { useEffect } from "react";
    import "../Back-one/back.css";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { useContext } from "react";
    import { CartContext } from "../../Context/CartStore";
    export default function Backthree() {
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
            Web Design and Development Bundle
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
                    Growth Package Simple Landing Pages
                </p>
                </div>
                <div className=" titlebg">
                <p className=" text-center text-white h4 p-2">
                    450 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Choose
                    from a variety of professional designs.
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> One
                    language.
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>{" "}
                    Responsive design.
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>
                    Integration with tracking codes.
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> High
                    speed.
                </p>
                <p className="onebytwo m-0 ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i> Exclusive
                    domain
                </p>
                <p className="onebyone m-0  ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i> Control panel
                </p>
                <p className="onebytwo m-0 ">
                    <i className="xicon me-2 fa-solid fa-xmark"></i>Foundation
                    Social Media
                </p>
                <p className="onebyone m-0 "> .</p>
                <p className="onebytwo m-0 ">.</p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Growth Package Simple Landing Pages ' , 450)
                }} className="titlebg w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-down" className="col-md-4">
                <div className="titlebgtwo ">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Growth Package Landing Pages{" "}
                </p>
                </div>
                <div className=" titlebgtwo">
                <p className=" text-center text-white h4 p-2">
                    800 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Choose
                    from a variety of professional designs.
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> One
                    language.
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>{" "}
                    Responsive design.
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>
                    Integration with tracking codes.
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> High
                    speed.
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Exclusive
                    domain
                </p>
                <p className="onebyone m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Control
                    panel
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Foundation
                    Social Media
                </p>
                <p className="onebyone m-0 "> .</p>
                <p className="onebytwo m-0 ">.</p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Growth Package Landing Pages' , 800)
                }} className="titlebgtwo w-100 cartbtn btn btn-outline-light py-3 ">
                {" "}
                add to cart
                </button>
            </div>

            <div data-aos="zoom-out-left" className="col-md-4">
                <div className="titlebgthree">
                <p className="silverpadding text-center h4 p-5 text-white">
                    Package Simple Informative Websit
                </p>
                </div>
                <div className=" titlebgthree">
                <p className=" text-center text-white h4 p-2">
                    1400 <br />
                    <span className="h6">Rial</span>
                </p>
                </div>

                <div className=" bg-info">
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Choose
                    from a variety of professional designs.
                </p>
                <p className=" onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> One
                    language.
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>{" "}
                    Responsive design.
                </p>
                <p className="onebytwo m-0">
                    <i className="correcticon me-2 fa-solid fa-check"></i>
                    Integration with tracking codes.
                </p>
                <p className=" onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> High
                    speed.
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Exclusive
                    domain
                </p>
                <p className="onebyone m-0  ">
                    <i className="correcticon me-2 fa-solid fa-check"></i> Control
                    panel
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>Foundation
                    Social Media
                </p>
                <p className="onebyone m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>SLL
                </p>
                <p className="onebytwo m-0 ">
                    <i className="correcticon me-2 fa-solid fa-check"></i>25 GB of
                    storage
                </p>
                </div>

                <button onClick= { ()=>{
                    increase()
                    cardone('Package Simple Informative Websit' , 1400)
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
