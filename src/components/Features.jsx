import React from "react";
import feature from "../assets/feature.png";
const Features = () => {
  return (
    <div className="" id="features">
      <h1 className=" text-center text-[36px] font-[700] text-white mt-24">
        Our <span className="txt">Features</span>
      </h1>
      <p className=" text-[#949494] text-[16px] font-normal text-center">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className=" flex flex-col md:flex-row items-center justify-between md:mx-32 mx-4 bg-[#0C0F16] rounded-3xl pt-20 mt-14">
        <div className=" md:w-[40%] flex flex-col gap-4 md:ml-14 ml-3">
          <h1 className=" text-[40px] max-w-[444px] font-[600] text-white">
            {" "}
            <span className=" txt">Search</span> and{" "}
            <span className=" txt">Pronunciation.</span>
          </h1>
          <p className=" text-[16px] font-normal text-[#ddd]">
            With our innovative search functionality, lawyers can effortlessly
            explore our extensive database of legal terms, concepts, and case
            law. Whether you're researching a specific topic or seeking
            clarification on a complex term, our intuitive search tool provides
            instant access to relevant information, ensuring that you find what
            you need quickly and efficiently.
          </p>
        </div>
        <img className=" md:pt-0 pt-9" src={feature} alt="" />
      </div>
    </div>
  );
};

export default Features;
