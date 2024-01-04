import React from 'react'
import { Footer, Header, TopNav } from '../components/Layout'
import AboutBanner from '../components/Banner/AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'
import QueryFrom from '../components/QueryFrom'


const Contact = () => {
    return (
        <>
            <Header />
            <TopNav />
            <AboutBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Contact Us</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                <p><strong>Clinic Address: </strong></p>
                                <p>
                                    <b># HM-125, Phase-3B1,</b><br />
                                    <b>Sector 60 Mohali - 160059 (Near Rose Garden)</b><br />
                                    <b>Contact No. +91 9465587840</b><br />
                                    <b>Email: Dermaclin125@gmail.com </b><br />
                                </p>
                            </p>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <QueryFrom />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12} lg={12} >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.201771554751!2d76.71719707503671!3d30.712727586600177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef67cfb237fd%3A0xe2aa70af0c2d8592!2sthe%20DERMACLIN%20-%20SKIN%20AND%20CARE!5e0!3m2!1sen!2sin!4v1701242481742!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">

                            </iframe>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />

        </>
    )
}

export default Contact