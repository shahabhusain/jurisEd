import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleMenu = () => {
    // Toggle the menu state
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={` sticky top-0 z-50 ${
          isActive
            ? "bg-white py-1 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="md:flex hidden items-center justify-between mx-24 my-4">
          <img className="w-[100px]" src={logo} alt="" />
          <div>
            <ul
              className={`flex items-center gap-8 ${
                isActive ? "" : "text-white"
              }`}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer btn"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer btn"
              >
                About Us
              </Link>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer btn"
              >
                Features
              </Link>
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer btn"
              >
                FAQs
              </Link>
             <button   className="py-3 px-6">
             <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
             </button>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden block mx-4 my-4">
        <div className="flex items-center justify-between">
          <img className="w-[100px]" src={logo} alt="" />
          <span className="text-white text-[22px]" onClick={toggleMenu}>
            <IoMdMenu />
          </span>
        </div>
        <div className="hidden">
          <ul className="text-white bg-yellow-600 py-3 rounded-md mt-7 flex flex-col items-center justify-center gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">FAQs</li>
            <button className="py-3 px-6">Contact</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
