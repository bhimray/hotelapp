import React from "react";
import { NavLink } from "react-router-dom";
import {useState} from "react";

import "./Navigation.css";
import CycloneSharpIcon from '@mui/icons-material/CycloneSharp';
function Navigation(){
    const [navBar, setNavBar] = useState(false)
    const changeBackground=()=>{
        if (window.scrollY>=200){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return(
        <div className={navBar? "navBar active":"navBar"}>
            <div >
                <NavLink to="/">
                    <div className="symbol">
                        <CycloneSharpIcon sx={{ fontSize:100, color:"white", animation:"rotate infinite"}}/>
                        
                    </div>
                </NavLink>
            </div>
            <ul className="hUl">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/room">
                        Room
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/gallary">
                        Gallary
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/booking">
                        Booking
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default Navigation;

