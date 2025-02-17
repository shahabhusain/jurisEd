import React from "react";

const Research = () => {
  return (
    <div className=" md:w-[75%] w-[97%] mx-auto mt-12 ">

      <h3 className="text-lg md:text-[24px] font-[700]   text-white mt-10">RESEARCH AND THESIS WORK /ANALYTICAL</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm md:text-base mt-10">
        {[
          "Calculated	",
          "Observed",
          "Researched",
          "surveyed",
          "found",
          "scrutinized",
          "critiqued",
          "examined",
          "determined",
          "synthesized",
          "predicted",
          "reviewed",
          "verified",
          "inspected",
          "tracked",
          "defined",
          "explored",
          "discovered",
          "located",
          "rated",
          "searched",
          "diagnosed",
          "assessed",
          "derived",
          "tested",
          "evaluated",
          "measured",
          "recommended",
          "studied",
          "quantified",
          "investigated",
          "compared",
          "detected",
          "validated",
        ].map((verb, index) => (
          <span key={index} className="text-[#8C8C8C] capitalize">
            {verb}
          </span>
        ))}
      </div>

      <p className="text-sm md:text-base text-[#8C8C8C] mt-6">
        <span className="font-bold text-white ">Example:</span> surveyed 40 under-trial prisoners to assess their challenges in accessing legal aid, contributing to recommendations for improved legal support mechanisms.
      </p>
    </div>
  );
};

export default Research;
