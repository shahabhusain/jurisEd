import React from "react";

const Communication = () => {
  return (
    <div className=" md:w-[75%] w-[97%] mx-auto mt-12 ">

      <h3 className="text-lg md:text-[24px] font-[700]   text-white mt-10">Communication Skills</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm md:text-base mt-10">
        {[
          "engaged",
          "collaborated",
          "conducted",
          "delivered",
          "consulted",
          "interviewed",
          "lectured",
          "persuaded",
          "publicized",
          "suggested",
          "proposed",
          "responded	",
          "interpreted ",
          "translated ",
          "addressed",
          "facilitated",
          "contacted",
          "moderated",
          "demonstrated",
          "explained",
          "mediated",
          "presented",
          "reported",
          "translated",
          "publicized",
          "suggested",
          "marketed",
          "outlined",
          "arbitrated",
          "briefed",
          "illustrated",
          "conveyed",
          "edited",
          "represented",
          "influenced","negotiated","promoted","wrote","reported","translated","responded","summarized","articulated","communicated","corresponded","clarified","entertained","informed","liaised","proposed","responded","advocated", "represented","wrote","suggested",
        ].map((verb, index) => (
          <span key={index} className="text-[#8C8C8C] capitalize">
            {verb}
          </span>
        ))}
      </div>

      <p className="text-sm md:text-base text-[#8C8C8C] mt-6">
        <span className="font-bold text-white">Example:</span> Negotiated favorable terms in contract, ensuring alignment with organizational goals and regulatory compliance.

      </p>
    </div>
  );
};

export default Communication;
