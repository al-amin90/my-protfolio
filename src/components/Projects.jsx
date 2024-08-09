
import { useNavigate } from "react-router-dom";
import Project from "./SmallComponents/Project";
import SubHeading from "./SmallComponents/SubHeading";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

useEffect(() => {
  fetch(`/project.json`)
  .then(res => res.json())
  .then(data => {
    setProjects(data)
  })
}, [])

  return (
    <div
      id="projects"
      className="max-w-[1480px] relative z-20 pt-4 font-inter  mx-auto w-[92%] mt-8 pb-40"
    >
      <SubHeading title="Expert "></SubHeading>
      <h2 className="text-center text-white text-3xl md:text-4xl z-50  font-inter font-semibold mt-4">
        My Recent Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 mt-6 md:mt-16 lg:grid-cols-2">
        {
          projects.slice(0,4).map((p, idx) => <Project key={idx} p={p}></Project>)
        }
     
 
      </div>

      <div className="flex items-center justify-center mt-8">
        <div
        onClick={() => navigate('/allProjects')}
          className="  p-[5px] border flex w-fit  border-white/5 rounded-[10px] cursor-pointer btnBackground relative "
        >
          <span  className="bg-gradient-to-r text-white font-inter from-[#6431FE] to-[#B696FF] px-9 py-3 rounded-[10px] w-fit gap-2 items-center inline-flex flashEffect relative overflow-hidden">
            <span >See All 55+</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
