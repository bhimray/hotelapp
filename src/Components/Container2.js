import React from "react"
import {useState} from "react"
import "./Container2.css"
import "./tab.css"
import image from "./images/maldivesTravel.jpg"
import imagebg from "./images/bottomViewBuiding.jpg"
import { Parallax } from "react-parallax"
import LoremIpsum from "react-lorem-ipsum"

export default function Container2(){
    const [toggleState, setToggleState]= useState(1)
    const toggleTab =(index)=>{
        console.log(index);
        setToggleState(index);
    };
    
    return(
        <div className="tabContainer">
            <div className="rect-parallax-content" style={{"position":"relative"}}>
                <div className="cont2R1">
                    <h1 style={{color:"white"}}>Facilities and Features</h1>
                </div>
                <div className="bloc-tabs">
                    <button className={toggleState===1? "tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(1)}>Tab1
                    </button>

                    <button className={toggleState===2? "tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(2)}>Tab2
                    </button>

                    <button className={toggleState===3? "tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(3)}>Tab3
                    </button>

                    <button className={toggleState===4? "tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(4)}>Tab4
                    </button> 
                </div>
                <div className="content-tabs">
                    <div className={toggleState===1? "content active-content": "content"}>
                        <img src={image}  alt="This is picture"></img>
                        <div className="activeParagraph">
                            <h1>Tab1</h1>
                            <LoremIpsum p={2}/>
                        </div>
                    </div>

                    <div className={toggleState===2? "content active-content": "content"}>
                        <img src={image}  alt="This is picture"></img>
                        <div>
                            <h1>Tab3</h1>
                            <LoremIpsum p={2}/>
                        </div>
                    </div>

                    <div className={toggleState===3? "content active-content": "content"}>
                        <img src={image}  alt="This is picture"></img>
                        <div>
                            <h1>Tab3</h1>
                            <LoremIpsum p={2}/>
                        </div>
                    </div>

                    <div className={toggleState===4? "content active-content": "content"}>
                        <img src={image}  alt="This is picture"></img>
                        <div>
                            <h1>Tab4</h1>
                            <LoremIpsum p={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
