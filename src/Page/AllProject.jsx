import { useEffect, useState } from 'react';
import line from '../assets/line.png';
import Project from '../components/SmallComponents/Project';
import Navbar from '../components/Navbar';

const AllProject = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      fetch(`/project.json`)
      .then(res => res.json())
      .then(data => {
        setProjects(data)
      })
    }, [])

    return (
        <div className="overflow-hidden ">
      <Navbar></Navbar>

      
        <div className="bg-no-repeat" style={{ backgroundImage: `url(${line})` }}>
        <div
      className="max-w-[1480px] relative z-20 pt-4 font-inter  mx-auto w-[92%] mt-8 pb-40"
    >

      <h2 className="text-center text-white text-3xl md:text-4xl z-50  font-inter font-semibold mt-4">
        My All Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 mt-6 md:mt-16 lg:grid-cols-2">
        {
          projects.map((p, idx) => <Project key={idx} p={p}></Project>)
        }
     
 
      </div>

    </div>
      </div>
      </div>
    );
};

export default AllProject;