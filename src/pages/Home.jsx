import React from "react";
import Explore from "../components/Explore";
import Highlights from "../components/highlights";
import Landing from "../components/landingpage";
import DiscountBook from "../components/ui/DiscountBook";
import Features from "../components/ui/features";

const Home = ()=> {
    return (
        <>
        <Landing/>
        <Highlights/>
        <Features/>
        <DiscountBook/>
        <Explore/>
        </>
    )
}

export default Home