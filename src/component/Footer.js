import React from 'react';
import logo from '../assets/hiking logo.jpeg'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-gray-800 p-20">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/6">
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p className="text-sm">Insert a brief description here about the website or organization. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src={logo} alt="Logo" className="mt-8 h-12" />
        </div>
        <div className="w-full md:w-1/6 mt-4 md:mt-0">
          <h3 className="text-lg font-bold mb-2">Resources</h3>
          <ul className="text-sm">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mt-4 md:mt-0">
          <h3 className="text-lg font-bold mb-2">Help</h3>
          <ul className="text-sm">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mt-4 md:mt-0">
          <h3 className="text-lg font-bold mb-2">Services</h3>
          <ul className="text-sm">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
      </div>
      
    </footer>
    <div className='   bg-blue-600 w-full p-3'></div>
    </div>
  );
};

export default Footer;
