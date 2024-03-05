import React from 'react'

const Contact = () => {
  return (
    <div className=' mt-32' id='contact'>
      <h1 className=' text-[40px] font-[800] text-white text-center'>Contact us</h1>
      <p className=' text-[16px] font-normal text-[#949494] text-center'>Contact Us: Reach Out for Support and Information.</p>
      <div className=' flex flex-col gap-4 md:mx-96 mx-12 mt-20'>
        <input className=' py-5 px-3' type="text" placeholder='Grand|' />
        <input className=' py-5 px-3' type="text" placeholder='Enter E-Mail Address ' />
        <textarea className='py-5 px-3' name="" placeholder='Type Your Massage Hear' rows="7"></textarea>
        <button className=' py-3 px-4 text-white text-[16px] font-bold'>Send</button>
      </div>
    </div>
  )
}

export default Contact