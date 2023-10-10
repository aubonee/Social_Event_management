import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    return (
        <div>
            <div data-aos="fade-left"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className='mx-auto' ><h1 className=' text-center font-extrabold text-black text-4xl py-10'>Client's <span className='text-[#702632]'> Feedback</span> </h1></div>
            <div data-aos="fade-up"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000"  className="carousel w-full">
    <div id="item1" className="carousel-item w-full">
    <div className='mx-auto flex flex-col p-10 lg:flex-row-reverse text-white  rounded-none w-11/12 lg:w-3/5 shadow-lg border-2 bg-[#702632]'>
  <div className='w-full lg:w-2/4 flex justify-center items-center  mr-6'>
                       
                        <img src="https://i.ibb.co/0mmZLC8/person1.jpg" alt="" className='w-[300px]  border-8 border-b-[30px] border-[white] h-[260px]'/>
                        </div>
                    <div className='w-full lg:w-2/4 flex flex-col justify-center  text-center'>
                        <div className="Author  my-3 text-2xl font-bold text-cent lg:text-left"><h1>Alex Martinez</h1></div>
                        <div className="desc text-center lg:text-justify"> <p>A fantastic tool for event planning! The user-friendly platform and personalization options are game-changers. The vendors we chose exceeded our expectations. However, there were a few glitches in the app. Nonetheless, the team was quick to respond and resolve the issues. Overall, a great experience."</p></div>
                   
                    </div>
                </div>
  </div> 
  <div id="item2" className="carousel-item w-full">
    <div className='mx-auto flex flex-col p-10 lg:flex-row-reverse text-white  rounded-none w-11/12 lg:w-3/5 shadow-lg border-2 bg-[#702632]'>
  <div className='w-full lg:w-2/4 flex justify-center items-center  mr-6'>
                       
                        <img src="https://i.ibb.co/tY2R33S/person2.jpg" alt="" className='w-[300px]  border-8 border-b-[30px] border-[white] h-[320px]'/>
                        </div>
                    <div className='w-full lg:w-2/4 flex flex-col justify-center  text-center'>
                        <div className="Author  my-3 text-2xl font-bold text-center lg:text-left"><h1>Alex Martinez</h1></div>
                        <div className="desc text-center lg:text-justify"> <p>A fantastic tool for event planning! The user-friendly platform and personalization options are game-changers. The vendors we chose exceeded our expectations. However, there were a few glitches in the app. Nonetheless, the team was quick to respond and resolve the issues. Overall, a great experience."</p></div>
                   
                    </div>
                </div>
  </div> 
  <div id="item3" className="carousel-item w-full">
    <div className='mx-auto flex flex-col p-10 lg:flex-row-reverse text-white  rounded-none w-11/12 lg:w-3/5 shadow-lg border-2 bg-[#702632]'>
  <div className='w-full lg:w-2/4 flex justify-center items-center  mr-6'>
                       
                        <img src="https://i.ibb.co/3Wsm3JB/person4.jpg" alt="" className='w-[300px]  border-8 border-b-[30px] border-[white] h-[320px]'/>
                        </div>
                    <div className='w-full lg:w-2/4 flex flex-col justify-center  text-center'>
                        <div className="Author  my-3 text-2xl font-bold text-center lg:text-left"><h1>Alex Martinez</h1></div>
                        <div className="desc text-center lg:text-justify"> <p>A fantastic tool for event planning! The user-friendly platform and personalization options are game-changers. The vendors we chose exceeded our expectations. However, there were a few glitches in the app. Nonetheless, the team was quick to respond and resolve the issues. Overall, a great experience."</p></div>
                   
                    </div>
                </div>
  </div> 
  <div id="item4" className="carousel-item w-full">
    <div className='mx-auto flex flex-col p-10 lg:flex-row-reverse text-white  rounded-none w-11/12 lg:w-3/5 shadow-lg border-2 bg-[#702632]'>
  <div className='w-full lg:w-2/4 flex justify-center items-center  mr-6'>
                       
                        <img src="https://i.ibb.co/G7wJb50/person3.jpg" alt="" className='w-[300px]  border-8 border-b-[30px] border-[white] h-[320px]'/>
                        </div>
                    <div className='w-full lg:w-2/4 flex flex-col justify-center  text-center'>
                        <div className="Author  my-3 text-2xl font-bold text-center lg:text-left"><h1>Alex Martinez</h1></div>
                        <div className="desc text-center lg:text-justify"> <p>A fantastic tool for event planning! The user-friendly platform and personalization options are game-changers. The vendors we chose exceeded our expectations. However, there were a few glitches in the app. Nonetheless, the team was quick to respond and resolve the issues. Overall, a great experience."</p></div>
                   
                    </div>
                </div>
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="mx-2 btn text-white w-[30px] h-[30px] rounded-full bg-[#702632] btn-xs">1</a> 
  <a href="#item2" className="mx-2 btn text-white w-[30px] h-[30px] rounded-full bg-[#702632] btn-xs">2</a> 
  <a href="#item3" className="mx-2 btn text-white w-[30px] h-[30px] rounded-full bg-[#702632] btn-xs">3</a> 
  <a href="#item4" className="mx-2 btn text-white w-[30px] h-[30px] rounded-full bg-[#702632] btn-xs">4</a>
</div>
        </div>
    );
};

export default Review;