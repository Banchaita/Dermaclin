import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FIRDetoxBanner from '../../components/Banner/FIRDetoxBanner';

const FIRDetox = () => {
    return (
        <>
            <Header />
            <TopNav />
            <FIRDetoxBanner/>
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">FIRDetox </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                We are exposed to hundreds of chemicals a day and not all of these can be processed by the body.
                                The FIR Detox program helps to improve blood circulations targets subcutaneous fat, and body
                                heating, triggers your sweat mechanism and dumps toxins straight out of your body through this
                                channel.
                            </p>

                            <p><strong>Benefits:</strong></p>
                            <ul>
                                <li>Fitness</li>
                                <li>Weight Management</li>
                                <li>Anti-Ageing</li>
                                <li>Detoxification</li>
                                <li>Stress Management</li>
                                <li>Preventive Health Care</li>
                                <li>Skin Rejuvenation</li>
                                <li>Helps control Diabetes, Cholestrol, Blood Pressure, Arthritis and has various other health
                                    benefits.&nbsp;</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <div>
                                <QueryFrom />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section >
            <Footer />
        </>
    )
}

export default FIRDetox
