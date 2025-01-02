import React from 'react'

const Contact = () => {
  return (
    <div className='bg-stone-200 h-screen'>
       <h2 className='text-center text-3xl font-bold text-orange-700'>You can rich us by following!!</h2>
       <div className='flex justify-around gap-8 h-full  pt-20'>
       <div className='flex-col space-y-4'>
       <h2 className='text-2xl font-bold text-black'>Send Your Message</h2>
       <form action='' className='space-y-4'>
         <div>
         <input type='text' placeholder='Enter Your Name' className='w-96 h-12 outline-none rounded-sm bg-slate-100 border-[1.2px] border-solid border-black'/>
         </div>
         <div>
         <input type='text' placeholder='Enter Your Phone no' className='w-96 h-12 outline-none rounded-sm bg-slate-100 border-[1.2px] border-solid border-black'/>
         </div>
         <div>
         <input type='email' placeholder='Email' className='w-96 h-12 outline-none rounded-sm bg-slate-100 border-[1.2px] border-solid border-black' />
         
         </div>
         <div> 
         <textarea placeholder='Message' rows='5' className='w-96 s outline-none rounded-sm bg-slate-100 border-[1.2px] border-solid border-black' />
          
         </div>
           <button type='submit' className='btn btn-secondary w-96'>Send</button>
           </form>
       </div>
          
         <div>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.481880528203!2d76.166669!3d11.660222000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60be8a73e0f55%3A0x8d91412f104026be!2sKarunya%20Medical%20Lab!5e0!3m2!1sen!2sin!4v1735721188124!5m2!1sen!2sin" 
           width="750"
           height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map" >

          </iframe>
    </div>
         </div>
       </div>
  )
}

export default Contact