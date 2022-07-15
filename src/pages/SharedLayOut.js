import React from "react"
import {Link, Outlet} from "react-router-dom"
import NewNav from "./Navigation"
import Footer from "./footer"
import Container4 from "../Components/Container4"

function Home(){
    return(
        <>
            <NewNav/>
            <Outlet/>
            <Footer/>          
            
        </>
    );
};

export default Home;