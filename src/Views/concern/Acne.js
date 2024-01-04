import React from 'react'
import AcneBanner from '../../components/Banner/AcneBanner'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Acne = () => {
    return (
        <>
            <Header />
            <TopNav />
            <AcneBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Acne</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                Acne is a common & frustrating skin ailment that disrupts your overall look. That's why its onset can be
                                extremely stressful to many. Acne is developed when the oil from your skin, instead of being eliminated from
                                your body, gets clogged in the roots of your hair follicles along with the dead skin.
                            </p>
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

export default Acne