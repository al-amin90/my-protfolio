import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import TechnicalSkills from "../components/TechnicalSkills";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Navbar></Navbar>
      <Banner></Banner>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
};

export default Home;
