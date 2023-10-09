import React from 'react';
import ServiceCard from './ServiceCard';

const Services = ({services}) => {
    return (
        <div className=' mx-auto flex flex-col justify-center items-center'>
           <div className='text-5xl my-5 text-center font-extrabold text-black'>Our <span className='text-[#912F40]'>Services</span></div>
        <div className=' mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-3 py-10 px-5'>
           {
               services?.map(service=><ServiceCard key={service.id} service={service}></ServiceCard> )
           }
   </div>
   </div>
    );
};

export default Services;

