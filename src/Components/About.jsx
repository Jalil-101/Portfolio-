import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <div className="flex items-center  justify-center">
              <p className="text-4xl font-bold inline border-b-4 border-black">
                About
              </p>
              <div className="pl-4">
                <FaCircleInfo  size={30 }/>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              👋Hi. I'm Jalil, It's a pleasure to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="">
              As a graduate of PRESEC Legon, I'm currently pursuing a BSc
              in Computer Science at KNUST. With a strong foundation in web and
              mobile app development, and a professional degree in Cyber
              Security from IPMC, I'm eager to contribute my skills to
              cutting-edge projects. Based in Accra, I'm passionate about
              software development and seek opportunities to collaborate with
              industry leaders to expand my knowledge on emerging
              technologies.What would you do if you had a software expert
              available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>

   
  );
};

export default About;
