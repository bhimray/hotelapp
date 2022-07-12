import React from "react"
import { ReactDOM } from "react"
import "./About.css"
import aboutImg from "./images/tableChairs.jpg"
import LoremIpsum from "react-lorem-ipsum"



function About(){
    return(
        <div>
    
            <div className="About">
                <div className="aboutR1">
                    <p id="aboutR11">ABOUT HOTEL Almighty and Almighty</p>
                    <p id="aboutR12">27/7 service is available</p>
                </div>
                <div className="aboutR3">
                    <img src={aboutImg}></img>
                    <div>
                        <h1>About this hotel</h1>
                        <LoremIpsum p={1} />
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default About;