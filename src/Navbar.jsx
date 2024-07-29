import React, { useState } from "react";
import NameLogo from "./assets/Name Logo.png";
import Design from "./assets/Design.svg";
import { IoMdClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleToggle = (idf) => {
    setActiveLink(activeLink === idf ? null : idf);
    if (idf) {
      let element = document.getElementById(idf);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [Togglemenu, setTogglemenu] = useState(false);

  const Menuchange = () => {
    setTogglemenu(!Togglemenu);
  };

  return (
    <div className="h-24 Navbar z-20 overflow-hidden w-full flex  items-center justify-evenly">
      <div className="logo  ">
        <img src={NameLogo} className="h-14 w-48" alt="Logo" />
      </div>

      <BiMenuAltRight
        onClick={Menuchange}
        className="MenuIc hover:cursor-pointer text-white absolute right-3 top-3 h-8 w-8 md:hidden"
      />

      <div
        className={`NavMenu h-20 z-30  md:flex items-center ${
          Togglemenu ? "right-0" : "-right-[100%]"
        } ease-in duration-300 `}
      >
        <IoMdClose
          onClick={Menuchange}
          className="CloseIc text-white hover:cursor-pointer absolute right-3 top-3 h-14 w-12 md:hidden"
        />

        <div
          onClick={() => handleToggle("home")}
          className="text-white hover:text-[#ca527e] font-medium px-4 cursor-pointer items-center   "
        >
          Home
          <img
            className={`${activeLink === "home" ? "" : "hidden"} Design`}
            src={Design}
          />
        </div>

        <div
          onClick={() => handleToggle("about")}
          className="text-white font-medium px-4 cursor-pointer hover:text-[#ca527e] "
        >
          About Me
          <img
            className={`${
              activeLink === "about" ? "" : "hidden"
            }  Design`}
            src={Design}
          />
        </div>

        <div
          onClick={() => handleToggle("Project")}
          className="text-white font-medium px-4 cursor-pointer hover:text-[#ca527e] "
        >
          Projects
          <img
            className={`${
              activeLink === "Project" ? "" : "hidden"
            }  Design`}
            src={Design}
          />
        </div>

        <a href="https://www.linkedin.com/in/darshan-dugad/">
          <div
            onClick={() => handleToggle("portfolio")}
            className="text-white font-medium px-4 cursor-pointer hover:text-[#ca527e] "
          >
            Linkedin
            <img
              className={`${
                activeLink === "portfolio" ? "" : "hidden"
              } Design `}
              src={Design}
            />
          </div>
        </a>

        <a href="https://github.com/darshan12312">
          <div
            onClick={() => handleToggle("github")}
            className="text-white  font-medium px-4 cursor-pointer hover:text-[#ca527e] "
          >
            Github
            <img
              className={`${
                activeLink === "github" ? "" : "hidden"
              } Design `}
              src={Design}
            />
          </div>
        </a>
      </div>

      <button
        onClick={() => {
          handleToggle("Contact");
        }}
        className=" hover:scale-105 ease-in duration-200  text-white font-medium bg-custom-gradient h-12 w-44 rounded-3xl md:flex justify-center items-center"
      >
        Connect With Me
      </button>
    </div>
  );
};

export default Navbar;
