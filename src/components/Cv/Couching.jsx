import React from "react";

const Coaching = () => {
  return (
    <div className=" md:w-[75%] w-[97%] mx-auto mt-12 ">
      <h2 className="text-lg md:text-[24px] font-[700] text-white">
        Demonstrate Your Educational And Professional Experiences With The Following Action Verbs
      </h2>

      <h3 className="text-lg md:text-[24px] font-[700]   text-white mt-10">COACHING AND TEACHING</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm md:text-base mt-10">
        {[
          "Instructed",
          "Trained",
          "Coached",
          "Educated",
          "Helped",
          "Supported",
          "Fostered",
          "Evaluated",
          "Challenged",
          "Modeled",
          "Tutored",
          "Collaborated",
          "Explained",
          "Mentored",
          "Empowered",
          "Cultivated",
          "Designed",
          "Monitored",
          "Participated",
          "Advised",
          "Consulted",
          "Facilitated",
          "Developed",
          "Inspired",
          "Prepared",
          "Organized",
          "Taught",
          "Clarified",
          "Counseled",
          "Guided",
          "Motivated",
          "Led",
          "Incorporated",
          "Engaged",
        ].map((verb, index) => (
          <span key={index} className="text-[#8C8C8C] capitalize">
            {verb}
          </span>
        ))}
      </div>

      <p className="text-sm md:text-base text-[#8C8C8C] mt-6">
        <span className="font-bold text-white">Example:</span> Counseled 15 Undergraduate Law Students On Master's/LLM Scholarship Programs
      </p>
    </div>
  );
};

export default Coaching;
