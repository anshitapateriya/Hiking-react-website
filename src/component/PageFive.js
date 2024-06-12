import React from 'react';
import jumping from '../assets/jumping.jpg'
import logo from '../assets/hiking logo.jpeg'


const PageFive = () => {
    return (
        <div className="relative md:h-screen ">
            <img src={jumping} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="flex flex-col items-center justify-center h-full relative z-10 text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold max-w-lg italic">The asanas purify our body and keep it healthy, making a suitable vehicle for soul</h1>
                <img src={logo} alt="Logo" className="mt-12 h-16"/>
                <button className="bg-transparent hover:bg-blue-400 text-white font-bold py-2 px-4 border-2 border-blue-500 mt-28">See More</button>
            </div>
        </div>
    );
};

export default PageFive;
