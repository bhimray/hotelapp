import React from "react";
import { NavLink } from "react-router-dom";
import {useState} from "react";
import {useRef} from "react"
import EjectIcon from '@mui/icons-material/Eject';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navigation.css";
import CycloneSharpIcon from '@mui/icons-material/CycloneSharp';
function Navigation(){
    const [navBar, setNavBar] = useState(false)
    const changeBackground=()=>{
        if (window.scrollY>=100){
            setNavBar(true);
        }else if (window.scrollY<=100){
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
            <nav className="dropDown" >
                <ul className="navList" id={togglestate?"hidden":""}>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" onClick={()=>settogglestate(!togglestate)}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" onClick={()=>settogglestate(!togglestate)}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/room" onClick={()=>settogglestate(!togglestate)}>
                            Room
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/gallary" onClick={()=>settogglestate(!togglestate)}>
                            Gallary
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/booking" onClick={()=>settogglestate(!togglestate)}>
                            Booking
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" onClick={()=>settogglestate(!togglestate)}>
                            Contact
                        </NavLink>
                    </li>
                    <button  className="eject">
                        <EjectIcon/>
                    </button>
                    
                </ul>
                <button className="menu menuPosition" onClick={()=>settogglestate(!togglestate)}>
                    <MenuIcon/>
                </button>
            </nav>
            
        </nav>
    );
};

export default Navigation;

