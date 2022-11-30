import React from "react";
import { Navbar } from "../components/Navbar";
import HeroImage from "../components/HeroImage"
import Footer from "../components/Footer";
// import FramerEx1 from "../components/Framer";
import Work from '../components/Work'
import PricingCard from '../components/PricingCard';
import AboutContent from '../components/AboutContent';
import Form from '../components/Form';
import AboutMe from "../components/AboutMe";
const Home = () => {
    return(
        <>
            <Navbar />
            <HeroImage />
            {/* <FramerEx1 /> */}
            <AboutMe />
            <Work />
            <PricingCard />
            <AboutContent />
            <Form />
            <Footer />
        </>
    )
}

export default Home;