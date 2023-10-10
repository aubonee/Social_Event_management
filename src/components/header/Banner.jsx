import React from 'react';
import "./Banner.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <div data-aos="fade-down"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000"  className='banner-body flex flex-col justify-center text-left items-center'>
           <div className='m-auto'> 
           <h1 className='text-4xl lg:text-6xl  font-extrabold text-[#FFFDFA] '> Where Imagination Meets <br /> Celebration, <span className='text-[#912F40] text-s drop-shadow-md'> Every  <br /> Detail Matters.</span></h1></div>
        </div>
    );
};

export default Banner;