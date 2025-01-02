import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800'>
    <footer className=' flex justify-between bg-slate-800 text-white py-6 px-8 rounded-t- max-md:flex-col max-md:gap-4'>
        <div className='text-[18px] max-md:text-[16px]'>
        <h2 className='max-md:py-2'>Quick Links</h2>
          <div className='flex gap-4 max-md:flex-col max-md:gap-1'>
          <a href='/'>Home</a>
          <a href='/'>Services</a>
          <a href='/'>Contact</a>
          <a href='/'>Book an Appointments</a>

          </div>
           
        </div>
        <div className=' pr-4 max-md:text-[16px]'>
          <h2 className='text-xl'>Contact</h2>
          <div className='flex gap-4 max-md:hidden'>
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-twitter-x-line text-2xl"></i>
          
          </div>
          <div>
           <h2 className='text-lg flex
           gap-4 max-md:text-[16px]'><i class="ri-map-pin-fill py-2"></i>Karunya Medical Lab,<br></br> M568+3MM, Meenangadi, Kerala 673591</h2>

          </div>
      
    <div className='flex gap-4'>
    <i class="ri-phone-fill"></i>
    <h2 className='text-lg'>+91 9995154704</h2>
    </div>
        </div>
      
          
    </footer>
    <h2 className='px-8 text-white'>copyright &copy;{new Date().getFullYear()}by KarunyaLab</h2>
      
    </div>
  )
}

export default Footer
