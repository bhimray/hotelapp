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
        <div>
            <div className="Rooms">
                <Parallax bgImage={imagebg} strength={500} className="roomContainer">
                    <h1>A/C Room</h1>
                </Parallax>
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
                            <p> A/C (24/7) for your comfort</p>
                        </li>
                        <li><KingBedTwoToneIcon/><p>King size Bed</p></li>
                        <li><BathtubIcon/><p>Well equipped Washroom</p></li>
                        <li><RoomServiceIcon/><p>Ontime Room Service</p></li>
                        <li><RssFeedIcon/><p>Unlimited high speed Wifi</p></li>
                    </ul>
                </div>

                <Parallax bgImage={image} strength={500} className="roomContainer">
                    <h1>Non-A/C Room</h1>
                </Parallax>
                <div className="features">
                    <div className="featuresButton">
                        <LoremIpsum p={1}></LoremIpsum>
                        <div className="submit">
                            <label for="submit"></label>
                            <input type="submit" id="submit" value="Book Now"></input>
                        </div>
                    </div>
                    <ul className="featureList">
                        <li><LocalHotelTwoToneIcon/><p> A/C (24/7) for your comfort</p></li>
                        <li><KingBedTwoToneIcon/><p>King size Bed</p></li>
                        <li><BathtubIcon/><p>Well equipped Washroom</p></li>
                        <li><RoomServiceIcon/><p>Ontime Room Service</p></li>
                        <li><RssFeedIcon/><p>Unlimited high speed Wifi</p></li>
                    </ul>
                </div>
            
            </div>
        </div>
    );
};

export default Room;
