import React from "react";
import CvSectionImage from "../../assets/CvSectionImage.svg";
import { firstSection, secondSection, thirdSection } from "../../constant";
import Couching from '../Cv/Couching'
import Research from "./Research";
import Communication from "./Communication";
import Management from "./Management";
import Technical from "./Technical";
function CreateSucessFullCvs() {
  return (
    <div className=" mb-44">
      <div className="relative ">
        <img className=" w-[100%]" src={CvSectionImage} alt="" />
        <h1 className="absolute inset-0 flex justify-center items-center text-white md:text-4xl text-xl font-bold ">
          HOW TO CREATE SUCCESSFUL CVs
        </h1>
      </div>
      <div className=" md:max-w-[1150px] mx-2 md:mx-auto">
        <h1 className="text-white md:text-2xl text-[1.2rem] font-bold mt-10">
        INTRODUCTION TO CURRICULUM VITAE (CV)
        </h1>
        <p className="text-base text-[#8C8C8C] mt-10">
          {firstSection.firstParagraph}
        </p>
        <p className="text-base text-[#8C8C8C] mt-5">
          {firstSection.secondParagraph}
        </p>
        <ul
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
          className="text-base text-[#8C8C8C] mb-10"
        >
          {firstSection?.bullets?.map((points, index) => (
            <li key={index}>{points}</li>
          ))}
        </ul>

        <h1 className="text-white text-2xl font-bold mb-10">
          Checklist for Formatting Your CV
        </h1>
        {secondSection?.map((points, data) => (
          <>
            <h3 className="text-base text-white font-semibold mt-8 mb-5">
              {points?.title}
            </h3>
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="text-base text-[#8C8C8C]"
            >
              {points?.bullets?.map((points, index) => (
                <li key={index}>{points}</li>
              ))}
            </ul>
          </>
        ))}

        <h1 className="text-white text-2xl font-bold mt-10 mb-4">
          TAILORING YOUR CV ACCORDING TO POSITION AND AUDIENCE
        </h1>

        <ul
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
          className="text-base text-[#8C8C8C]"
        >
          {thirdSection?.map((points, index) => (
            <li className="mb-5" key={index}>
              {points}
            </li>
          ))}
        </ul>
      </div>
      <Couching />
      <Research />
      <Communication />
      <Management />
      <Technical />
    </div>
  );
}

export default CreateSucessFullCvs;
