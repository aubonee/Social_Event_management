import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    const { id, name, image, price,subtitle } = service || {};

    return (
        <div>
          

     <div className=" flex  flex-col w-[450px] h-[500px] rounded-none bg-[#912F40] "  >
  <div className=" mx-0   w-[450px] h-[300px]  rounded-none   text-[#FFFFFA]" >
    <img  src={image} alt="img-blur-shadow"  width="450" height="300" className='rounded-none'/>
  </div>
  <div className="text-white ml-5 flex flex-col"> 
  <div className="py-1"><h5 className=" block font-sans text-xl font-semibold mx-2 mb-2" >{name}</h5></div>
  <div className="py-1"><p>{subtitle}</p></div>
  <div > <p className=" block font-sans text-xl font-semibold mx-2 mb-2">{price}</p></div>

<div>  <Link to={`/service/${id}`} relative="path"><button  className="btn ml-3 rounded-none bg-[#912F40] border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FFFFFA]"> View Details</button></Link> 
</div></div>
 
  
</div>
  
        </div>
    );
};

export default ServiceCard;