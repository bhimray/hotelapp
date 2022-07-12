import React from "react"
import { ReactDOM } from "react"
import { NavLink } from "react-router-dom"
import "./footer.css"

export default function Container5(){
    return(
        <div >
            <footer className="footer">
                <div>@copyright 2022 All Rights Reserved</div>
                <div>Developed by Bimlendra</div>
                <div className="footer1">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/gallary">Gallary</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}