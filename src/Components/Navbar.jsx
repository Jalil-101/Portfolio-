import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Assets/Ajt.png";

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const clickhandle = () => setNav(!nav);
  return (
    <div className=" fixed w-full h-[80px]  flex justify-between items-center px-4  bg-[#0A192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* Menu Section */}

      {/* <div onClick={clickhandle} className="md :hidden z-0">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      <ul className=" hidden  md:flex  pr-4 text-2xl">
        <li>Home </li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Menu Icon */}
      {/* <div onClick={clickhandle} className="md :hidden z-0">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      {/* Mobile Menu */}

      {/* <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home </li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul> */}

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
