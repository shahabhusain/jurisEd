import React from "react";
import logo from "../assets/logo.svg";
import btn1 from "../assets/btn1.svg";
import btn2 from "../assets/btn2.svg";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div
      id="hero"
      className=" flex flex-col md:flex-row items-center justify-between md:mx-24 mx-4 md:mt-24 mt-12"
    >
      <div className=" flex flex-col gap-4 md:w-[50%]">
        <img
          className=" md:w-[255px] sm:w-[200px] w-[180px]"
          src={logo}
          alt=""
        />
        <h1 className=" md:text-[40px] sm:text-[30px] text-[25px] text-white font-bold">
          Mobile App
        </h1>
        <p className=" md:text-[16px] text-[13px] text-[#DDD] font-[400] max-w-[525px]">
          Welcome to Juris Ad – your ultimate destination designed exclusively
          for legal professionals aiming to refine their skills and enrich their
          legal lexicon.
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
  );
};

export default Hero;
