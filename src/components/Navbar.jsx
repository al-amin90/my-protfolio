import logo from "/logo.png";

const Navbar = () => {
  const navLinks = (
    <div className="flex text-primaryColor font-medium gap-6 text-gray-500 text-base *:cursor-pointer ">
      <li className="text-white ">Home</li>
      <li className="hover:text-white ">
        <a href="#skills" className="p-0">
          Skills
        </a>
      </li>
      <li className="hover:text-white ">
        {" "}
        <a href="#projects" className="p-0">
          Projects
        </a>
      </li>
      <li className="hover:text-white ">
        <a href="#education" className="p-0">
          Education
        </a>
      </li>
      <li className="hover:text-white ">
        <a href="#contact" className="p-0">
          Contact
        </a>
      </li>
    </div>
  );

  return (
    <div className=" ">
      <div className="navbar relative z-30 max-w-[1480px] pt-4 font-inter mx-auto w-[95%]">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img className="rounded-full w-12 h-12" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://www.linkedin.com/in/al-amin-parvaz1"
            target="_blank"
            className=" p-1 border border-white/5 rounded-[10px] cursor-pointer btnBackground relative inline-flex"
          >
            <span className="bg-gradient-to-r text-white font-semibold from-[#6431FE] to-[#B696FF] transition-all duration-300 px-6 py-2 rounded-[10px] flashEffect relative overflow-hidden">
              Hire Me
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
