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
      <section class="experts-area g-sec-pad">
        <Container>
          <Row>
            <Col>
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
          <Col md="auto">
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
