import React from "react"
import {Link, Outlet} from "react-router-dom"

function Home(){
    return(
        <>
            <h1>Home</h1>
            <Outlet/>
        </>
    );
};

export default Home;