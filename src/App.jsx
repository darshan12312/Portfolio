import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  const [roll, setroll] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setroll(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#161513] min-h-screen w-full font-outfit ">
      <div
        className={`loader h-[100%] w-full  bg-black z-50 fixed flex items-center justify-center ease-in duration-[0.8s]  ${
          roll ? "-top-[100%] " : " top-0"
        }  `}
      >
        <div className="textAni w-full text-[40px] md:text-[80px] text-white relative text-left ">
          <h1 className="animated-text absolute">LET'S ACHIEVE</h1>
          <h1 className="animated-text absolute">GREAT THINGS</h1>
          <h1 className="animated-text absolute">TOGETHER!</h1>
        </div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
