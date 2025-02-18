import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import DropDownBtn from "./DropDownBtn";
import { useNavigate, useLocation } from "react-router-dom";
import Homebtn from "./Homebtn";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // If already on homepage, scroll to hero section
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage
      navigate("/");
    }
  };

  return (
    <>
      <div className={`sticky top-0 z-[1000] ${isActive ? "bg-white py-1 transition-all duration-300 ease-in-out" : ""}`}>
        <div className="md:flex hidden items-center justify-between mx-16 py-4">
          <img onClick={handleNavigate} className="w-[100px] cursor-pointer" src={logo} alt="logo" />
          <div>
            <ul className={`flex items-center gap-8 ${isActive ? "" : "text-white"}`}>
              {/* Desktop: Handle navigation or scroll */}
              <button onClick={handleHomeClick} className="cursor-pointer btn md:block hidden">
                Home
              </button>
              {/* Mobile: Navigate Home */}
              <div className="md:hidden block">
                <Homebtn />
              </div>
              <ScrollLink to="about" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer btn">
                About Us
              </ScrollLink>
              <ScrollLink to="features" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer btn">
                Features
              </ScrollLink>
              <DropDownBtn />
              <button className="py-2 px-6 rounded-[16px] bg-gradient-to-r from-[#8C5300] via-[#EDB96E] to-[#B7700A]">
                <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>
                  Contact Us
                </ScrollLink>
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden block my-4 sticky top-0 z-50 ${isActive ? "bg-white py-3 transition-all duration-300 ease-in-out" : ""}`}>
        <div className="flex items-center justify-between mx-4">
          <img onClick={handleNavigate} className="w-[100px] cursor-pointer" src={logo} alt="logo" />
          <div className="flex items-center gap-4">
            <DropDownBtn isActive={isActive} />
            <span onClick={() => setIsOpen(!isOpen)} className={`text-[22px] ${isActive ? "" : "text-white"}`}>
              {isOpen ? <FaTimes /> : <IoMdMenu />}
            </span>
          </div>
        </div>
        {isOpen && (
          <ul className="text-black bg-white absolute w-[100%] py-3 rounded-md flex flex-col items-center justify-center gap-5">
            {/* Mobile: Navigate Home */}
            <button onClick={handleHomeClick} className="cursor-pointer btn">
              Home
            </button>
            <ScrollLink to="about" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer btn">
              About Us
            </ScrollLink>
            <ScrollLink to="features" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer btn">
              Features
            </ScrollLink>
            <button className="py-2 px-6 rounded-[16px] bg-gradient-to-r from-[#8C5300] via-[#EDB96E] to-[#B7700A]">
              <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact Us
              </ScrollLink>
            </button>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
