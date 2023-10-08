import React from 'react';
import Banner from '../../components/header/Banner';
import Services from '../../components/services/Services';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services services ={services}></Services>
         </div>
    );
};

export default Home;