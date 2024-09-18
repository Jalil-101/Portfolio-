import React from "react";
import HTML from "../Assets/html.png";
import Css from "../Assets/css.png";
import Firebase from "../Assets/firebase.png";
import Github from "../Assets/github.png";
import Python from "../Assets/python.png";
import react from "../Assets/react.png";
import Javascript from "../Assets/javascript.png";
import C from "../Assets/c++.png";
const Skills = () => {
  return (
    <div name="skills" className=" bg-[#0A192f] text-gray-300 pb-10 w-full pt-10">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <p className="text-4xl font-bold inline  border border-b-4  border-black">
          Skills
        </p>
        <p className="py-4 text-lg font-serif">
          Here are some technologies and frameworks
          <br /> i have worked with{" "}
        </p>
        <div className="pt-2">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-8">
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={HTML} alt="Html Image" />
              <p className="my-2">HTML</p>
            </div>
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={Firebase} alt="Firebase Image" />
              <p className="my-2">FIREBASE</p>
            </div>{" "}
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={react} alt="React Image" />
              <p className="my-2">REACT</p>
            </div>{" "}
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={Github} alt=" Github Image" />
              <p className="my-2">GITHUB</p>
            </div>{" "}
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4 ">
              <img className="w-20 mx-auto " src={Css} alt="Css Image" />
              <p className="my-2">CSS</p>
            </div>{" "}
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={Python} alt="Python Image" />
              <p className="my-2">PYTHON</p>
            </div>{" "}
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={Javascript} alt="Javascript Image" />
              <p className="my-2">JAVASCRIPT</p>
            </div>{" "}
            <div className="shadow :md shadow-[#000000] hover:scale-110 duration-500 pt-4">
              <img className="w-20 mx-auto " src={C} alt="C++ Image" />
                          <p className="my-2">C++</p>
                          
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
