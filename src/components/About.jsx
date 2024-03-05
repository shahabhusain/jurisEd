import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
    <div className=' bg-[#0C0F16] w-full py-12 mt-24' id='about'>
      <div className=' md:mx-24 mx-4 flex flex-col-reverse md:flex-row items-center justify-between'>
      <img className=' md:w-[35%] md:mt-0 mt-12 ' src={about} alt="" />
      <div className=' md:w-[50%] flex flex-col md:gap-5 gap-3'>
        <h1 className=' md:text-[40px] sm:text-[30px] text-[30px] font-[800] txt'>About Us</h1>
        <h2 className=' font-[600] md:text-[30px] text-[20px] text-white'>what is JurisEd App </h2>
        <p className=' md:text-[16px] text-[13px] font-normal text-[#DDD]'>Your comprehensive platform tailored for lawyers seeking to enhance their skills and expand their legal vocabulary. Whether you're a seasoned practitioner or just starting out in the field of law, Juris Ad is your go-to destination for curated courses and resources to bolster your expertise.</p>
        <button className=' py-3 px-6 w-fit'>Learn More</button>
      </div>
    </div>
    </div>
  )
}

export default About