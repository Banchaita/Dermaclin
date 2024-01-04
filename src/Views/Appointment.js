import React from 'react'
import { Footer, Header, TopNav } from '../components/Layout'
import { Col, Container, Row } from 'react-bootstrap'
import QueryFrom from '../components/QueryFrom'
import AboutBanner from '../components/Banner/AboutBanner'


const Appointment = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <AboutBanner/>
        <Container>
              <div className="section-heading">
                  <h2 className="ed-heading client-exp banner-title mt-5" >Book Appointment</h2>
              </div>
            <Row>
                <Col>
                    <QueryFrom/>
                </Col>
            </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default Appointment
