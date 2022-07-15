import React from "react";
import { NavLink } from "react-router-dom";
import {useState} from "react";
import {useRef} from "react"
import EjectIcon from '@mui/icons-material/Eject';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navigation.css";
import CycloneSharpIcon from '@mui/icons-material/CycloneSharp';
function Navigation(){
    const [navBar, setNavBar] = useState(1)
    const changeBackground=()=>{
        if (window.scrollY>=200){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    const [togglestate, settogglestate]=useState(false)
    
    return(
        <nav  className={navBar? "navBar active":"navBar"}>
            <div >
                <NavLink to="/">
                    <div className="symbol">
                        <CycloneSharpIcon sx={{ fontSize:100, color:"white", animation:"rotate infinite"}}/>
                    </div>
                </NavLink>
            </div>
            <nav >
                <ul className="navList" id={togglestate?"hidden":""}>
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
                    <button  className="eject">
                        <EjectIcon/>
                    </button>
                    
                </ul>
                <button className="menu" onClick={()=>settogglestate(!togglestate)}>
                    <MenuIcon/>
                </button>
            </nav>
            
        </nav>
    );
};

export default Navigation;

