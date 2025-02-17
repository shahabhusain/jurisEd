import React from "react";

const Technical = () => {
  return (
    <div className=" md:w-[75%] w-[97%] mx-auto mt-12 ">

      <h3 className="text-lg md:text-[24px] font-[700]   text-white mt-10">Technical </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm md:text-base mt-10">
        {[
          "addressed",
          "built",
          "computed",
          "debugged",
          "finalized",
          "regulated",
          "restored",
          "applied",
          "calculated",
          "constructed",
          "determined",
          "maintained",
          "refined",
          "solved",
          "assembled",
          "coded",
          "converted",
          "engineered",
          "programmed",
          "repaired",
          "specialized",
          "bypassed",
          "concluded",
          "designed",
          "experimented",
          "processed",
          "recovered",
          "updated",
        ].map((verb, index) => (
          <span key={index} className="text-[#8C8C8C] capitalize">
            {verb}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Technical;
