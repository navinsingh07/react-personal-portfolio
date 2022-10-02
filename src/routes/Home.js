import React from "react";
import { Navbar } from "../components/Navbar";
import HeroImage from "../components/HeroImage"
import Footer from "../components/Footer";
import FramerEx1 from "../components/Framer";

const Home = () => {
    return(
        <>
            <Navbar />
            <HeroImage />
            <FramerEx1 />
            <Footer />
        </>
    )
}

export default Home;