import React from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetailCard = ({detail}) => {
    const { id, image, name ,description, price } = detail || {};
    console.log(detail);

    return (
        <div>
          
           
            <h2>{id}</h2>
            <div>
            <div className='mx-auto mt-5 w-5/6'>
               <div className='w-full h-max-[90vh] lg:h-[90vh] flex flex-col justify-center  ' > 
               
               <img className='w-full h-max-[90vh] lg:h-[90vh] rounded-t-lg' src={image} alt="" />
               
               </div> 
               
               <h1 className='my-auto font-bold mt-3 text-left text-black rounded-md text-xl'> Price: {price}</h1>

                <h1 className='text-[#0B0B0B], text-4xl font-bold my-5'>{name}</h1>
               
                <p className='text-[#0B0B0B], text-md text-justify my-5'>{description}</p>
               
            </div>
        </div>
        </div>
    );
};

export default ServiceDetailCard;