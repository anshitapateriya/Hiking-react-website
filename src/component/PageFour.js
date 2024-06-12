import React from 'react';
import man from '../assets/man.jpeg';

const PageFour = () => {
  return (
    <div className="h-screen bg-cover flex bg-gray-800 text-white mt-12 py-10 items-center justify-center">
      <div className="flex flex-col md:flex-row mx-4 md:mx-auto w-full max-w-4xl">
        <div className="md:w-1/2 md:mr-8 flex flex-col relative items-center">
          <div className="h-48 w-48 md:h-80 md:w-80 rounded-full overflow-hidden flex items-center justify-center">
            <img src={man} alt="Nature" className="h-full w-full object-cover object-center" />
          </div>
          <p className="text-4xl text-blue-500 font-bold mt-8 md:mt-20 italic text-center md:text-left">WALKING IN NATURE AS A RECREATIONAL ACTIVITY</p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-center md:text-left">MOUNTAINEERING ICE CLIMBING</h1>
          <h2 className="text-lg text-center md:text-left font-bold mt-4">2. ACTIVITIES</h2>
          <p className="mt-2 text-center md:text-left">Kundalini is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as Bhagvad Gita Hatha Yoga and Pradipika</p>
          <hr className="my-6 border-none bg-blue-400 h-1" />
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="text-center md:text-left pr-4 mb-4 md:mb-0">
              <p>17 modules divided into 5 weekends</p>
              <p>
                <span>Start</span><br />
                <span>April 15</span><br />
                <span>20.00 hours</span>
              </p>
            </div>
            <div className="text-center md:text-left">
              <p>
                <span class="block">Price</span>
                <span>$900</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
