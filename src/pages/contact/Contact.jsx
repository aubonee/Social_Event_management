import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' w-full fixed-background flex flex-col justify-center items-center'>
            <div className='pt-10 pb-1 text-3xl uppercase text-[#ffff] font-bold'>contact us</div>
          <div className='pb-10 pt-1 text-xl   font-bold text-[#912F40]'>Keep in Touch</div>

            </div>
           
          <form className='w-3/4 my-12 py-12 px-5 '>
            <div className='grid grid-cols-4 gap-4'>
            <div className="form-control col-span-2">
          
          <input type="text" placeholder="First Name" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
            <div className="form-control col-span-2">
         
          <input  type="text" placeholder="First Name" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required/>
        </div>
            <div className="form-control col-span-4 ">
          
          <input type="email" placeholder="email" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className="form-control col-span-4 row-span-2">
          
          <input type="text" placeholder="Address" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className="form-control  col-span-2">
        <input type="date" placeholder="Date of Birth" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className=" form-control col-span-2">
         
          <input type="text" placeholder="Gender" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        
       

            </div>
            <div className="form-control mt-5">
         
         <textarea name="message" id="message" cols="30" rows="80" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" placeholder='Add your Message'></textarea>
       </div>
          </form>
          <div><button className=' text-white btn px-5 py-3 mb-5 mt-1 bg-[#912F40]'>Send Mail</button></div>
        </div>
    );
};

export default Contact;