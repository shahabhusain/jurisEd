import React from "react";
import logo from "../../assets/logo.svg";
import btn1 from "../../assets/btn1.svg";
import btn2 from "../../assets/btn2.svg";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="">
      <div id="hero" className=" flex flex-col md:flex-row gap-12 items-center justify-between md:mx-20 mx-4 md:mt-20 mt-16 " >
      <div className=" flex flex-col gap-4 md:w-[50%] md:ml-6">
        <h1 className=" text-[65px] text-white font-bold">JurisEd</h1>
        <h1 className=" md:text-[40px] sm:text-[30px] text-[25px] text-white font-bold">
          Mobile App
        </h1>
        <p className=" md:text-[16px] text-[13px] text-[#DDD] font-[400] max-w-[525px]">
        Welcome to JurisEd – your ultimate destination designed exclusively for law students aiming to refine their skills and enrich their legal acumen.
        </p>
        <div className=" flex items-center gap-4">
          <a href="/">
            <img src={btn1} alt={btn1} />
          </a>
          <a href="/">
            <img src={btn2} alt={btn2} />
          </a>
        </div>
      </div>
      <img className=" md:w-[50%] md:mt-0 mt-5" src={hero} alt="" />
    </div>
    </div>
  );
};

export default Hero;
