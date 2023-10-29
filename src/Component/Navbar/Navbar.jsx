    import { useEffect } from "react";
    // import { useContext } from "react";
    import "./Navbar.css";
    import { Link } from "react-router-dom";
    import logo from "../../images/lolologo.jpj.jfif";
    import AOS from "aos";
    import "aos/dist/aos.css";
    // import { CartContext } from "../../Context/CartStore";

    export default function Navbar() {
    // let { counter } = useContext(CartContext);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
        <div
            data-aos="fade-down"
            className="  d-flex justify-content-end  m-0 p-0 top-bg  "
        >
            <Link to="register">
            {" "}
            <button className="btn btn-light btn   m-2">Register</button>{" "}
            </Link>
            <Link to="login">
            <button className="btn btn-light btn   m-2">Login</button>{" "}
            </Link>
            <Link to="search">
            {" "}
            <button className="btn btn-light btn   m-2 me-5">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>{" "}
            </Link>
        </div>

        <div className="container     " data-aos="fade-down">
            <div className="row ">
            <div className="col-md-2">
                <img className=" w-100" src={logo} alt="" />
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-3 d-flex align-items-center  flex-lg-row flex-md-column flex-sm-row  ">
                <div>
                <i className="contect fa-regular fa-envelope me-3 fa-2x "></i>
                </div>
                <div>
                <p className=" m-0   text-black-50">Email</p>
                <p>
                    {" "}
                    <Link href="mailto:someone@example.com">
                    samehhelwa7@gmail.com
                    </Link>
                </p>
                </div>
            </div>

            <div className="col-md-3 d-flex align-items-center flex-lg-row flex-md-column flex-sm-row ">
                <div>
                <i className="contect fa-solid fa-phone-volume me-3 fa-2x "></i>
                </div>
                <div>
                <p className=" m-0   text-black-50">Contect Us</p>
                <p>01065932410</p>
                </div>
            </div>

            <div className="col-md-2 m-3">
                <button className="btn btn-outline-danger me-2">
                {" "}
                <i className="fab fa-facebook-f "></i>
                </button>
                <button className="btn btn-outline-danger me-2">
                {" "}
                <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-outline-danger me-2">
                {" "}
                <i className="fab fa-google"></i>
                </button>
                <button className="btn btn-outline-danger me-2">
                {" "}
                <i className="fab fa-instagram"></i>
                </button>
            </div>
            </div>
        </div>

        <div className=" d-flex justify-content-center my-3 position-relative parent-links      ">
            <ul
            data-aos="fade-left"
            className="   shadooow links list-unstyled m-0 d-flex align-items-center flex-md-row flex-column line  "
            >
            <li className="  px-3 h6 my-sm-2">
                <Link className="different red-style" to="">
                Home
                </Link>
            </li>
            <li className="  px-3 h6 my-sm-2">
                <Link className="different red-style" to={"aboutUs"}>
                about Us
                </Link>
            </li>
            <li className=" px-3 h6 my-sm-2">
                <Link className="different red-style" to="Services">
                Service
                </Link>
            </li>
            <li className=" px-3 h6 my-sm-2 ">
                <Link className="different red-style" to="Client">
                Client
                </Link>
            </li>
            <li className=" px-3 h6 my-sm-2">
                <Link className="different red-style" to="Events">
                Events
                </Link>
            </li>
            <li className=" px-3 h6 my-sm-2 ">
                <Link className="different red-style" to="Profolio">
                Profolio
                </Link>
            </li>
            <li className=" px-3 h6 my-sm-2 ">
                <Link className=" differentred-style" to="backedges">
                backg
                </Link>
            </li>
            <li className=" px-3 h6 my-sm-2">
                <Link className="different red-style" to="blog">
                blog-es
                </Link>
            </li>
            <li className=" px-3 my-sm-2 h6 active ">
                <Link className="different red-style" to="contect us">
                contect{" "}
                </Link>
            </li>
            </ul>

            <div className=" ">
            <button className="btn position-relative">
                <Link to={"card"}>
                {" "}
                <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <div className=" catrdnumber rounded-circle   d-flex justify-content-center align-items-center position-absolute">
                {localStorage.getItem('counter')}
                </div>
            </button>
            </div>
        </div>
        </>
    );
    }
