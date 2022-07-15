import React from "react"
import Header from "../Components/header"
import Container2 from "../Components/Container2";
import Gallary from "../Components/Gallary";
import Container1 from "../Components/Container1"


function Home(){
    return(
        <>
            <Header/>
            <Container1/>
            <Container2/>
            <Gallary/>            
        </>
    );
};

export default Home;