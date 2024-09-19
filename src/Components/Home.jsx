import React from "react";
import { FaHandshakeSimple } from "react-icons/fa6";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiArchiveBoxArrowDown,
  HiArrowLeftEndOnRectangle,
} from "react-icons/hi2";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Cartoon from "../Assets/cartfin.png";
import Cort from "../Assets/cortana.png";
import Contact from "./Contact";
const Home = () => {
  return (
    <div name="home" className="bg-[#0A192f]  w-full h-screen pt-8 ">
      <div className="max-w-[1000px]  mx-auto  flex flex-col  justify-center h-full ">
        <div className=" flex flex-row pt-6">
          <p className="text-lg text-[#6fc2b0] ">👋Hey there,</p>
          <p className="text-lg text-[#6fc2b0] ">my name is </p>
        </div>
        <h1 className="text-4xl font-bold text-[#DBDBDB] pl-2 pt-2">
          Abdul-Jalil{" "}
        </h1>
        <h2 className="text-3xl font-bold text-[#111111] pl-2 pt-2">
          I'm a Full-stack Developer
        </h2>
        <h2 className="text-3xl font-bold text-[#111111] pl-2 ">
          and a CyberSecurity Analyst.
        </h2>

        <p className="text-lg text-[#6fc2b0] pl-2 hidden sm:flex   items-center">
          A full-stack developer with a passion for security. <br />I am
          Proficient in a list of programming languages and frameworks. <br />
          Experienced in building robust and scalable applications <br />
          while prioritizing data protection and privacy. <br />I am also
          committed to delivering secure solutions <br />
          that meet both functional and security requirements. <br />
          🫴Let's collaborate on your next project! 🤜🤛
          <div className="pl-8 sm: flex flex-col">
            <div class="border-2 border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto animate-bounce  ">
              <div class="animate-pulse flex space-x-4">
                <img
                  src={Cartoon}
                  alt="cartoon jalil"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
        </p>

        <div className="pt-4 pl-3">
          <button className="group  text-lg font-bold text-gray-300 border-2  flex items-center px-4 py-2 hover:bg-black hover:border-black rounded-md">
            {" "}
            <li className="shadow :md shadow-[#000000] hover:scale-110 duration-500">
              <Link to="work" smooth={true} duration={500}>
                View Work
              </Link>
            </li>
            <span className="group-hover:rotate-90 duration-300">
              <div className="pl-2">
                <HiArrowNarrowRight />
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
