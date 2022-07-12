import React from "react"
import {Link} from "react-router-dom"

function Navigation(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Booking">Booking</Link>
            <Link to="/Contact">Contact</Link>
        </>
    );
};

export default Navigation;