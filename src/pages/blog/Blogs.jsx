import React from 'react';
import Blog from './Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs =({blogs}) => {
    return (
        <div className='w-full'>
            <h1 data-aos="fade-right"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000"  className='text-center font-extrabold text-black text-4xl py-10'>Blog<span className='text-[#702632]'>s</span></h1>
            <div className='mt-5 mx-auto w-11/12 border-t-4 border-[#702632] mb-2 '>
                <div data-aos="fade-up"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000"  className='mt-2'>
                  
                  {
               blogs?.map(blog=><Blog key={blog.id} blog={blog}></Blog> )
           }
                </div>
            </div>
        </div>
    );
};

// {
//     "id": 1,
//     "title": "The Art of Wedding Bliss",
//     "date": "2023-10-15",
//     "author": "Your Name",
//     "content": "Explore the enchanting world of weddings in 'The Art of Wedding Bliss.' This blog post serves as your guide to creating the perfect dream wedding. From selecting breathtaking venues to choosing exquisite decor, immerse yourself in the artistry of crafting unforgettable moments for your special day."
//   },
export default Blogs;