import React from "react";
import Profile from "./assets/Profile.png";
import Html from "./assets/Html.png";
import Css from "./assets/Css.png";
import Js from "./assets/Js.png";
import ReactI from "./assets/React.png";
import Tailwind from "./assets/Tailwind.png";

function About() {
  return (
    <div id="about" className="About min-h-fit p-5 w-full  ">
      <div className="heading  flex items-center md:justify-center  h-[100px] w-full mt-16">
        <h1 className=" text-left bg-design-pattern bg-right-bottom bg-no-repeat bg-65% w-80 text-white text-[60px] font-semibold ">
          About Me
        </h1>
      </div>
      <div className="About-skills w-full flex mt-10  ">
        <div className="Img-Div  w-[700px] h-full md:pl-2 md:pt-4 lg:pl-20 flex justify-center  ">
          <img
            className=" h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] "
            src={Profile}
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-[1000px] md:p-[30px] h-full text-white ">
          <div className="text flex gap-7 flex-wrap">
            <p className=" text-xl ">
              I am a passionate and skilled Frontend Developer proficient in
              React.js, Tailwind CSS, CSS, and HTML. Throughout my academic
              journey and project experience, I have successfully developed
              dynamic and engaging web applications, significantly enhancing
              user experiences and driving engagement.
            </p>

            <p className=" text-lg ">
              My dedication to frontend development is reflected in my
              continuous learning and commitment to delivering high-quality
              projects.
            </p>
          </div>
          <div className="skill flex flex-wrap mt-10 gap-5 justify-around">
            <img
              className="Technology hover:opacity-5 ease-in-out duration-300 hover:cursor-pointer h-24 w-24 "
              src={Html}
              alt=""
            />
            <img
              className="Technology hover:opacity-5 ease-in-out duration-300 hover:cursor-pointer h-24 w-24 "
              src={Css}
              alt=""
            />
            <img
              className="Technology hover:opacity-5 ease-in-out duration-300 hover:cursor-pointer h-24 w-24 "
              src={Js}
              alt=""
            />
            <img
              className="Technology hover:opacity-5 ease-in-out duration-300 hover:cursor-pointer h-24 w-24 "
              src={ReactI}
              alt=""
            />
            <img
              className="Technology hover:opacity-5 ease-in-out duration-300 hover:cursor-pointer h-24 w-24 "
              src={Tailwind}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Headings-3 w-full h-48 flex  justify-evenly items-center">
        <div className="Text text-center p-4 hover:scale-110 ease-in duration-300">
          <h1 className=" custom-text text-[45px] font-semibold " >150+</h1>
          <span className=" text-white text-xl  leading-none  " >Hours of Frontend Development</span>
        </div>
        <div className="seprator h-20 text-white w-[1px] bg-white "></div>
        <div className="Text text-center p-4 hover:scale-110 ease-in duration-300 ">
          <h1 className=" custom-text text-[45px] font-semibold " >Real</h1>
          <span className=" text-white text-xl  leading-none  " >World Projects</span>
        </div>
        <div className="seprator h-20 text-white w-[1px] bg-white "></div>
        <div className="Text text-center p-4 hover:scale-110 ease-in duration-300 ">
          <h1 className=" custom-text text-[45px] font-semibold " >4</h1>
          <span className=" text-white text-xl  " >Semesters with a CGPA of 8</span>
        </div>
      </div>
    </div>
  );
}

export default About;
