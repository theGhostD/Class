import React from 'react'
import Footer from '../../components/Footer/Footer';
import HomeContent from '../../components/HomeContent/HomeContent';
import Topbar from '../../components/Topbar/Topbar';
import MainLogin from '../Login/mainLogin/mainLogin';
import "./home.css";

const Home = () => {
  return (
    <div className='container'>
      <Topbar />
        <HomeContent />
       
      <Footer />
      {/* <MainLogin/>/ */}
    </div>
  )
}

export default Home