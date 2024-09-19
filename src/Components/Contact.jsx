import React from 'react'

const Contact = () => {
    return (
     
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
      >
        <form
          method="POST"
          action="https://getform.io/f/anlemexa"
          className="flex  flex-col max-w-[600] w-full"
        >
          <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
            {" "}
            <div className="pt-24 ">
              <p className="text-4xl font-bold inline border-b-4 text- text-gray-300  border-black ">
                Contact
              </p>
              <p className="py-4 text-lg font-serif text-gray-300 ">
                Submit the form below 👇
                <br />
                Or send me an Email 🫴 abdulmahama30@gmail.com
              </p>
            </div>
            <div className="py-2">
              <input
                className="bg-[#ccd6f6] p-2  lg:w-2/4  sm: w-3/4 rounded-md "
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="py-2">
              <input
                className="bg-[#ccd6f6] p-2  lg:w-2/4  sm: w-3/4 rounded-md"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="py-2">
              <textarea
                className="bg-[#ccd6f6] p-2 lg:w-2/4 sm: w-3/4 rounded-md "
                type="message"
                placeholder="Message"
                name="message"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="">
            <button className="text-white border-2 rounded-md hover:bg-black hover:border-black px-4 py-2 my-4 mx-auto flex items-center ">
              Click To Submit
            </button>
           
          </div>
        </form>
      </div>
    );
}

export default Contact