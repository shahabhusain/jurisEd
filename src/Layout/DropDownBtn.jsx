import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownBtn = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Coursera Financial Aid", path: "/course" },
    { title: "How to create successful CVs", path: "/cv" },
    { title: "Latest Judgements Analysis", path: "/latest" },
    { title: "Path to Practice", path: "/path" },
    { title: "ADR", path: "/adr" },
    { title: "Judiciary", path: "/judi" },
    { title: "Understanding Legal Concepts", path: "/legal" },
    { title: "Drafting & Advocacy", path: "/drafting" },
    { title: "Jobs, Fellowships & Internships", path: "/jobs" },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 text-[12px] md:text-[15px] rounded-md flex items-center space-x-2 ${
          isActive ? "md:text-white text-black" : " "
        }`}
      >
        <span>Career Skills</span>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 md:w-64 w-40 bg-black text-white shadow-lg rounded-md z-10">
          <ul className="py-2 flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="px-4 py-2 md:text-[15px] text-[10px] hover:bg-gray-700 cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownBtn;
