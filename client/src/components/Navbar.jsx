import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
       {/* na section */}
      <div className='flex justify-between px-6 py-2 bg-slate-800 relative text-white'>
      <div className='flex gap-4'>
        <h1><i class="ri-mail-line"></i>karunyalab@gmail.com</h1>
        <h2><i class="ri-phone-fill"></i>+91 9995154704/9747054704</h2>
       </div>
         <div className='flex gap-4'>
          <a href='https://api.whatsapp.com/send?phone=919995154704&text=Hii!%20How%20can%20I%20help%20You?Karunya%20Medical%20lab' className='text-2xl'><i class="ri-whatsapp-fill"></i></a>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-twitter-x-line text-2xl"></i>
          
        
       </div>
      </div>
    <nav className='flex justify-between  bg-white px-6 text-black '>
      <div className='p-0'>
          <img src={logo} className='w-44 border-black'></img>
      </div>
      <div className='flex gap-6 pr-14 py-6 text-xl font-normal '> 
        <Link to='/' className='hover:text-blue-600 py-2'>HOME</Link>
        <Link to='/contact' className='hover:text-blue-600 py-2'>CONTACT</Link>
        <a href='#services'  className='hover:text-blue-600 py-2'S>SERVICES</a>
        <button className='btn btn-info text-white text-xl'><a href='https://api.whatsapp.com/send?phone=919995154704&text=Hii!%20How%20can%20I%20help%20You?Karunya%20Medical%20lab'>Book Appointment</a></button>



      </div>
    </nav>
    </div>
  )
}

export default Navbar
