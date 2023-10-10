import React from 'react';
import Banner from '../../components/header/Banner';
import Services from '../../components/services/Services';
import { useLoaderData } from 'react-router-dom';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';
import Review from '../../components/Reviews/Review';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    const services = useLoaderData()
    return (
        <div  data-aos="fade-up">
             
            <Banner></Banner>
            <Services services ={services}></Services>

            <Review></Review>
            <WhyChooseUs></WhyChooseUs>
           
       
            
         </div>
    );
};

export default Home;