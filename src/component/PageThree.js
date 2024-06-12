import React from 'react';
import group from '../assets/group.jpeg';
import girl from '../assets/girl.jpeg';
import boy from '../assets/boy.jpeg';

const PageThree = () => {
  return (
    <div className="bg-gray-100 py-10 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">PLACES TO VISIT IN AUTUMN</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="max-w-xs">
          <div className="overflow-hidden rounded-full h-40 w-40 mx-auto mb-4 md:mb-0">
            <img src={group} alt="Place 1" className="h-full w-full object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Mountain Loop</h3>
            <p className="text-sm">Beautiful destination with colorful autumn foliage.</p>
            <hr className="my-4 h-1 bg-gray-400" />
            <p className="text-gray-700 font-bold">Location 0.3 miles</p>
          </div>
        </div>
        <div className="max-w-xs">
          <div className="overflow-hidden rounded-full h-40 w-40 mx-auto mb-4 md:mb-0">
            <img src={boy} alt="Place 2" className="h-full w-full object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">National Park</h3>
            <p className="text-sm">Scenic spot ideal for witnessing the fall season's beauty.</p>
            <hr className="my-4 h-1 bg-gray-400" />
            <p className="text-gray-700 font-bold">Location 0.2 miles</p>
          </div>
        </div>
        <div className="max-w-xs">
          <div className="overflow-hidden rounded-full h-40 w-40 mx-auto mb-4 md:mb-0">
            <img src={girl} alt="Place 3" className="h-full w-full object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Canyon Trail</h3>
            <p className="text-sm">Discover a peaceful retreat surrounded by autumn colors.</p>
            <div className="my-4 h-1 bg-gray-400"></div>
            <p className="text-gray-700 font-bold">Location 0.3 miles</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-white hover:bg-blue-400 text-black font-bold py-2 px-4 border-2 border-blue-500">See More</button>
      </div>
    </div>
  );
};

export default PageThree;
