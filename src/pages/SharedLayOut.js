import React from "react"
import {Link, Outlet} from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./footer"
import Container4 from "../Components/Container4"

function Home(){
    return(
        <>
            <Navigation/>
            <section>
                <Outlet/>
            </section>
            <Container4/>
            <Footer/>
        </>
    );
};

export default Home;