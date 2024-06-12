import React from 'react';
import activity from '../assets/activity.png';
import hiking from '../assets/hikee.jpg';
import mountain from '../assets/mountain.jpg';

const PageOne = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center md:text-left md:ml-8">
        <h1 className="text-4xl font-semibold mb-4">HIKING AND CAMPING</h1>
        <h2 className="text-2xl font-bold mb-8">CLASSES</h2>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="w-full md:w-1/3 overflow-hidden mx-4 md:mx-8 mb-8">
          <img src={activity} alt="Hiking" className="w-24 h-24 object-cover object-center mx-auto mb-4" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Hiking Class</h3>
            <p className="text-sm text-gray-600">Learn the essentials of hiking in this interactive class.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 overflow-hidden mx-4 md:mx-8 mb-8">
          <img src={hiking} alt="Camping" className="w-24 h-24 object-cover object-center mx-auto mb-4" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Camping Class</h3>
            <p className="text-sm text-gray-600">Explore the fundamentals of camping with experienced instructors.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 overflow-hidden mx-4 md:mx-8">
          <img src={mountain} alt="Outdoor Skills" className="w-24 h-24 object-cover object-center mx-auto mb-4" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Outdoor Skills Class</h3>
            <p className="text-sm text-gray-600">Enhance your outdoor skills in this hands-on educational session.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
