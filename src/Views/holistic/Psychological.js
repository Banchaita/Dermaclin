import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PsychologicalBanner from '../../components/Banner/PsychologicalBanner';

const Psychological = () => {
    return (
        <>
            <Header />
            <TopNav />
            <PsychologicalBanner/>
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Psychological Counselling </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                Counseling Psychology is a generalist health service (HSP) specialty in professional psychology that uses a
                                broad range of culturally-informed and culturally-sensitive practices to help people improve their well-being,
                                prevent and alleviate distress and maladjustment, resolve crises, and increase their ability to function better
                                in their lives.
                            </p>
                        </Col >
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

export default Psychological
