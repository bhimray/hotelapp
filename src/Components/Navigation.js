import React from "react";
import { NavLink } from "react-router-dom";
import {useState} from "react"

import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHotel} from '@fortawesome/free-solid-svg-icons'

const logo = <FontAwesomeIcon icon={faHotel} />

export default function Navigation(){
    const [navBar, setNavBar] = useState(false)
    const changeBackground=()=>{
        if (window.scrollY>=200){
            setNavBar(true);
        }else{
            setNavBar(false)
        }
    };
    window.addEventListener("scroll", changeBackground)

    return(
        
        <div className={navBar? "navBar active":"navBar"}>
                <div >
                    <NavLink to="/">
                        <p className="logo">{logo}</p>
                        <p>Company name</p>
                    </NavLink>
                </div>
                <ul className="hUl">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                            
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about-us">
                            About Us
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rooms">
                            Room Service
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/gallary">
                            Gallary
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/online-booking">
                            Online Booking
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact-us">
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">
                            Blog
                        </NavLink>
                    </li>
                </ul>
        </div>
    )
}

