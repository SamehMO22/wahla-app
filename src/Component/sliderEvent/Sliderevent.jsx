    import React, { useEffect, useRef, useState } from "react";
    import "./slider.css";
    import { motion } from "framer-motion";
    import event1 from "../../images/events 3_472544501645880673.jpg";
    import event2 from "../../images/events 10_201631131645880200.jpg";
    import event3 from "../../images/events_2.jpg";
    import event4 from "../../images/events 4_708488971645880731.jpg";
    import event5 from "../../images/events 9_390030711645880846.jpg";
    import event6 from "../../images/events_5  08745671645880089.jpg";
    import event7 from "../../images/events 10_201631131645880200.jpg";
    import event8 from "../../images/events_7 621160831646408382.jpg";
    import event9 from "../../images/events 11_632185721645880272.jpg";
    // import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";

    const event = [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9,
    ];
    const words = [
    "glopal hand wishing day",
    " International Day of Older   ",
    " World Arthritis Day ",
    " World Infection Prevention   ",
    " World Osteoporosis Day ",
    " International Breast Cancer   ",
    "  World Sight Day    ",
    " International Coffee Day ",
    " World Mental Health Day ",
    ];
    const days = [
        "15",
        " 12",
        " 19",
        " 61",
        " 21",
        " 18",
        " 15",
        " 51",
        " 1",
         
        ];

    export default function Sliderevent() {
    const [width, setwidth] = useState(0);

    useEffect(() => {
        Aos.init({duration:1000})
        // console.log(element.current.offsetWidth);
        setwidth(element.current.scrollWidth - element.current.offsetWidth);
    }, []);

    const element = useRef();

    return (
        <>
        <div data-aos="fade-right">
            <div className="mt-5 text-center">
            <i className="fa-regular fa-hand-back-fist mx-2"></i>

            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-regular fa-hand-back-fist mx-2"></i>
            </div>
            <motion.div ref={element} className="carousel overflow-hidden mb-5 ">
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel d-flex"
            >
                {event.map((image, index) => (
                <motion.div key={index} className="item">
                    <img className="" src={image} alt="event" />
                    <h5 className="m-3 pb-4">{words[index]}</h5>
                    <div className="enentcounter p-5">
                        <p>Remining time <span className="days">{days[index]}</span> day</p>

                    </div>
                    <div className="fixedtext p-5 d-flex justify-content-center align-items-center  ">
                    <i className="enenticon fa-solid fa-computer-mouse pe-4"></i>
                        <p className="h6 pt-2 ">view markiting packege </p>

                    </div>
                </motion.div>
                ))}
            </motion.div>
            </motion.div>
        </div>
        </>
    );
    }
