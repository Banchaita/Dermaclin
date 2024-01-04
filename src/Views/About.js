import React from 'react'
import { Footer, Header, TopNav } from '../components/Layout'
import AboutBanner from '../components/Banner/AboutBanner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QueryFrom from '../components/QueryFrom';


const About = () => {
  return (
    <>
      <Header />
      <TopNav />
      <AboutBanner />
      <section className="experts-area g-sec-pad">
        <Container>
          <Row>
            <div className="section-heading">
              <h2 className="g-heading ed-heading client-exp banner-title mt-5">About Us</h2>
            </div>
            <Col xs={12} md={12} sm={12} lg={6}>
                <p className='para-one'>
                  Welcome  to Dermaclin help people live healthy, happy &amp;confident.
                </p>
                <p>
                  As a beacon of excellence in the region, we take pride in our commitment to your well-being through
                  a unique blend of expertise, holistic care, cutting-edge technology, and an international team of esteemed professionals.
                </p>

                <p>
                  At Dermaclin, we redefine healthcare with a holistic approach that addresses your physical, emotional, and aesthetic needs.
                  Our world-class team of experts, hailing from diverse corners of the globe, collaborates seamlessly to provide you with
                  the highest standards of care. Whether you seek medical attention, aesthetic enhancement, or a journey to holistic wellness,
                  our clinic stands as your number one choice in Mohali.
                </p>


                <p>
                  With our unwavering dedication to your health, beauty, and overall quality of life,Dermaclin invites you to
                  experience a new dimension in healthcare excellence.Welcome to a place where expertise knows no bounds and your well-being
                  is our foremost priority.
                </p>
          </Col>
          <Col xs={12} md={12} sm={12} lg={6}>
            <div>
              <QueryFrom/>
            </div>
          </Col>
        </Row>

      </Container>
    </section >
      <Footer />

    </>
  )
}

export default About
