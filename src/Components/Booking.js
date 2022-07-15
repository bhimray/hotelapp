import React from "react"
import "./Booking.css"

function Booking(){
    return(
        <div>
            <div className="formBack">
                <form className="form">
                    <h2 className="formH1">Booking & Contacts</h2>
                    <div className="container">

                        <div className="formH11">
                            <label for="name">First Name</label>
                            <input type="text" id="name" placeholder="for example: Harry"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">Last Name</label>
                            <input type="text" id="name" placeholder="for example: Potter"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">Email Address</label>
                            <input type="email" id="name" placeholder="for example: ray@gmail.com"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">Phone/Mobile number</label>
                            <input type="phone" id="name" placeholder="for example: +977 9999999999"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">Country</label>
                            <input type="text" id="name" placeholder="for example: Japan"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">City</label>
                            <input type="text" id="name" placeholder="for example: Tokyo"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">Nationality</label>
                            <input type="text" id="name" placeholder="for example: Japanese"></input>
                        </div>
                        <div className="formH11">
                            <label for="name">Post/Zip Code</label>
                            <input id="name" placeholder="for example: 48999"></input>
                        </div>

                    </div>
                    
                    <h2 className="formH1">Booking & Contacts</h2>
                    <div className="container">
                        <div className="formH11">
                            <label for="name">Arrival Date</label>
                            <input type="date" id="name" placeholder="Select arrival and departure date"></input>
                        </div>

                        <div className="formH11">
                            <label for="name">Number of people</label>
                            <input type="number" id="name" placeholder="for example: 2"></input>
                        </div>

                        <div className="formH11 radio">
                            <p>Types of Room</p>
                            <input type="radio" id="ac" name="room" value="CSS"/>
                            <label for="ac">A/C</label><br/>
                            <input type="radio" id="nac" name="room" value="JavaScript"/>
                            <label for="nac">Non-A/C</label>
                        </div>

                        <div className="formH11">
                            <label for="name">Fooding</label>
                            <input type="text" id="name" placeholder="for example: Sushi"></input>
                        </div>

                        <div className="description">
                            <label for="name">First Name</label>
                            <input id="name" placeholder="for example: Can i get cab from this hotel?"></input>
                        </div>
                    </div>
                    <div className="submit">
                        <label for="submit"></label>
                        <input type="submit" id="submit" ></input>
                    </div>

                </form>
            </div>
        </div>
    );

};

export default Booking;