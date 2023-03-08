import React from 'react'
import Footer from '../../components/Footer/Footer';
import HomeContent from '../../components/HomeContent/HomeContent';
import Topbar from '../../components/Topbar/Topbar';
import "./home.css";

const Home = () => {
  return (
    <div className='container'>
      <Topbar />
        <HomeContent />
      <Footer />
    </div>
  )
}

export default Home