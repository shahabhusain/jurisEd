import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
    <div className=' bg-[#0C0F16] w-full py-12 mt-12' id='about'>
      <div className=' md:mx-24 mx-4 flex flex-col-reverse md:flex-row items-center justify-between'>
      <img className=' md:w-[35%] md:mt-0 mt-12 ' src={about} alt="" />
      <div className=' md:w-[50%] flex flex-col gap-5'>
        <h1 className=' text-[40px] font-[800] txt'>About Us</h1>
        <h2 className=' font-[600] text-[30px] text-white'>what is JurisEd App </h2>
        <p className=' text-[16px] font-normal text-[#DDD]'>Your comprehensive platform tailored for lawyers seeking to enhance their skills and expand their legal vocabulary. Whether you're a seasoned practitioner or just starting out in the field of law, Juris Ad is your go-to destination for curated courses and resources to bolster your expertise.</p>
        <button className=' py-3 px-6 w-fit'>Learn More</button>
      </div>
    </div>
    </div>
  )
}

export default About