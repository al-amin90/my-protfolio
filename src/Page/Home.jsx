import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import TechnicalSkills from "../components/TechnicalSkills";
import Projects from "../components/Projects";
import line from "../assets/line.png";
import BannerImg from "../components/BannerImg";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-no-repeat" style={{ backgroundImage: `url(${line})` }}>
        <TechnicalSkills></TechnicalSkills>
        <Projects></Projects>
      </div>
      <Education></Education>
      <Contact></Contact>
      <BannerImg></BannerImg>
      <Footer></Footer>
    </div>
  );
};

export default Home;
