import logo from './logo.svg';
import React from "react";
import Nav from './component/Navbar'; 
import Top from './component/Top';
import PageOne from './component/PageOne';
import PageTwo from './component/PageTwo';
import PageThree from './component/PageThree';
import PageFour from './component/PageFour';
import PageFive from './component/PageFive';
import Footer from './component/Footer';

import './index.css';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Top/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <Footer/>

    </div>
  );
}

export default App;
