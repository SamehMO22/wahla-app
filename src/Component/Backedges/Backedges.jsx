import React, { useEffect } from "react";
import { images } from "./images/image";
import "./Backedges.css";
import { Link, Outlet } from "react-router-dom";
import DigitalSlider from "./../DigitalSlider/DigitalSlider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Backedges() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className=" container position-relative">
        <div className="row">
          <div data-aos="flip-left" className=" packedgg col-md-3">
            <Link to={"mediaback"}>
              <img className="backedimg w-100 p-3 " src={images[0]} alt="" />
              <h5 className="packedgNamed">Social Media Designs Packs</h5>
            </Link>
          </div>
          <div data-aos="flip-left" className="packedgg col-md-3">
            <Link to={"flagback"}>
              {" "}
              <img className="backedimg w-100 p-3" src={images[1]} alt="" />
              <h5 className="packedgNamed"> Logo and identity Bundle</h5>
            </Link>
          </div>
          <div data-aos="flip-left" className="packedgg col-md-3">
            <Link to={"webback"}>
              {" "}
              <img className=" backedimg w-100 p-3" src={images[2]} alt="" />
              <h5 className="packedgNamed"> web development services</h5>
            </Link>
          </div>
          <div data-aos="flip-left" className="packedgg col-md-3">
            <Link to={"fileback"}>
              <img className="backedimg  w-100 p-3" src={images[3]} alt="" />
              <h5 className="packedgNamed"> profolio back services</h5>
            </Link>
          </div>
        </div>
      </div>

      <Outlet></Outlet>

      <DigitalSlider />
    </>
  );
}
