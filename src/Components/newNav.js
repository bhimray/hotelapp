import React, {useState} from "react"
import "./newNav.css"
import {NavLink} from "react-router-dom"
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

function NewNav(){
    const [showLinks, setShowLinks] = useState(false);

    const [navColor, setNavColor] = useState(false)
    const changeBackground=()=>{
        if (window.scrollY>=0){
            setNavColor(true);
        }else if (window.scrollY<0){
            setNavColor(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    
    return(
        <div className={navColor? "navColor Navbar":"Navbar"}>
            <div className="rightSide">
               <NavLink to="/"><TempleHinduIcon style={{color:"white"}}/></NavLink>
            </div>
            <div className="leftSide">
                <div className="links" id={showLinks? "hidden":""}>
                    <NavLink to="/" onClick={()=>setShowLinks(!showLinks)}>Home</NavLink>
                    <NavLink to="/about" onClick={()=>setShowLinks(!showLinks)}>About</NavLink>
                    <NavLink to="/gallary" onClick={()=>setShowLinks(!showLinks)}>Gallary</NavLink>
                    <NavLink to="/room" onClick={()=>setShowLinks(!showLinks)}>Rooms</NavLink>
                    <NavLink to="/booking" onClick={()=>setShowLinks(!showLinks)}>Booking</NavLink>
                    <NavLink to="/contact" onClick={()=>setShowLinks(!showLinks)}>Contact</NavLink>
                </div>
                <button onClick={()=>setShowLinks(!showLinks)}><ListRoundedIcon/></button>
            </div>
            
        </div>
    )
}

export default NewNav;

