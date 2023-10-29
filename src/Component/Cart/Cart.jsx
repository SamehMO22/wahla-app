    import React from "react";
    import { useContext } from "react";
    import { CartContext } from "../../Context/CartStore";
import { Link } from "react-router-dom";

    export default function Cart() {
    let { delet } = useContext(CartContext);

    return (
        <>
        <div className="container my-5 p-5">
        {localStorage.length ? <span className="my-5 h4 text-black-50">Back Name is:</span> : ""}
        <h2>{localStorage.getItem("backName")} </h2>


        {localStorage.length ? <span className=" my-5 h4 text-black-50">Back price is:</span> : ""}

        <h2>
            {localStorage.getItem("backPrice")}{" "}
        </h2>
        {localStorage.length ?<Link to='paypal'><button className=" btn btn-outline-danger me-5">payNow</button></Link>  
         : ""}
        {localStorage.length ? <button onClick={delet} className=" btn btn-outline-danger ms-5">
            delete
        </button>
         : ""}
        </div>
        
        </>
    );
    }
