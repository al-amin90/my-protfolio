import nova from "../assets/Project/novaNewsT.png";
import nounet from "../assets/Project/neutoriasT.png";
import journy from "../assets/Project/journyT.png";
import SubHeading from "./SmallComponents/SubHeading";
import { FiMonitor } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { TbSquareRotatedFilled } from "react-icons/tb";

const Projects = () => {
  return (
    <div className="max-w-[1480px] relative z-20 pt-4 font-inter  mx-auto w-[92%] mt-8 pb-40">
      <SubHeading title="Speciality"></SubHeading>
      <h2 className="text-center text-white text-4xl z-50  font-inter font-semibold mt-4">
        My Recent Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 mt-16 lg:grid-cols-2">
        <div className="group relative">
          <img src={nova} className="rounded-xl" alt="" />

          <div class="absolute h-fit flex justify-between items-center bg-gradient-to-r p-5 from-[#8850f71c] to-[#2a145425] group-hover:opacity-100 transition-all -bottom-20 group-hover:bottom-5 backdrop-blur-xl rounded-2xl opacity-0 -left-5 duration-500 w-[550px]">
            <div class="max-w-[85%]">
              <h1 class="text-xl text-white font-semibold">
                Project Name: novaNews
              </h1>
              <p class="text-sm text-justify text-white mt-1 font-normal">
                In this website. Users can choose and buy a subscription for a
                set period, after which they revert to normal user status. All
                data is securely stored in MongoDB, dynamically filtered by
                publisher and tags.....
              </p>
              <div>
                <div class="flex text-white justify-between my-3">
                  <a
                    class="flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-700 flashEffect relative overflow-hidden"
                    target="_blank"
                    href="https://nova-news-c2549.web.app/"
                  >
                    Live View <FiMonitor />
                  </a>
                  <a
                    class="flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-700 flashEffect relative overflow-hidden"
                    target="_blank"
                    href="https://github.com/al-amin90/nova-news-client"
                  >
                    GitHub Link
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <TbSquareRotatedFilled className="text-5xl  text-[#6431FE] animate-spin" />
            </div>
          </div>
        </div>
        <div className="group relative">
          <img src={nounet} className="rounded-xl" alt="" />

          <div class="absolute h-fit flex justify-between items-center bg-gradient-to-r p-5 from-[#8850f71c] to-[#2a145425] group-hover:opacity-100 transition-all -bottom-16 group-hover:bottom-5 backdrop-blur-2xl rounded-2xl opacity-0 -left-5 duration-500 w-[550px]">
            <div class="max-w-[85%]">
              <h1 class="text-xl text-white font-semibold">
                Project Name: NourishNet
              </h1>
              <p class="text-sm text-justify text-white mt-1 font-normal">
                This platform designed to connect communities with surplus food
                to those in need. Our mission is to reduce food waste while
                ensuring that everyone has access to nutritious meals. With
                NourishNet, individuals.....
              </p>
              <div>
                <div class="flex text-white justify-between my-3">
                  <a
                    class="flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-700 flashEffect relative overflow-hidden"
                    target="_blank"
                    href="https://nourish-net-9ac72.web.app/"
                  >
                    Live View <FiMonitor />
                  </a>
                  <a
                    class="flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-700 flashEffect relative overflow-hidden"
                    target="_blank"
                    href="https://github.com/al-amin90/nourish-net-client"
                  >
                    GitHub Link
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <TbSquareRotatedFilled className="text-5xl  text-[#6431FE] animate-spin" />
            </div>
          </div>
        </div>
        <div className="group relative">
          <img src={journy} className="rounded-xl" alt="" />

          <div class="absolute h-fit flex justify-between items-center bg-gradient-to-r p-5 from-[#8850f71c] to-[#2a145425] group-hover:opacity-100 transition-all -bottom-16 group-hover:bottom-5 backdrop-blur-2xl rounded-2xl opacity-0 -left-5 duration-500 w-[550px] ">
            <div class="max-w-[85%]">
              <h1 class="text-xl text-white font-semibold">
                Project Name: JourneyJoy
              </h1>
              <p class="text-sm text-justify text-white mt-1 font-normal">
                In this website, Click on a specific country to view all tourist
                spots in that region, as posted by users. Users can add, delete,
                and modify their favorite spots. The platform allows sorting by
                average cost and features a user-friendly UI/UX design......
              </p>
              <div>
                <div class="flex text-white justify-between my-3">
                  <a
                    class="flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-700 flashEffect relative overflow-hidden"
                    target="_blank"
                    href="https://journey-joy-client.web.app/"
                  >
                    Live View <FiMonitor />
                  </a>
                  <a
                    class="flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-700 flashEffect relative overflow-hidden"
                    target="_blank"
                    href="https://github.com/al-amin90/journey-joy-client"
                  >
                    GitHub Link
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <TbSquareRotatedFilled className="text-5xl  text-[#835bfc] animate-spin" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <a
          download
          href="/src/assets/Front end Developer Al Amin- Resume.pdf .pdf"
          className="  p-[5px] border flex w-fit  border-white/5 rounded-[10px] cursor-pointer btnBackground relative "
        >
          <span className="bg-gradient-to-r text-white font-inter from-[#6431FE] to-[#B696FF] px-9 py-3 rounded-[10px] w-fit gap-2 items-center inline-flex flashEffect relative overflow-hidden">
            <span>See All 50+</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
