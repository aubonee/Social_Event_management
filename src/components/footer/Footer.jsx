import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-5 bg-[#080705]'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title"></header> 
  
   <h1 className='text-4xl font-mono text-white' >EVENTZ</h1>
  </nav> 
  <nav className='text-center'>
    <header className="footer-title">Quick Links</header> 
   <p className='text-center'><Link  to="/WhyChooseUs">Why Choose Us</Link></p> 
   <p className='text-center'><Link to="/Contact">Contact</Link></p>
   <p className='text-center'><Link to="/Blogs">Blogs</Link></p>
   <p className='text-center'><Link to="/Review">Client's Feedback</Link></p>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;