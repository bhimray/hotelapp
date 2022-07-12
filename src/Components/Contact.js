import React from "react"
import {useState} from "react"
import "./Container2.css"
import "./tab.css"
import image from "./images/maldivesTravel.jpg"
import imagebg from "./images/weddingDecoration.jpg"
import { Parallax } from "react-parallax"

function Contact(){
    const [toggleState, setToggleState]= useState(1)
    const toggleTab =(index)=>{
        console.log(index);
        setToggleState(index);
    };
    
    return(
        <div>
            <Parallax bgImage={imagebg} strength={500} className="tabContainer">
                <div className="cont2R1">
                    first
                </div>
                <div className="bloc-tabs">
                    <button className={toggleState===1? "tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(1)}>Contact
                    </button>

                    <button className={toggleState===2? "tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(2)}>Feedback
                    </button> 
                </div>
                <div className="content-tabs">
                    <div className={toggleState===1? "content active-content": "content"}>
                        <img src={image} height="400px" width="500px" alt="This is picture"></img>
                        <div>
                            <h1>Contact</h1>
                            <p>Hi, this is hotel where you spend money to stay and eat food.</p>
                        </div>
                    </div>

                    <div className={toggleState===2? "content active-content": "content"}>
                        <img src={image} height="400px" width="500px" alt="This is picture"></img>
                        <div>
                            <h1>Feedback</h1>
                            <p>Hi, this is hotel where you spend money to stay and eat food.</p>
                        </div>
                    </div>

                </div>
            </Parallax>
        </div>
    );
};

export default Contact;
