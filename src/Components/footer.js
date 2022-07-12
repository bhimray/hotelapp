import React from "react"
import { ReactDOM } from "react"
import { NavLink } from "react-router-dom"
import "./Container5.css"

export default function Container5(){
    return(
        <div className="Container5">
            <footer>
                <div>@copyright 2022 All Rights Reserved</div>
                <div>Developed by Bimlendra</div>
                <div className="Cont5R1">
                    <ul>
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about-us">About Us</NavLink></li>
                        <li><NavLink href="/gallary">Gallary</NavLink></li>
                        <li><NavLink href="/contact-us">Contact Us</NavLink></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}