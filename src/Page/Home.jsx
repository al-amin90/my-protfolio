import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import TechnicalSkills from "../components/TechnicalSkills";
import Projects from "../components/Projects";
import line from "../assets/line.png";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-no-repeat" style={{ backgroundImage: `url(${line})` }}>
        <TechnicalSkills></TechnicalSkills>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Home;
