import React from 'react'
import 'animate.css';
import star from '../assets/star.png';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import lnd from '../assets/lnd.png';
import img1 from '../assets/img1.jpg';

import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import Brc1 from '../assets/boucher1.jpg';
import Brc2 from '../assets/boucher2.jpg';
import Brc3 from '../assets/boucher3.jpg';
import Brc4 from '../assets/bb.png';
import Brc5 from '../assets/cc.png';
import lab1 from '../assets/lab1.svg';
import lab2 from '../assets/lab2.jpg';
import lab3 from '../assets/lab3.png';
import lab4 from '../assets/lab4.jpg';
import lab5 from '../assets/lab5.jpg';
import lab6 from '../assets/lab6.png';
import shd from '../assets/shedule.jpg';
import nurse from '../assets/nurse.png';
import equip  from '../assets/equip.jpg';
import qlty  from '../assets/qlty.png';
import assur from '../assets/assur.png';
import price from '../assets/price.png';








import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Landing= () => {
  AOS.init(
    {
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    }
  );
  return (
    <div className=' bg-white text-black h-screen'>
    {/* gallary sections */}
    <div className='bg-white max-md:px-2 max-md:py-2'>
    <Swiper
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <div>
          <div className='relative'>
            <img src={img1} className=' brightness-100 w-full h-[450px] max-md:h-60'></img>
          
            </div>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className='relative'>
            <img src={img3} className='brightness-100 h-[450px]  w-full max-md:h-60'></img>

            </div>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className='relative'>
            <img src={img4} className=' brightness-100 h-[450px] w-full max-md:h-60'></img>
            </div>            
          </div>
        </SwiperSlide>
        
      </Swiper>
    
    </div>
    {/* main section */}
    <div className=' flex justify-around gap-4 px-10 pt-14 py-16 bg-blue-100 max-md:flex-col max-md:pt-4 max-md:px-1 max-md:w-[100%]'>
     <div data-aos="fade-right" className='w-1/2 pt-10 max-md:pt-4 max-md:w-[100%] max-md:px-2'>
        <h2 className='text-3xl font-bold max-md:text-xl'>Welcome to <span className=' text-orange-600'>  KarunyaLab</span> Best  in the Town</h2>
        <p className='text-xl py-2 max-md:text-[16px]'>A medical laboratory is the backbone of healthcare diagnostics, research, and treatment planning.We are a technology-focused, multi-dimensional pharmaceutical company having state-of-the-art manufacturing capabilities in diverse therapeutic areas such as Cardiology, Diabetology, Pain Management, Dermatology, <span className='max-md:hidden'> It serves as a hub for analyzing biological samples, identifying diseases, and ensuring accurate and timely test results that guide clinical decisions. Medical labs are essential for advancing medical science, developing innovative treatments, and improving patient outcomes.</span></p>
        <button className='btn btn-warning text-xl text-white'><a href='https://api.whatsapp.com/send?phone=919995154704&text=Hello'>  <i class="ri-phone-fill px-2 "></i>Book Now</a></button>
      </div>
      <div data-aos="fade-left" className='w-1/2 max-md:hidden'>
      <img src={lnd}>
      </img>
      </div>
    </div>
    
    {/* second section */}
    <div className='flex justify-between bg-blue-100 px-20 py-8 gap-12 max-md:flex-col max-md:px-2'>
    <div className='flex px-8 bg-blue-200 max-md:px-1 max-md:h-[450px] max-md:hidden' id='swip1'>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       <SwiperSlide>
          <img src={Brc4} alt="Image 1" className='w-[450px] h-full max-md:w-[350px] max-md:h-[450px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brc5} alt="Image 1" className='w-[450px] h-full object-cover  max-md:w-[350px] max-md:h-[450px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brc1} alt="Image 1" className='w-[450px] h-full  max-md:w-[350px] max-md:h-[450px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brc2} alt="Image 1" className='w-[450px] h-full  max-md:w-[350px] max-md:h-[450px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brc3} alt="Image 1" className='w-[450px] h-full  max-md:w-[350px] max-md:h-[450px]' />
        </SwiperSlide>
        
      </Swiper>
      </div>
      <div className='pl-12 py-3 text-[18px] bg-blue-600 rounded-e-[120px] text-white'>
      <h2 className='text-5xl font-semibold'>
      Accurate Diagnosis,<br></br>Better Health
      </h2>
      <p className='text-2xl py-2'>
      With advanced diagnostic tools and empathetic care, we ensure thorough assessments for your health needs.
      </p>
        
        <h2 className='text-xl '> Available Testing Services:</h2>
        <ul className='text-xl px-4'>
          <li > Blood Tests (CBC, Blood Sugar, Lipid Profile, etc.)</li>
          <li>Kidney function test</li>
          <li> Imaging Services (X-rays, Ultrasound, etc.)</li>
         <li>Thyroid Test</li>
         <li> Vitamin Test</li>
         <li>COVID-19 and Other Infectious Disease Tests</li>

        </ul>
        <span className='text-xl py-4'>Your health is our priority. Let Karunya Lab  be your partner in wellness.</span><br></br>
       <button className='btn btn-secondary text-white text-xl'><a href='https://api.whatsapp.com/send?phone=919995154704&text=Hello'>Book Now</a></button>
      </div>
    </div>
  
    {/* features */}
    <div className='animate__animated animate__bounce bg-blue-100 p-2 hover:animate__bounce'>
     <div className='flex justify-around bg-blue-500 m-4 rounded-xl py-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-4'>
     <div className='w-36 h-24 px-10 py-4 bg-blue-100 shadow-md rounded-md'>
        <h2 className='text-center'>20<sup>+</sup><br></br> experts</h2>
      </div>
      <div className='w-36 h-24 px-4 py-4 bg-blue-100 shadow-md  rounded-md'>
      <h2 className='text-center'>50<sup>+</sup><br></br>Hi-tech machines</h2>
      </div>
      <div className='w-36 h-24 px-4 py-4 bg-blue-100 shadow-md rounded-md'>
      <h2 className='text-center'>200<sup>+</sup><br></br>Satisfied consumers</h2>
        
      </div>
      <div className='w-5/2 h-24 px-4 py-4 bg-blue-100 shadow-md rounded-md max-md:hidden'>
      <h2 className='text-center'>10<sup>+</sup><br></br>Branches in India</h2>
        
      </div>
      <div className='w-5/2 h-24 px-4 py-4 bg-blue-100 shadow-md rounded-md max-md:hidden'>
      <h2 className='text-center'>150<sup>+</sup><br></br>Lab Tests</h2>
        
      </div>
     </div>
      
    </div>
    {/* services sections */}
    <div data-aos="zoom-in"  id='services' className='text-black px-4 bg-white py-6 max-md:py-4'>
      <h2 className='text-center text-3xl py-4 text-blue-600 font-semibold'>Our Services</h2>
      <div className='flex gap-10 py-4 px-4 max-md:flex-col'>
        <h2 className='text-5xl w-1/2 px-4 max-md:w-[100%] max-md:px-2 max-md:text-2xl'>Empowering Health Through<br></br>Precision Testing</h2>
       <h2 className='text-xl w-1/2 max-md:w-[100%] max-md:px-2'>
       Behind every test is a life we care deeply about. Trust us to deliver results that matter to you and your loved ones.
       From routine health checkups to specialized testing, we provide accurate, reliable results to help you stay informed and in control of your health</h2>
      </div>
      <div className='flex-col px-10 gap-8 max-md:px-2'>
      <div className='flex gap-10 m-4 max-md:flex-col max-md:m-2'>
      <div className='w-1/2 shadow-xl px-4 h-72  py-4 rounded-2xl border-solid border-2 border-slate-300 max-md:w-[100%]  max-md:h-auto'>
         <h2 className='text-center text-2xl font-semibold  hover:text-blue-600'>Blood Test</h2>
         <div className='flex justify-center items-center'><img src={lab1} className='w-30 h-16 text-center  bg-blue-200 rounded-[50%] inline-block'></img></div>
         <p className='p-4'>A blood test is a diagnostic procedure that analyzes a sample of blood to assess overall health, detect diseases, and monitor medical conditions. It helps identify infections, organ function, nutrient levels, and markers for conditions like diabetes, anemia, and cholesterol. Blood tests are essential for early diagnosis and treatment, providing critical insights into a patient’s health.</p>
        
       </div>
       <div className='w-1/2 shadow-xl px-4 h-72 py-4 rounded-2xl border-solid border-2 border-slate-300 max-md:w-[100%]  max-md:h-auto'>
         <h2 className='text-center text-2xl font-semibold  hover:text-blue-600'>Thyroid Test</h2>
         <div className='flex justify-center items-center'><img src={lab2} className='w-30 h-16 text-center  bg-blue-200 rounded-[50%] inline-block'></img></div>
         <p className='p-4'>
         Our thyroid test services offer comprehensive screening to evaluate the health of your thyroid gland. By measuring key hormones such as TSH, T3, and T4, we help detect conditions like hypothyroidism and hyperthyroidism. Early detection through regular thyroid testing can provide valuable insights into your metabolism, energy levels, and overall well-being. 
         </p>
        
       </div>
      </div>
       <div className='flex gap-10 m-4 max-md:flex-col max-md:m-2'>
       <div data-aos="fade-left" className='w-1/2 shadow-xl px-4 h-72 py-8 rounded-2xl border-solid border-2 border-slate-300 max-md:w-[100%]  max-md:h-auto'>
         <h2 className='text-center text-2xl font-semibold  hover:text-blue-600'>Kidney Function Test</h2>
         <div className='flex justify-center items-center'><img src={lab3} className='w-30 h-16 text-center  bg-blue-200 rounded-[50%] inline-block'></img></div>
         <p className='p-4'>Our Kidney Function Test services are designed to assess the health and efficiency of your kidneys. By measuring key markers such as creatinine, blood urea nitrogen (BUN), and glomerular filtration rate (GFR), we can detect early signs of kidney issues like chronic kidney disease or impaired kidney function.</p>
        
       </div>
       <div data-aos="fade-right" className='w-1/2 px-4 shadow-xl h-72 py-4 rounded-2xl border-solid border-2 border-slate-300 max-md:w-[100%]  max-md:h-auto'>
         <h2 className='text-center text-2xl font-semibold hover:text-blue-600'>Vitamin Test</h2>
         <div className='flex justify-center items-center'><img src={lab4} className='w-30 h-16 text-center  bg-blue-200 rounded-[50%] inline-block'></img></div>
         <p className='p-4 py-4'>Our Vitamin Test services provide a detailed analysis of essential vitamins in your body, including Vitamin D, B12, and other important nutrients. These tests help identify deficiencies or imbalances that could affect your overall health, energy levels, and immune function.</p>
        
       </div>
       </div>
       <div className='flex gap-10 m-4 max-md:flex-col max-md:m-2'>
       <div className='w-1/2 px-4 shadow-xl h-72 py-4 rounded-2xl border-solid border-2 border-slate-300 max-md:w-[100%]  max-md:h-auto'>
         <h2 className='text-center text-2xl font-semibold  hover:text-blue-600'>Liver Function Test</h2>
         <div className='flex justify-center items-center'><img src={lab5} className='w-30 h-16 text-center  bg-blue-200 rounded-[50%] inline-block'></img></div>
         <p className='p-4'>Our Liver Function Test services offer a comprehensive assessment of your liver health by measuring key enzymes and proteins such as ALT, AST, bilirubin, and albumin. These tests help detect liver conditions like hepatitis, cirrhosis, and fatty liver disease. Early detection through regular liver function testing allows for timely intervention and better management of liver health.</p>
        
       </div>
       <div className='w-1/2 shadow-xl px-4 h-72 py-4 rounded-2xl border-solid border-2 border-slate-300 max-md:w-[100%]  max-md:h-auto'>
         <h2 className='text-center text-2xl font-semibold  hover:text-blue-600'>Blood Sugar Test</h2>
         <div className='flex justify-center items-center'><img src={lab6} className='w-30 h-16 text-center  bg-blue-200 rounded-[50%] inline-block'></img></div>
         <p className='p-4'>
         Our Blood Sugar Test services provide a reliable way to monitor your glucose levels, helping to detect conditions like diabetes or prediabetes. By measuring fasting blood sugar or HbA1c, we assess how well your body regulates sugar, offering valuable insights into your overall metabolic health. 
         </p>
        
       </div>
       </div>


      </div>
    </div>
    {/* why choose us */}
   <h2 className='text-3xl text-blue-600 text-center font-semibold bg-blue-100' id='why'>Why to Choose Us</h2>
   <div className='flex px-4 py-4 bg-blue-100 max-md:flex-col max-md:px-2'>
      <div data-aos="fade-right" className='bg-blue-100 px-6 w-1/2 max-md:w-[100%] max-md:px-0'>
      <h2 className='text-4xl font-semibold p-2 max-md:text-2xl'>Comprehensive Diagnostics<br></br> for Accurate Insights</h2>
      <div className='bg-blue-600 rounded-full w-96 max-md:hidden'>
      <img src={nurse} className='h-96'></img>

      </div>
      </div>
      <div data-aos="fade-left" className=' flex-col justify-center items-center gap-4 py-4 px-4 bg-blue-100'>
      <div className='flex gap-4 py-4 max-md:flex-col'>
      <div className='flex justify-center items-center'>
      <img src={equip} className='w-24 h-24 rounded-full'></img>

      </div>
      <div>
      <h2 className='text-2xl font-semibold'>Advanced Medical Equipment</h2>
      <p className=' text-xl font-serif'>Karunya Medical Lab is equipped with state-of-the-art diagnostic and testing equipment.</p>
      </div>
      </div>
      <div className='flex gap-4 py-2 max-md:flex-col'>
      <div className='flex gap-4 py-4 justify-center items-center' >
        <img src={qlty} className='w-24 h-24 rounded-full'></img>
      </div>
      <div>
      <h2 className='text-2xl font-semibold'>Highly Qualified Professionals</h2>
      <p className='text-xl font-serif '> The lab is staffed with experienced and certified medical professionals who ensure accurate results.</p>
      </div>
      </div>
      <div className='flex gap-4 py-2 max-md:flex-col'>
      <div className='flex gap-4 py-4 justify-center items-center' >
        <img src={assur} className='w-24 h-24 rounded-full'></img>
      </div>
      <div>
      <h2 className='text-2xl font-semibold'>Top-Level Quality Assurance</h2>
      <p className='text-xl font-serif'>KarunyaLab delivers ISO and NABL-certified quality, managed by skilled experts..</p>
      </div>
      
      </div>
      <div className='flex gap-4 py-2 max-md:flex-col'>
      <div className='flex gap-4 py-4 justify-center items-center' >
        <img src={price} className='w-24 h-24 rounded-full'></img>
      </div>
      <div>
      <h2 className='text-2xl font-semibold'>Affordable Services</h2>
      <p className='text-xl font-serif'>Competitive pricing for medical tests and services without compromising quality.</p>
      </div>

    
      </div>


  

      </div>

   </div>
    
    {/* shedule section */}
    
    <hr class="text-black w-[100%] mx-auto"></hr>
    <div className='flex justify-around gap-10 bg-white py-8 max-md:flex-col max-md:px-4'>
    <div className='flex gap-4 max-md:flex-col max-md:items-center max-md:px-2'>
    <img src={shd} className='w-28 h-28'></img>
      <h2 className='text-3xl font-semibold py-4 max-md:py-0'> Book Your Test Appointment in Just a Few Steps<br></br><span className='text-xl font-normal'>Ensure your health is on track—schedule a lab test today for early detection and peace of mind!</span></h2>
    </div>
    <div className=' flex py-6 max-md:py-0  max-md:justify-center'>
    <button className='btn btn-info text-white text-xl'>
    <a href='https://api.whatsapp.com/send?phone=919995154704&text=Hello'>  <i class="ri-phone-fill px-2 "></i>Book an Appointment</a>
    </button>
     
    </div>

    </div>
   
     {/* reviews section */}
     <div className='bg-blue-100'>
     <h2 className='text-3xl text-orange-600 font-bold text-center mx-4 py-14'>Our Client Reviews</h2>
     <div className='bg-blue-600 rounded-t-3xl py-6'>
     <Swiper 
         modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}>
     <SwiperSlide>
     <div className='flex gap-4 bg-blue-100 rounded-3xl mx-8 my-4'>
     <div className='w-1/3 flex-col shadow-lg border-2 border-solid rounded-3xl border-x-slate-200 p-8 max-md:hidden'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png' className='w-28 h-20 rounded-full bg-blue-200'></img>
          </div>
          <h2 className='text-xl text-center font-semibold '>Logan Paul</h2>
          <p className='text-[16px] text-center'>"I truly appreciate the clear communication and the timely follow-up on my test results. I highly recommend this lab for anyone looking for reliable and high-quality medical testing services!"</p>
            <div className='flex justify-center items-center gap-2'>
              <img src={star} className='w-4 h-4'></img>
              <img src={star}  className='w-4 h-4' ></img>
             <img src={star}  className='w-4 h-4' ></img>
             <img src={star}  className='w-4 h-4' ></img>

              </div>
             
          </div>
          <div className='w-1/3 flex-col shadow-lg border-2 rounded-3xl border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png' className='w-28 h-20 rounded-full bg-blue-200'></img>
          </div>
          <h2 className='text-xl text-center font-semibold'>Logan Paul</h2>
          <p className='text-[16px] text-center'>"I've had an excellent experience at this medical lab! The staff are incredibly friendly, professional, and attentive. The lab environment is clean, well-organized, and welcoming, making me feel at ease during my visit."</p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} className='w-4 h-4' ></img>
              <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>

              </div>
             
          </div>
          <div className='w-1/3 flex-col shadow-lg rounded-3xl border-2 border-solid border-x-slate-200 p-8 max-md:hidden'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png' className='w-28 h-20 rounded-full bg-blue-200'></img>
          </div>
          <h2 className='text-xl text-center font-semibold'>Logan Paul</h2>
          <p className='text-[16px] text-center'>"I was really impressed with the professionalism and care shown by the staff at this medical lab. They made the entire testing process quick and comfortable, and the lab was very clean and well-maintained. The results were delivered ahead of schedule, which was a nice surprise! Highly recommend!" </p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} className='w-4 h-4' ></img>
              <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>

              </div>
             
          </div>
     </div>
       
     </SwiperSlide>
     <SwiperSlide>
     <div className='flex gap-4 bg-blue-100 rounded-3xl mx-4'>
     <div className='w-1/3 flex-col shadow-lg rounded-3xl border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png' className='w-28 h-20 rounded-full bg-blue-200'></img>
          </div>
          <h2 className='text-xl text-center font-semibold '>Logan Paul</h2>
          <p className='text-[16px] text-center'>"Fantastic experience! The medical lab staff were courteous and explained every step of the testing process. The results were accurate and arrived very quickly. I will definitely return for any future lab tests. Truly outstanding service!"</p>
            <div className='flex justify-center items-center gap-2'>
              <img src={star} className='w-4 h-4'></img>
              <img src={star}  className='w-4 h-4' ></img>
             <img src={star}  className='w-4 h-4' ></img>
             <img src={star}  className='w-4 h-4' ></img>

              </div>
             
          </div>
          <div className='w-1/3 flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%] max-md:hidden'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png' className='w-28 h-20 rounded-full bg-blue-200'></img>
          </div>
          <h2 className='text-xl text-center font-semibold'>Logan Paul</h2>
          <p className='text-[16px] text-center'>"Such a smooth experience! The team at this medical lab was efficient and kind, making sure I felt comfortable during my visit. They took the time to explain everything in detail, and the results were available much sooner than I expected. I’m very pleased with my visit."

           </p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} className='w-4 h-4' ></img>
              <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>

              </div>
             
          </div>
          <div className='w-1/3 flex-col shadow-lg border-2 rounded-3xl border-solid border-x-slate-200 p-8 max-md:hidden'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png' className='w-28 h-20 rounded-full bg-blue-200'></img>
          </div>
          <h2 className='text-xl text-center font-semibold'>Logan Paul</h2>
          <p className='text-[16px] text-center'>"I’ve been to several labs before, but this one is by far the best. The staff is knowledgeable and approachable, and the testing process was quick and hassle-free. I received my results promptly and with clear explanations. Highly recommend this lab to anyone looking for top-notch service!" </p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} className='w-4 h-4' ></img>
              <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>
             <img src={star} className='w-4 h-4' ></img>

              </div>
             
          </div>
     </div>
       
     </SwiperSlide>
     
      


     </Swiper>
     </div>
     </div>
        {/* contact sections  */}
    <div  data-aos="fade-up" className='bg-stone-200 py-4' id='contact'>
       <h2 className='text-center text-3xl font-bold text-orange-700'>You can rich us by following!!</h2>
       <div className='flex justify-around gap-8 h-full  pt-20 max-md:flex-col max-md:gap-2'>
           <div className='max-md:w-80 max-md:px-2'>   
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.481880528203!2d76.166669!3d11.660222000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60be8a73e0f55%3A0x8d91412f104026be!2sKarunya%20Medical%20Lab!5e0!3m2!1sen!2sin!4v1735721188124!5m2!1sen!2sin" 
           width="750"
           height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className='max-md:w-[350px] max-md:h-80' >

          </iframe>
       </div>
       <div className='flex-col space-y-4 px-4 max-md:w-full'>
       <h2 className='text-2xl font-bold text-black'>Send Your Message</h2>
       <form action='' className='space-y-4'>
         <div>
         <input type='text' placeholder='Enter Your Name' className='w-96 px-2 h-12 outline-none rounded-lg bg-slate-100 border-[1.2px] border-solid border-black max-md:w-80'/>
         </div>
         <div>
         <input type='text' placeholder='Enter Your Phone no' className='w-96 px-2 h-12 outline-none rounded-lg bg-slate-100 border-[1.2px] border-solid border-black max-md:w-80'/>
         </div>
         <div>
         <input type='email' placeholder='Email' className='w-96 h-12 px-2 outline-none rounded-lg bg-slate-100 border-[1.2px] border-solid border-black max-md:w-80' />
         
         </div>
         <div> 
         <textarea placeholder='Message' rows='5' className='w-96 px-2 outline-none rounded-lg bg-slate-100 border-[1.2px] border-solid border-black max-md:w-80' />
          
         </div>
           <button type='submit' className='btn btn-secondary w-96 max-md:w-80'>Send</button>
           </form>
       </div>
         </div>
       </div>
       <Footer/>
     
    </div>
  )
}

export default Landing
