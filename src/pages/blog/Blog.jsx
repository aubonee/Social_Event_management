import React from 'react';

const Blog = ({blog}) => {
    const { id,image, title,date,author,content } = blog || {};
    return (
        <div>
              <div className=" mx-auto w-5/6 blog-item flex-col border-b-4 border-[#702632] pb-5 mb-5 lg:flex-row">
                        <div className='w-full lg:w-1/5  flex flex-col justify-center'><img src={image} alt="" className='w-[750px] h-[270px]' /></div>
                         <div className='ml-0 lg:ml-5 w-full lg:w-3/5'>
                             <h1 className='font-bold text-4xl py-2 text-[#702632]'>{title}</h1>
                             <h4 className='font-semibold text-xl'>{date}</h4>
                             <h3 className=' font-semibold text-2xl'>{author}</h3>
                             <p className='mt-5  text-justify text-xl'>{content}</p>
                        </div>
                    </div>
        
        </div>
    );
};

export default Blog;