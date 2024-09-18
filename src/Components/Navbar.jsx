import React from "react";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMail, HiOutLineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../Assets/Ajt.png";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const clickhandle = () => setNav(!nav);
  
  return (
    
      <div className=" fixed w-full h-[100px]  flex justify-between items-center px-4  bg-[#0A192f] text-gray-300 pb-10">
        <div>
          <img
            src={Logo}
            alt="Logo Image"
            style={{ width: "190px", height: "140px" }}
          />
        </div>

        {/* Menu Section */}

        {/* <div onClick={clickhandle} className="md :hidden z-0">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

        <ul className=" hidden  md:flex  pr-4 text-xl">
          <li>Home </li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        {/* Menu Icon */}
        <div onClick={clickhandle} className=" sm:hidden">
          <FaBars size={30} />
        </div>
        {/* <div onClick={clickhandle} className="md :hidden z-0">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

        {/* Mobile Menu */}

        <ul
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
        </ul>

        {/* Social Icons */}
        {/* <div className="flex-col top-[30%]"> */}
        <div className="hidden lg:flex fixed flex-col top-[30%] left-[-7%]">
          <ul>
            <li className="w-[150px] h-[60px] flex justify-between items-center mg-[-100px] hover:ml-[90px] duration-300 bg-blue-600 ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                LinkedIn
                <FaLinkedin size={30} />
              </a>
            </li>

            <li className="w-[150px] h-[60px] flex justify-between items-center mg-[-100px] hover:ml-[90px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Mail <HiMail size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[60px] flex justify-between items-center mg-[-100px] hover:ml-[90px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Github
                <FaGithub size={30} />
              </a>
            </li>

            <li className="w-[150px] h-[60px] flex justify-between items-center mg-[-100px] hover:ml-[90px] duration-300 bg-[#F70101] ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    
  );
};

export default Navbar;
