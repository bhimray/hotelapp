import React from "react"
import {LoremIpsum} from "react-lorem-ipsum"
import "./header.css"
import image1 from "./images/bedRoom.jpg"
import image2 from "./images/sittingHall.jpg"
import modernInterior from './images/modernInterior.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHotel} from '@fortawesome/free-solid-svg-icons'

const logo = <FontAwesomeIcon icon={faHotel} />

export default function header(){
    return(
        <div className="mainContainer" >
            <div className="headerR2">
                <div className="part2">
                    <img src={modernInterior} alt="loading..." />
                </div>
                <div className="part3">
                    <div style={{fontSize:"30px", fontWeight:"bolder"}}>A/C Room</div>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.<br/>
                     Primis ultrices iaculis ex potenti quam.<br/> 
                     Odio duis magnis nibh ridiculus; nascetur taciti. 
                     Mauris sed augue odio sem augue sem tempus urna orci.<br/>
                      Faucibus tristique nulla faucibus scelerisque auctor varius dapibus. 
                    </p>
                    <div className="buttonHeader">
                        <a href="/room"><button className="button1">View more</button></a>
                        <a href="/booking"><button className="button2">Book Now</button></a> 
                     </div>                   
                </div>
            </div>
        </div>
    )
}