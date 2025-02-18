import React from 'react'
import about from '../../assets/about.png'
const About = () => {
  return (
    <div className=' bg-[#0C0F16] w-full py-12 mt-44' id='about'>
      <div className=' md:mx-24 mx-4 flex flex-col-reverse md:flex-row items-center justify-between'>
      <img className=' md:w-[35%] md:mt-0 mt-12 ' src={about} alt="" />
      <div className=' md:w-[50%] flex flex-col md:gap-5 gap-3'>
        <h1 className=' md:text-[40px] sm:text-[30px] text-[30px] font-[800] txt'>About Us</h1>
        <h2 className=' font-[600] md:text-[30px] text-[20px] text-white'>what is JurisEd App </h2>
        <p className=' md:text-[16px] text-[13px] font-normal text-[#DDD]'>JurisEd, Pakistan's first legal education platform offering an innovative learning experience. Empowering law students and aspiring legal professionals to elevate their knowledge, skills, and career prospects through JurisEd.
    </p >
    <p className=' md:text-[16px] text-[13px] font-normal text-[#DDD]'>In addition to academic support, JurisEd provides guidance on pursuing International LLM programs, securing internships, and navigating career opportunities in the legal field. Our platform is designed to not only help you excel in your studies but also to prepare you for the global legal landscape.</p>
    <p className=' md:text-[16px] text-[13px] font-normal text-[#DDD]'>Our platform is specifically designed for low students and aspiring legal professionals, offering a treasure of resources and tools to help you succeed. With a focus on your courses of laws, statutes, and acts, our expertly crafted study materials will assist you at every step. JurisEd is more than just a study tool it's a community of like-minded individuals, united by a passion for justice and a drive to succeed</p>
        <button className=' py-3 px-6 w-fit text-white rounded-[16px] bg-gradient-to-r from-[#8C5300] via-[#EDB96E] to-[#B7700A]'>Learn More</button>
      </div>
    </div>
    </div>
  )
}

export default About