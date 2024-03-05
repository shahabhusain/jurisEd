import React from "react";
import feature from "../assets/scholarship.png";
const Scholarship = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row items-center justify-between md:mx-32 mx-4 bg-[#0C0F16] rounded-3xl pt-20 mt-32">
        <div className=" md:w-[40%] flex flex-col gap-4 md:ml-14 ml-3">
          <h1 className=" text-[40px] flex-col flex  font-[600] text-white">
          Scholarship
             <span className=" txt">Opportunities <span className="">for</span></span> {" "}
            <span className=" txt">Students</span>
          </h1>
          <p className=" text-[16px] font-normal text-[#ddd] md:mr-0 mr-3">
          At Juris Ad, we believe in empowering the next generation of legal professionals, which is why we are pleased to offer scholarship opportunities for aspiring law students. Our scholarships are designed to recognize academic excellence, leadership potential, and a commitment to making a positive impact in the field of law.
          </p>
        </div>
        <img className=" md:pt-0 pt-9" src={feature} alt="" />
      </div>
    </div>
  );
};

export default Scholarship;
