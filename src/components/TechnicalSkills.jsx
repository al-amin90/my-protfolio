import html from "../assets/Skills/html.png";
import css from "../assets/Skills/css.png";
import js from "../assets/Skills/js.png";
import react from "../assets/Skills/rreact.png";
import tailwind from "../assets/Skills/tailwind.png";
import express from "../assets/Skills/express.png";
import mongo from "../assets/Skills/mongo.png";
import next from "../assets/Skills/next.png";
import SubHeading from "./SmallComponents/SubHeading";

const TechnicalSkills = () => {
  return (
    <div className="max-w-[1480px] relative z-10 pt-4 font-inter  mx-auto w-[92%] mt-10 pb-40">
      <div className="shape  "></div>
      <SubHeading title="My Speciality"></SubHeading>
      <h2 className="text-center text-white text-4xl  font-inter font-semibold mt-4">
        My Technical Skills
      </h2>

      {/* all skills */}
      <div className="flex mt-16">
        <div className="bg-gradient-to-r gap-4 p-4 px-8 flex justify-between rounded-xl from-[#6431FE] to-[#B696FF] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl group border-white">
          <img
            className="w-10 group-hover:scale-110 duration-500"
            src={html}
            alt=""
          />
          <div>
            <p className="text-gray-50 font-semibold">Expert</p>
            <h6 className="font-semibold text-white text-lg">HTML</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
