import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const FaqItem = ({ title, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" " id="faqs">
      <div className="bg-[#161C27] p-6 rounded-lg md:mx-24 mx-4">
        <div className="py-2">
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-between w-full cursor-pointer"
          >
            <span className=" text-[#D1D1D1] md:text-[22px] [16px] font-[500]">
              {title}
            </span>
            {open ? (
              <span className=" text-white text-[22px]">
                <FaChevronUp />
              </span>
            ) : (
              <span className=" text-white text-[22px]">
                <FaChevronDown />
              </span>
            )}
          </div>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-[#D1D1D1] md:text-[14px] text-[11px] font-normal">
            {open && answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="  bg-[#0C0F16] py-20 mt-32">
      <h1 className=" text-[40px] font-[800] text-white text-center">FAQs</h1>
      <p className=" text-[#D1D1D1] text-[16px] font-normal text-center">
        Unlock Clarity with Our Quick FAQs Guide.
      </p>
      <div className="flex flex-col gap-5 mt-16">
        <FaqItem
          title="How the subscription process works?"
          answer="Lorem ipsum dolor sit amet consectetur. Enim tellus adipiscing iaculis est tincidunt eget. Pellentesque tincidunt feugiat nunc etiam eget molestie. Phasellus vel posuere est ultrices tempor magna pulvinar condimentum. Posuere pulvinar ut sed lacus posuere commodo sit nec lacus. Porttitor nisl massa sed elementum morbi ac felis sed volutpat. Ipsum sed egestas cursus sed. Enim faucibus varius est semper placerat. Tellus lacus nisi amet sit vitae in nunc neque convallis. At amet posuere vulputate vitae commodo."
        />
        <FaqItem
          title="How the subscription process works?"
          answer="Lorem ipsum dolor sit amet consectetur. Enim tellus adipiscing iaculis est tincidunt eget. Pellentesque tincidunt feugiat nunc etiam eget molestie. Phasellus vel posuere est ultrices tempor magna pulvinar condimentum. Posuere pulvinar ut sed lacus posuere commodo sit nec lacus. Porttitor nisl massa sed elementum morbi ac felis sed volutpat. Ipsum sed egestas cursus sed. Enim faucibus varius est semper placerat. Tellus lacus nisi amet sit vitae in nunc neque convallis. At amet posuere vulputate vitae commodo."
        />
        <FaqItem
          title="How the subscription process works?"
          answer="Lorem ipsum dolor sit amet consectetur. Enim tellus adipiscing iaculis est tincidunt eget. Pellentesque tincidunt feugiat nunc etiam eget molestie. Phasellus vel posuere est ultrices tempor magna pulvinar condimentum. Posuere pulvinar ut sed lacus posuere commodo sit nec lacus. Porttitor nisl massa sed elementum morbi ac felis sed volutpat. Ipsum sed egestas cursus sed. Enim faucibus varius est semper placerat. Tellus lacus nisi amet sit vitae in nunc neque convallis. At amet posuere vulputate vitae commodo."
        />
        <FaqItem
          title="How the subscription process works?"
          answer="Lorem ipsum dolor sit amet consectetur. Enim tellus adipiscing iaculis est tincidunt eget. Pellentesque tincidunt feugiat nunc etiam eget molestie. Phasellus vel posuere est ultrices tempor magna pulvinar condimentum. Posuere pulvinar ut sed lacus posuere commodo sit nec lacus. Porttitor nisl massa sed elementum morbi ac felis sed volutpat. Ipsum sed egestas cursus sed. Enim faucibus varius est semper placerat. Tellus lacus nisi amet sit vitae in nunc neque convallis. At amet posuere vulputate vitae commodo."
        />
      </div>
    </div>
  );
};

export default Faqs;
