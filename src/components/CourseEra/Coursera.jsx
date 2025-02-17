import React, { useState } from "react";
import Image from "../../assets/CvSectionImage.svg";
import VisitIcon from "../../assets/visitIcon.svg";
import CourserImag1 from "../../assets/CourseraImage1.svg";
import CourserImage2 from "../../assets/CourseraImage2.svg";
import CourserImage3 from "../../assets/CourserImage3.svg";
import CourserImage4 from "../../assets/CourserImage4.svg";
import CourserImage5 from "../../assets/CourserImage5.svg";
import CourserImage6 from "../../assets/CourserImage6.svg";

function Coursera() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" mx-2 my-12">
      <div className=" relative">
        <img className=" w-[100%]" src={Image} alt="" />
        <div className=" absolute flex justify-center items-center flex-col  inset-0 ">
          <h1 className="  text-white md:text-4xl text-2xl font-bold ">Coursera</h1>
          <p className="text-white text-base md:text-[15px] text-[12px]">Financial Aid</p>
        </div>
      </div>
      <div className=" max-w-[1100px] mx-auto">
        <h1 className="text-white text-2xl font-bold mt-10">
          INTRODUCTION TO CURRICULUMVITAE(CV)
        </h1>
        <p className="text-base text-[#8C8C8C] mt-10">
          Coursera is an online learning platform that offers a wide range of
          courses and educational programs from leading universities and
          institutions around the world. It provides opportunities for
          individuals to learn new skills, advance their careers, and pursue
          personal interests through flexible and accessible online courses.
        </p>
        <p className="text-base text-[#8C8C8C]">
          Coursera is a top choice for online education, however, certification
          costs can be high. Coursera provides a "Financial Aid Application" to
          make certifications more affordable for learners.
        </p>

        <h3 className="text-base text-white font-semibold mt-8 mb-5">
          Course Selection on Coursera.org.
        </h3>
        <p className="text-base text-[#8C8C8C]">
          Before staring, choose the course that you want to pursue in order to
          move forward with your financial aid application.
        </p>
        <div className="flex items-center mt-7 mb-3">
          <p className="text-xs text-[#B7700A] mr-2">Click here</p>
          <img src={VisitIcon} alt="" />
        </div>

        <h1 className="text-white text-[32px] font-semibold text-center mb-6">
          Let’s Get Started!
        </h1>
        <p className="text-xl text-center text-white mb-4">
          Open your selected course’s description page on Coursera.org and click
          on Financial aid available.
        </p>

        <img src={CourserImag1} alt="" />
        <p className="text-2xl text-[#D1D1D1] text-center font-light my-6">
          Next click on the Continue to the application on the application
          popup.
        </p>
        <img src={CourserImage2} alt="" />
        <h3 className="text-base text-white font-semibold mt-6 mb-3">
          Application Guide
        </h3>
        <p className="text-base font-light text-[#8C8C8C] ">
          Coursera's financial aid process assists learners facing financial
          constraints. Accuracy and authenticity are emphasized throughout the
          process to ensure the integrity of the application process.{" "}
        </p>
        <p className="text-base font-light text-[#8C8C8C] mb-4">
          Coursera reviews submissions and may request further details. Approved
          applicants receive aid to access courses and certifications. The
          application review process can take up to 16 days.
        </p>
        <h3 className="text-base text-white font-semibold mb-3">
          Step-by-Step Guide
        </h3>
        <p className="text-base font-light text-[#8C8C8C]">
          Coursera's financial aid process assists learners facing financial
          constraints. Accuracy and authenticity are emphasized throughout the
          process to ensure the integrity of the application process.{" "}
        </p>
        <p className="text-base font-light text-[#8C8C8C] mb-4">
          The financial aid application process on Coursera comprises mainly of
          two steps in which they answer a series of questions regarding their
          financial status, educational background, and reasons for seeking aid.{" "}
        </p>
        <h3 className="text-base text-white font-semibold mt-6">
          Step 1: Application Questionnaire 1
        </h3>
        <p className="text-sm font-light text-[#8C8C8C] mb-4">
          Once you “click” on continue to the application the financial aid
          application starts. In the Step 1 you get the first Application
          Questionnaire that you need to fill accurately and authentically.
        </p>
        <img src={CourserImage3} alt="" />
        <h3 className="text-base text-white font-semibold mt-6">
          Step 2: Application Questionnaire 2
        </h3>
        <p className="text-sm font-light text-[#8C8C8C] mb-4">
          In the Step 2 you get the second Application Questionnaire. Fill it
          accurately and authentically
        </p>
        <div className="flex mb-4 flex-col lg:flex-row">
          <img src={CourserImage4} alt="" />
          <img className=" mt-4 lg:ml-4 lg:mt-0" src={CourserImage5} alt="" />
        </div>
        <h3 className="text-base text-white font-semibold">Step 3: Submit</h3>
        <p className="text-sm font-light text-[#D1D1D1]">
          After successfully submitting your application you will receive an
          email stating the time for the review process.{" "}
        </p>
        <p className="text-sm font-light text-[#D1D1D1] mb-4">
          It normally takes upto 16 days for them to review your application and
          get back to you so you will have to be patient during this process.
        </p>
        <img src={CourserImage6} alt="" />
      </div>
    </div>
  );
}

export default Coursera;
