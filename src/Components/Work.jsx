import React from "react";
import Ecom from "../Assets/Ecommerce.jpg";
import Health from "../Assets/health.png";
import Estate from "../Assets/realestate.png";
const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 "
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-8">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text- text-gray-300  border-black ">
              Work
            </p>
            <p className="py-4 text-lg font-serif">
              Here are some of my most recent <br />
              works and projects
            </p>
          </div>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Estate})` }}
            className="shadow :lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider hover:scale-110">
                Real-Estate Web Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Health})` }}
            className="shadow :lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Medical App Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Ecom})` }}
            className="shadow :lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-commerce App Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Health})` }}
            className="shadow :lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Medical App Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Ecom})` }}
            className="shadow :lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-commerce App Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Estate})` }}
            className="shadow :lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider hover:scale-110">
                Real-Estate Web Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
