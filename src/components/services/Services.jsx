import React from 'react';
import ServiceCard from './ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = ({services}) => {
    return (
        <div className=' mx-auto flex flex-col justify-center items-center'>
           <div data-aos="fade-right"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000"  className='text-5xl my-5 text-center font-extrabold text-black'>Our <span className='text-[#912F40]'>Services</span></div>
        <div data-aos="fade-down"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className=' mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 py-10 px-5'>
           {
               services?.map(service=><ServiceCard key={service.id} service={service}></ServiceCard> )
           }
   </div>
   </div>
    );
};

export default Services;

