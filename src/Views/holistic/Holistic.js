import React from 'react'
import {Header,Footer, TopNav } from '../../components/Layout'
import HolisticBanner from '../../components/Banner/HolisticBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HolisticService from '../../components/Holistic-Service';
import FAQ from '../../components/FAQ';

const Holistic = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <HolisticBanner/>
      <section className="experts-area g-sec-pad">
        <Container  className='holistic-area'>
          <Row>
            <div className="section-heading">
              <h2 className="g-heading ed-heading client-exp banner-title">Holistic</h2>
            </div>
            <Col>
              <p><strong>HARMONY OF HEALTH: EMBRACE WELLNESS WITH HOLISTIC MEDICINE</strong></p>
              <p> 
                Discover the transformative power of Holistic Medicine at Dermaclin, guided by the expertise of Dr.Shivani.
                Dr.Shivani, a renowned practitioner in the field, brings a wealth of knowledge and a compassionate approach to holistic healing.
                With a focus on treating the whole person—mind, body, and spirit—Dr. Shivani empowers individuals on their wellness journeys, combining
                traditional and alternative therapies to promote balance, vitality, and optimal health.
                At Dermaclin, you'll find a sanctuary of well-being where holistic medicine flourishes under the care of Dr.Shivani.
              </p>
            </Col>
          </Row>
        </Container>
        <HolisticService/>
        <FAQ/>

        <Container fluid className="book-app">
          <div className="section-heading">
            <h2 className="ed-heading banner-title mt-5" >Book Appointment</h2>
          </div>
          <Row>
            <Col>
              <QueryFrom />
            </Col>
          </Row>
        </Container>



        
      
      </section >
      <Footer/>
    </>
  )
}

export default Holistic
