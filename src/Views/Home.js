import React from 'react'
import { Banner, Footer, Header, TopNav } from '../components/Layout'
import HomeService from '../components/Home-Service'
import WhyChoose from '../components/WhyChoose'
import Experts from '../components/Experts'
import HAPPYCLIENT from '../components/HAPPYCLIENT'



const Home = () => {
  return (
    <>
        <Header/>
        <TopNav/>
        <Banner/>
        <HomeService/>
        <WhyChoose/>
        <Experts/>
        <HAPPYCLIENT/>
        <Footer/>

    </>
  )
}

export default Home