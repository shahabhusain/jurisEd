import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll';
const Footer = () => {
  return (
 <div className=' bg-[#0C0F16] py-12 pt-20'>
       <div className=' flex flex-col md:flex-row items-center justify-between mx-32'>
        <img className=' w-[100px]' src={logo} alt="" />
        <ul className=' flex flex-col md:flex-row md:mt-0 mt-14 items-center gap-4 text-white'>
            <Link  to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className=' cursor-pointer hover:text-[#EDB96E]'>Home</Link>
            <Link  to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className=' cursor-pointer hover:text-[#EDB96E]'>About Us</Link>
            <Link  to="features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className=' cursor-pointer hover:text-[#EDB96E]'>Features</Link>
            <Link  to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className=' cursor-pointer hover:text-[#EDB96E]'>Contact Us</Link>
        </ul>
        <div className=' flex md:mt-0 mt-4 items-center gap-4'>
            <span className=' text-white text-[22px] cursor-pointer'><FaFacebook /></span>
            <span className=' text-white text-[22px] cursor-pointer'><FaSquareInstagram /></span>
            <span className=' text-white text-[22px] cursor-pointer'><FaYoutube /></span>
        </div>
    </div>
    <div className=' h-[2px] w-[90%] mx-auto bg-[#3A3A3A] mt-12'></div>
    <p className='text-[#ADADAD] text-[12px] font-normal text-center mt-4'>Copyright © JurisEd</p>
 </div>
  )
}

export default Footer