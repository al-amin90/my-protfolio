import banner from "../assets/banner.png";
import { LuDownload } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="max-w-[1480px] pt-4 font-inter mx-auto w-[92%] mt-10 pb-40">
      <div className="shape right"></div>
      <div className="flex text-white">
        {/* left side */}
        <div className="flex-1 ">
          <div className="text-xl font-medium space-y-2">
            <h6>Hello,</h6>
            <h6>I am Al Amin Parvaz</h6>
          </div>
          <h1 className="text-5xl font-bold mt-4">
            A{" "}
            <span className="bg-gradient-to-r from-[#6431FE] to-[#B696FF] inline-block text-transparent bg-clip-text">
              Full Stact Developer_
            </span>
          </h1>

          <p className="text-base text-gray-300 mt-4     mb-7 w-[90%]">
            I am a Dedicated Junior MERN Stack Developer Developer. My aim to
            contribute meaningfully to projects that challenge and inspire me,
            driving success for the company. My Experience in Graphic Design
            helps me make eye-catching and Dynamic websites. My Passionate for
            Software Development makes me grow quicker and more Proactive.
          </p>

          <a
            download
            href="/src/assets/Front end Developer Al Amin- Resume.pdf .pdf"
            className="  p-[5px] border flex w-fit  border-white/5 rounded-[10px] cursor-pointer btnBackground"
          >
            <span className="bg-gradient-to-r text-white font-inter from-[#6431FE] to-[#B696FF] hover:bg-gradient-to-l hover:from-[#8750f7] transition-all duration-300 hover:to-[#2a1454] px-9 py-3 rounded-[10px] w-fit gap-2 flex items-center">
              <span>Download Resume</span>
              <LuDownload></LuDownload>
            </span>
          </a>
        </div>

        {/* right side */}
        <div className="flex-1 ima relative ">
          <img
            className="rounded-[100px] ml-auto w-96 relative imageProfile z-20"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
