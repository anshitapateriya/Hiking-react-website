import React from 'react';
import back from '../assets/background.jpg'

const Top = () => {
  const headerStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };
  const textStyle ={
    position: 'absolute',
    top: '40%',
    left: '3%', 
    transform: 'translateY(-50%)',
    color: '#fff',
    padding: '20px',
    maxWidth: '400px', 

  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%', 
    background: 'linear-gradient(to right bottom, #2d3748 50%, transparent 50%)',
  };

  return (
    <header className="h-screen bg-cover bg-center relative" style={headerStyle}>
      <div className="absolute inset-0 flex items-center">
        <div className="ml-10 text-white">
          <div style={overlayStyle}>
          <div style={textStyle}>
          <h1 className="text-4xl font-bold leading-tight">Discover Your Next Hike</h1>
          <h3>Discover Your Next Hike</h3>
          <p className="mt-4 text-lg">Embark on a journey to explore and discover new hiking trails, where every path leads to an adventure waiting to be uncovered.</p>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
