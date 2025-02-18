import React from "react";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
const Features = () => {
  return (
    <div className="bg-[#151A25] py-24" id="features">
      <h1 className=" text-center text-[36px] font-[700] text-white ">
        Our <span className="txt">Features</span>
      </h1>
      <p className=" text-[#949494] text-[16px] font-normal text-center">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
       <div className=" flex flex-col gap-5 md:flex-row items-center md:justify-between justify-center  mx-20 mt-12">
        <div className=" flex flex-col items-center md:gap-3">
          <img className=" w-[400px] md:w-full" src={feature1} alt="" />
          <h1 className=" text-[22px] font-[600] text-white md:max-w-[255px] text-center">Understanding Legal Concepts</h1>
        </div>
        <div className=" flex flex-col items-center md:gap-3">
          <img className=" w-[400px] md:w-full" src={feature2} alt="" />
          <h1 className=" text-[22px] font-[600] text-white md:max-w-[255px] text-center">Personalised Statutes & Acts</h1>
        </div>
        <div className=" flex flex-col items-center md:gap-3">
          <img className=" w-[400px] md:w-full" src={feature3} alt="" />
          <h1 className=" text-[22px] font-[600] text-white md:max-w-[255px] text-center">Understanding Legal Vocabulary</h1>
        </div>
        <div className=" flex flex-col items-center md:gap-3">
          <img className=" w-[400px] md:w-full" src={feature4} alt="" />
          <h1 className=" text-[22px] font-[600] text-white md:max-w-[255px] text-center">Equip Yourself with Law Courses</h1>
        </div>
       </div>
    </div>
  );
};

export default Features;
