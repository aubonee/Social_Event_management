import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full'>
            <div className=' mx-auto w-3/5'>
                <div>
                    <div className="blog-item flex">
                        <div><img src="https://i.ibb.co/2cGwYxC/valiant-made-Urz-N-8-K1-PCE-unsplash.jpg" alt="" className='w-[850px] h-[250px]' /></div>
                        <div className='ml-5'>
                            <h1 className='font-bold text-4xl py-2 text-[#702632]'>The Art of Wedding Bliss</h1>
                            <h4 className='font-semibold text-xl'>2023-10-15</h4>
                            <h3 className=' font-semibold text-2xl'>Abdul Kader</h3>
                            <p className='mt-5  text-justify text-xl'>Explore the enchanting world of weddings in 'The Art of Wedding Bliss.'
                                 This blog post serves as your guide to creating the perfect dream wedding. 
                                 From selecting breathtaking venues to choosing exquisite decor,
                                 immerse yourself in the artistry of crafting unforgettable moments for your special day."</p>
                        </div>
                    </div>
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