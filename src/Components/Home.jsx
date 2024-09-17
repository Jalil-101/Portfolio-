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
const Home = () => {
  return (
    <div name="home" className="bg-[#0A192f]  w-full h-screen ">
      <div className="max-w-[1000px]  mx-auto  flex flex-col  justify-center h-full ">
        <div className=" flex flex-row">
          <p className="text-lg text-[#6fc2b0] ">👋Hey there,</p>
          <p className="text-lg text-[#6fc2b0] ">my name is </p>
        </div>
        <h1 className="text-4xl font-bold text-[#DBDBDB] pl-2">Abdul-Jalil </h1>
        <h2 className="text-3xl font-bold text-[#111111] pl-2">
          I'm a Full-stack Developer
        </h2>
        <h2 className="text-3xl font-bold text-[#111111] pl-2">
          and a CyberSecurity Analyst.
        </h2>

        <p className="text-lg text-[#6fc2b0] pl-2 hidden sm:flex ">
          A full-stack developer with a passion for security. <br />I am
          Proficient in a list of programming languages and frameworks. <br />
          Experienced in building robust and scalable applications <br />
          while prioritizing data protection and privacy. <br />I am also
          committed to delivering secure solutions <br />
          that meet both functional and security requirements. <br />
          🫴Let's collaborate on your next project! 🤜🤛
        </p>
      </div>
    </div>
  );
};
export default Home;
