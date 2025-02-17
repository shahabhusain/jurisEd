import React from "react";

const Management = () => {
  return (
    <div className=" md:w-[75%] w-[97%] mx-auto mt-12 ">

      <h3 className="text-lg md:text-[24px] font-[700]   text-white mt-10">Management</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm md:text-base mt-10">
        {[
          "achieved	",
          "approved",
          "coordinated",
          "drafted",
          "enhanced",
          "handled",
          "increased",
          "organized",
          "administered",
          "chaired",
          "conducted",
          "directed",
          "executed",
          "hired",
          "inspected",
          "assigned",
          "contracted",
          "delegated",
          "eliminated",
          "established",
          "implemented",
          "merged",
          "applied",
          "controlled",
          "developed",
          "evaluated",
          "expanded",
          "improved",
          "managed",
        ].map((verb, index) => (
          <span key={index} className="text-[#8C8C8C] capitalize">
            {verb}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Management;
