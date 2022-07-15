import React from "react"
import "./Room.css"
import "./tab.css"
import image from "./images/maldivesTravel.jpg"
import imagebg from "./images/weddingDecoration.jpg"
import { Parallax } from "react-parallax"
import LoremIpsum from "react-lorem-ipsum"
import LocalHotelTwoToneIcon from '@mui/icons-material/LocalHotelTwoTone';
import KingBedTwoToneIcon from '@mui/icons-material/KingBedTwoTone';
import BathtubIcon from '@mui/icons-material/BathtubTwoTone';
import RoomServiceIcon from '@mui/icons-material/RoomServiceTwoTone';
import RssFeedIcon from '@mui/icons-material/RssFeedTwoTone';


function Room(){
    return(        
        <div className="Rooms">
            <div className="features">
                <div className="featuresButton">
                    <LoremIpsum p={1}></LoremIpsum>
                    <div className="submit">
                        <label for="submit"></label>
                        <input type="submit" id="submit" value="Book Now"></input>
                    </div>
                </div>
                <ul className="featureList">
                    <li>
                        <LocalHotelTwoToneIcon/>
                        <p> A/C (24/7)</p>
                    </li>
                    <li><KingBedTwoToneIcon/><p>King Bed</p></li>
                    <li><BathtubIcon/><p>Washroom</p></li>
                    <li><RoomServiceIcon/><p>Ontime Service</p></li>
                    <li><RssFeedIcon/><p>Unlimited Wifi</p></li>
                </ul>
            </div>
        
            <div className="features">
                <div className="featuresButton">
                    <LoremIpsum p={1}></LoremIpsum>
                    <div className="submit">
                        <label for="submit"></label>
                        <input type="submit" id="submit" value="Book Now"></input>
                    </div>
                </div>
                <ul className="featureList">
                    <li>
                        <LocalHotelTwoToneIcon/>
                        <p> A/C (24/7)</p>
                    </li>
                    <li><KingBedTwoToneIcon/><p>King Bed</p></li>
                    <li><BathtubIcon/><p>Washroom</p></li>
                    <li><RoomServiceIcon/><p>Ontime Service</p></li>
                    <li><RssFeedIcon/><p>Unlimited Wifi</p></li>
                </ul>
            </div>
        </div> 
    );
};

export default Room;
