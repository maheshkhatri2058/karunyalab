import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  function close()
  {
    document.getElementById("navs").style.display = "none";
  }
  function show()
  {
    document.getElementById("navs").style.display = "flex";

  }
  return (
    <div>
       {/* na section */}
      <div className='flex justify-between px-6 py-2 bg-slate-800 relative text-white max-md:hidden'>
      <div className='flex gap-4'>
        <h1><i className="ri-mail-line"></i>karunyalab@gmail.com</h1>
        <h2><i className="ri-phone-fill"></i>+91 9995154704/9747054704</h2>
       </div>
         <div className='flex gap-4'>
          <a href='https://api.whatsapp.com/send?phone=919995154704' className='text-2xl'><i class="ri-whatsapp-fill"></i></a>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-twitter-x-line text-2xl"></i>
          
        
       </div>
      </div>
    <nav className='flex justify-between  bg-white px-6 text-black '>
      <div className='p-0'>
          <img src={logo} className='w-44 border-black'></img>
      </div>
      <div className='flex gap-6 pr-14 py-6 text-xl font-normal max-md:hidden '> 
        <Link to='/' className='hover:text-blue-600 py-2'>HOME</Link>
        <a href='#contact' className='hover:text-blue-600 py-2'>CONTACT</a>
        <a href='#services'  className='hover:text-blue-600 py-2'S>SERVICES</a>
        <button className='btn btn-info text-white text-xl'><a href='https://api.whatsapp.com/send?phone=919995154704'>Book Appointment</a></button>



      </div>
      <div className='hidden  pt-4 max-md:flex'><button onClick={show}><i className="ri-menu-line text-xl"></i></button></div>
     
    </nav>
    <div className='hidden max-md:items-center px-[40%] bg-slate-100  absolute left-0 right-0' id='navs'>
       <div className='mx-auto my-2  text-black'>
       <div className='py-2 px-4'><button onClick={close}><i className="ri-close-large-line"></i></button></div>
       <div className='py-2'>
        <Link to='/' className='hover:text-blue-600 py-2'>HOME</Link>
        </div>        
        <div className='py-2' >
        <a href='#contact' className='hover:text-blue-600 py-2'>CONTACT</a>
       
        </div>
        <div className='py-2'>
        <a href='#services'  className='hover:text-blue-600 py-2'>SERVICES</a>
           
        </div>
       </div>

      </div>
    </div>
  )
}

export default Navbar
