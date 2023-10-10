import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
   
    return (
        <div className=' flex flex-col justify-center items-center ' >
            <h2 data-aos="fade-right"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className='font-extrabold text-black text-4xl py-10'>Why Choose <span className='text-[#702632]'>Eventz</span></h2>
          <div className=' w-11/12'>
          <div data-aos="fade-up"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className='  grid grid-cols-1 lg:grid-cols-3 gap-3'>
                
          <div className='flex  flex-col border-2 border-[#702632] rounded-xl px-10 py-5'>
                    <div className='flex justify-center items-center  mr-6'>
                        <h1 className='flex justify-center items-center  text-xl font-bold text-white box-border mx-auto w-[50px] h-[50px] bg-[#702632] rounded-full'>01</h1>
                        </div>
                    <div className='flex flex-col justify-center  text-center'>
                        <div className="heading  my-3 text-2xl font-bold text-[#702632]"><h1>Experience and Expertise</h1></div>
                        <div className="desc text-justify"> <p>Our seasoned team of event planners brings years of collective expertise to ensure your celebration is nothing short of spectacular. From weddings 
                            to birthdays, we've mastered the art of crafting unforgettable moments.</p></div>
                    
                    </div>
                </div>
               
               
                <div className='flex  flex-col border-2 border-[#702632] rounded-xl px-10 py-5'>
                    <div className='flex justify-center items-center  mr-6'>
                        <h1 className='flex justify-center items-center  text-xl font-bold text-white box-border mx-auto w-[50px] h-[50px] bg-[#702632] rounded-full'>02</h1>
                        </div>
                    <div className='flex flex-col justify-center  text-center'>
                        <div className="heading  my-3 text-2xl font-bold text-[#702632]"><h1>Comprehensive Planning Tools</h1></div>
                        <div className="desc text-justify"> <p>Dive into a suite of comprehensive planning tools that empower you to orchestrate every detail of your event. From checklists to budgeting, we've got your organizational needs covered."</p></div>
                    
                    </div>
                </div>
                <div className='flex  flex-col border-2 border-[#702632] rounded-xl px-10 py-5'>
                    <div className='flex justify-center items-center  mr-6'>
                        <h1 className='flex justify-center items-center  text-xl font-bold text-white box-border mx-auto w-[50px] h-[50px] bg-[#702632] rounded-full'>03</h1>
                        </div>
                    <div className='flex flex-col justify-center  text-center'>
                        <div className="heading  my-3 text-2xl font-bold text-[#702632]"><h1>Exclusive Vendor Deals</h1></div>
                        <div className="desc text-justify"> <p>Unlock exclusive deals and special discounts with our partnered vendors. Your celebration becomes not only memorable but also cost-effective with our unique offerings.</p></div>
                    
                    </div>
                
              
                 
                </div>
              
          
               
            </div>
          </div>
        </div>
    );
};

export default WhyChooseUs;