import React from "react"
import {Link} from "react-router-dom"

function Navigation(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Booking">Booking</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/room">Room</Link>
            <Link to="/gallary">Gallary</Link>
        </>
    );
};

export default Navigation;