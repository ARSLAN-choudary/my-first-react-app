import logo from '.././logo.svg';
import '../App.css';
import Pictures from './Pictures';
import Pic2 from './pic2';
import Mobile from './Mobile';
import Pic3 from './Pic3';
import Pic4 from './Pic4';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState } from 'react'






function App() {
  const[mode,setMode]=useState(`light`);
  const toggleMode=()=>{
    if(mode===`light`){
      setMode(`dark`);
      document.body.style.backgroundColor=`#303030`
     
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor=`white`
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>


 <section className='main'>
  <div className='container'>
    <div className='row'>
     <div className='col'>
      <h2>About programming</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      
     </div>
     <div className='col'>
     <Pictures/>
     </div>
     <hr className='my-5'/>
    </div>
    
    <div className='row'>
      <div className='col'>
        <Pic2/>
      </div>
      <div className='col'>
        <h2>About Dekstop</h2>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <hr/>
        <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    </div>
    <div className='row'>
      <hr className='my-5'/>
       <div className='col'>
        <Mobile/>
        <h3 className='my-3'>Mobile Applications</h3>
        <p>Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. </p>
       </div>
       <div className='col'>
        <Pic3/>
        <h3  className='my-3'>Certifications</h3>
        <p>
        An IT certification is a recognized benchmark mapped to a specific skill set based on standardized testing. A certification demonstrates your dedication, motivation and technical knowledge on a specific platform.
        </p>
       </div>
       <div className='col'>
        <Pic4/>
        <h3  className='my-3'>Development</h3>
        <p>Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. </p>
       </div>
    </div>
    <div className='row'>
        <div className='col my-5'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/lLeZ8Cr2YVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
  </div>
  </section>
  <section>
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <Card1/>
        </div>
        <div className='col'>
        <Card2/>
        </div>
        <div className='col'>
        <Card3/>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col'>
            <Footer/>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default App;
