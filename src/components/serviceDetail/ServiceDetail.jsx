import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailCard from './ServiceDetailCard';


const ServiceDetail = () => {

  const [detail, setdetail] = useState({});


  const {id}=useParams();

  const details = useLoaderData();
  console.log("Detail")
  console.log(details);

  useEffect(() => {

    const finddetail = details?.find(detail => detail.id == id);

    setdetail(finddetail);
  }, [id,detail]);
    return (
        <div>
          <ServiceDetailCard detail={detail}></ServiceDetailCard>
        </div>
    );
};

export default ServiceDetail;