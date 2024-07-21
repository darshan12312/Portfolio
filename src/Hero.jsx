import React from "react";
import Profile from "./assets/Profile.png";

const Hero = () => {
  return (
    <div id="home" className="Hero w-full pt-16 pb-2 flex gap-5 flex-col items-center  text-white ">
      
      <img
        className=" h-52 w-52  md:h-64 md:w-64 "
        src={Profile}
        alt=""
        srcset=""
      />

      <h1 className=" text-[65px]  w-[65%] text-center  text-white font-semibold ">
        <span className="custom-text">I'm Darshan Dugad,</span> frontend
        developer based in India.
      </h1>

      <p className=" text-[20px] w-[60%] text-center ">
      I'm a frontend developer from Pune, India, skilled in React.js and Tailwind CSS.
      </p>

      <div className="buttons">
        <a href="https://drive.google.com/file/d/1-qgQJ5Yeh9gqdJX3buhWymbCc_Zdp-Sx/view?usp=drive_link">
        <button className=" resume   text-white font-large ease-in hover:border-[#B71DEC] duration-200 border-white border-2 h-12 w-44 rounded-3xl relative z-10 overflow-hidden ">
          <span className="hover:text-white" >My Resume</span>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
