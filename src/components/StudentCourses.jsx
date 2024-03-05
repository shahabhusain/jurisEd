import React from "react";
import course from "../assets/courses.png";
const StudentCourses = () => {
  return (
    <div>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between md:mx-32 mx-4 bg-[#0C0F16] rounded-3xl pt-20 mt-32">
      <img className=" md:pt-0 pt-9 md:w-[40%]" src={course} alt="" />
        <div className=" md:w-[40%] flex flex-col gap-4 md:mr-12 ml-3 ">
          <h1 className=" md:text-[40px] text-[30px] font-[600] text-white flex flex-col">
         
            <span className=" txt ">Law Student Courses:</span>
            <span>Empowering Your Legal Journey</span>
          </h1>
          <p className=" md:text-[16px] text-[13px] font-normal text-[#ddd] md:mr-0 mr-3">
            With our innovative search functionality, lawyers can effortlessly
            explore our extensive database of legal terms, concepts, and case
            law. Whether you're researching a specific topic or seeking
            clarification on a complex term, our intuitive search tool provides
            instant access to relevant information, ensuring that you find what
            you need quickly and efficiently.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default StudentCourses;
