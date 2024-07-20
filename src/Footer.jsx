import React from "react";
import Design from "./assets/Design.svg";
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-white Footer w-full min-h-fit p-5 gap-4 flex flex-col md:items-center  ">
      <div id="Contact" className="relative Div1 h-28 w-96 ">
        <h1 className="absolute  text-[60px] font-semibold z-[1] ">Contact</h1>
        <img
          className=" absolute  w-40 right-28 bottom-6  "
          src={Design}
          alt=""
        />
      </div>
      <div className="Info-Div h-[350px] w-[80%] lg:w-[800px] gap-3 flex flex-col  md:pl-[166px] lg:pl-52 ">
        <div className="md:w-[375px]" >
        <h1 className=" custom-text2 font-semibold text-[50px] ">Let's Talk</h1>
            </div>
            <p>I am a dedicated Frontend Developer and I am excited to bring my skills and project experience to new and challenging opportunities. Please feel free to contact me to discuss potential collaborations and projects.</p>
        <ul>
        <li className="flex h-10 w-96 m-2 items-center md:text-xl  gap-5">
          <IoIosMail className="h-7 w-7" /> darshandugad111@gmail.com
        </li>
        <li className="flex h-10 w-96 m-2 items-center md:text-xl  gap-5">
          <BiSolidPhoneCall className="h-7 w-7" />
          8806571568
        </li>
        <li className="flex h-10 w-96 m-2 items-center md:text-xl  gap-5">
          <FaLocationDot className="h-7 w-7" />
          Pune,India
        </li>
        </ul>
      </div>
      <p className="reserve-text flex md:w-full justify-center p-5 border-t-2 border-white " >
      © 2024 Darshan Dugad. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
