import React from "react"
import {Link, Outlet} from "react-router-dom"
import Navigation from "./Navigation"

function Home(){
    return(
        <>
            <Navigation/>
            <section>
                <Outlet/>
            </section>
            <footer>Footer</footer>
        </>
    );
};

export default Home;