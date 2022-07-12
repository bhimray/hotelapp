import React from "react"
import {useState} from "react"
import "./Container2.css"
import "./Contact.css"
import "./tab.css"
import image from "./images/paitings.jpg"
import imagebg from "./images/yellow_paintings.jpg"
import { Parallax } from "react-parallax"
import LoremIpsum from "react-lorem-ipsum"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';


function Contact(){
    const [toggleState, setToggleState]= useState(1)
    const toggleTab =(index)=>{
        console.log(index);
        setToggleState(index);
    };
    
    return(
        <div className="contactback">
            <Parallax  strength={500} className="tabCont">
                <div className="R1">
                    <div>
                        <h1>Contact Us</h1>
                        <LoremIpsum p={1}/>
                    </div>
                    <img src={image} height="400px" width="500px" alt="This is picture"></img>
                </div>
                <div className="R2">
                    <div className="icon">
                        <FacebookIcon style={{ color:"gold" }}/>
                        <p>facebook</p>
                    </div>
                    <div className="icon">
                        <InstagramIcon style={{ color: "gold", size:"20px" }}/>
                        <p>Instagram</p>
                    </div>
                    <div className="icon">
                        <MailIcon style={{ color: "gold" }}/>
                        <p>gmail</p>
                    </div>
                    
                </div>
                
                <div className="contactContainer">
                    <div className="R3">
                        <button id="button12" className={toggleState===1? "ntabs active-tab ":"ntabs"}
                        onClick={()=>toggleTab(1)}>Contact
                        </button>

                        <button id="button12" className={toggleState===2? "ntabs active-tab ":"ntabs"}
                        onClick={()=>toggleTab(2)}>Feedback
                        </button> 
                    </div>
                    <div className={toggleState===1? "content active-content": "content"}>
                        <div>
                            <form>
                                <div className="contactForm">
                                    <div className="formC1">
                                        <label for="name">First Name</label>
                                        <input type="text" id="name" placeholder="for example: Harry"></input>
                                    </div>
                                    <div className="formC1">
                                        <label for="name">Last Name</label>
                                        <input type="text" id="name" placeholder="for example: Potter"></input>
                                    </div>
                                    <div className="formC1">
                                        <label for="name">Email Address</label>
                                        <input type="email" id="name" placeholder="for example: ray@gmail.com"></input>
                                    </div>
                                    <div className="formC1">
                                        <label for="name">Phone/Mobile number</label>
                                        <input type="phone" id="name" placeholder="for example: +977 9999999999" column="100"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={toggleState===2? "content active-content": "content"}>
                        <div>
                            <form>
                                <div className="contactForm">
                                    <div className="formC2">
                                        <label for="name">First Name</label>
                                        <input type="text" id="name" placeholder="for example: Harry"></input>
                                    </div>
                                    <div className="formC2">
                                        <label for="name">Last Name</label>
                                        <input type="text" id="name" placeholder="for example: Potter"></input>
                                    </div>
                                    <div className="formC2">
                                        <label for="name">Email Address</label>
                                        <input type="email" id="name" placeholder="for example: ray@gmail.com"></input>
                                    </div>
                                    <div className="formC2">
                                        <label for="feedback">Give us Feedback:</label>
                                        <textarea id="feedback" name="feedback" rows="10" cols="120"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="submitContact">
                        <label for="submit"></label>
                        <input type="submit" id="submit" ></input>
                    </div>
                </div>
                
            </Parallax>
        </div>
    );
};

export default Contact;
