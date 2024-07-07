import html from "../assets/Skills/html.png";
import css from "../assets/Skills/css.png";
import js from "../assets/Skills/js.png";
import react from "../assets/Skills/rreact.png";
import tailwind from "../assets/Skills/tailwind.png";
import express from "../assets/Skills/expresss.png";
import node from "../assets/Skills/node.png";
import mongo from "../assets/Skills/mongo.png";
import next from "../assets/Skills/next.png";
import jwt from "../assets/Skills/jet.png";
import SubHeading from "./SmallComponents/SubHeading";

const TechnicalSkills = () => {
  return (
    <div className="max-w-[1480px] relative z-20 pt-4 font-inter  mx-auto w-[92%] mt-8 pb-40">
      <div className="shape"></div>
      <SubHeading title="My Speciality"></SubHeading>
      <h2 className="text-center text-white text-4xl z-50  font-inter font-semibold mt-4">
        My Technical Skills
      </h2>

      {/* all skills */}
      <div className="inline-flex justify-center items-center flex-wrap mt-16 gap-3  ">
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500 object-contain"
              src={html}
              alt=""
            />
            <div>
              <p className="text-gray-50">Expert</p>
              <h6 className="font-semibold text-white text-lg">HTML</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500  object-contain"
              src={css}
              alt=""
            />
            <div>
              <p className="text-gray-50">Expert</p>
              <h6 className="font-semibold text-white text-lg">CSS</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img className="w-10 duration-500 object-contain" src={js} alt="" />
            <div>
              <p className="text-gray-50">Expert</p>
              <h6 className="font-semibold text-white text-lg">Javascript</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500 object-contain"
              src={tailwind}
              alt=""
            />
            <div>
              <p className="text-gray-50">Expert</p>
              <h6 className="font-semibold text-white text-lg">Tailwind</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500 object-contain"
              src={react}
              alt=""
            />
            <div>
              <p className="text-gray-50">Intermediate</p>
              <h6 className="font-semibold text-white text-lg">React</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500 object-contain"
              src={next}
              alt=""
            />
            <div>
              <p className="text-gray-50">Beginner</p>
              <h6 className="font-semibold text-white text-lg">Next JS</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500 object-contain"
              src={mongo}
              alt=""
            />
            <div>
              <p className="text-gray-50">Beginner</p>
              <h6 className="font-semibold text-white text-lg">MongoDB</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 duration-500 object-contain"
              src={node}
              alt=""
            />
            <div>
              <p className="text-gray-50">Beginner</p>
              <h6 className="font-semibold text-white text-lg">Node JS</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 object-contain duration-500 "
              src={express}
              alt=""
            />
            <div>
              <p className="text-gray-50">Beginner</p>
              <h6 className="font-semibold text-white text-lg">ExpressJs</h6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b gap-4 p-4 px-8 justify-between rounded-xl from-[#ffffff0d] to-[#ffffff00] hover:shadow-[#2a1454] shadow-black/20 hover: border shadow-2xl border-white/20 inline-flex flashEffect relative overflow-hidden ">
            <img
              className="w-10 object-contain duration-500 "
              src={jwt}
              alt=""
            />
            <div>
              <p className="text-gray-50">Beginner</p>
              <h6 className="font-semibold text-white text-lg">JWT</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
