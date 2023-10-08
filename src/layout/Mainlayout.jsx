import React from 'react';
import Navbar from '../components/navbar/Navbar';
 import { Outlet } from 'react-router-dom';
 import Footer from '../components/footer/Footer';

const Mainlayout = () => {
    return (
        <div className='bg-[#FFFDFA]'>
             <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Mainlayout;