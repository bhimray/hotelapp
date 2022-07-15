import React from "react"
import "./Container4.css"
import {NavLink} from "react-router-dom"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LoremIpsum from "react-lorem-ipsum";


export default function Container4(){
    return(
        <div className="Container4">
            
            <div className="Cont4R2">
                <div>
                    <h1>About Hotel</h1>
                    <LoremIpsum p={1}/>
                    <NavLink to="/about">Know more</NavLink>
                    
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <ul>
                        <li>Booking</li>
                        <li>Rooms</li>
                        <li>Contact</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div>
                    <h1>Our Address</h1>
                    <ul>
                        <li>
                            <a href="mailto:abcd@gmail.com">
                                 abcd@gmail
                            </a>
                        </li>
                        <li>
                            <a href="callto: +977 9888888888">
                                 +977 98888888
                            </a>
                        </li>
                        <li>
                            <a href="goto:kathmandu">
                                 Kathmandu
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Connect us
                    </h1>
                    <div className="mediaIcon">
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <MailIcon />
                    </div>
                
                </div>
            </div>
        </div>
    )
}