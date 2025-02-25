import React from 'react'

const Contact = () => {
  return (
    <div className=' my-32' id='contact'>
      <h1 className=' text-[40px] font-[800] text-white text-center'>Contact us</h1>
      <p className=' text-[16px] font-normal text-[#949494] text-center'>Reach Out for Support and Information.</p>
      <div className=' flex flex-col gap-4 md:mx-96 mx-4 mt-20'>
        <input className=' py-5 px-3' type="text" placeholder='Full Name' />
        <input className=' py-5 px-3' type="text" placeholder='Your Email ' />
        <textarea className='py-5 px-3' name="" placeholder='Type Your Message Here' rows="7"></textarea>
        <button className=' py-3 px-4 text-white text-[16px] font-bold rounded-[16px] bg-gradient-to-r from-[#8C5300] via-[#EDB96E] to-[#B7700A]'>Send</button>
      </div>
    </div>
  )
}

export default Contact