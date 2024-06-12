import React from 'react';
import man from '../assets/man.jpeg';

const PageTwo = () => {
  return (
    <div className="bg-gray-100 py-10 flex flex-col md:flex-row">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 pr-4 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">ROCK CLIMBING</h1>
          <h2 className="text-xl font-semibold mb-6">1. CLASSES & EVENTS</h2>
          <p className="text-lg mb-6">
            Hatha is the most classic yoga. It's origin is in the Raya Yoga of Patanjali and other classic texts such as Bhagwat Gita Hatha Yoga and Pradipika
          </p>
          <hr className="my-6 h-1 bg-blue-400" />
          <p className="text-gray-700">10 modules divided into 7 weekends.</p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start">
            <div className="text-left m-4 md:text-left pr-4 md:pr-8">
              <p>
                <span>Start</span><br />
                <span>April 15</span><br />
                <span>20.00 hours</span>
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className='flex md:flex-col p-2 m-2'>
                <span class="block">Price</span>
                <span> $900</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={man} alt="Rock Climbing" className="w-2/3 md:w-48 h-2/3 md:h-48 object-cover rounded-full mb-4 md:mb-0" />
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
