import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Update = () => {
    let location=useLocation();
    let data=location.state.x;
    console.log(data);
    
  return (
    <>
    <Navbar/>
    <img id="pix" src={data.webformatURL} alt="" />
    <Footer/>
    </>

  )
}

export default Update
