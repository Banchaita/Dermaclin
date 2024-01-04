import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import YogaBanner from '../../components/Banner/YogaBanner';

const Yoga = () => {
    return (
        <>
            <Header />
            <TopNav />
            <YogaBanner/>
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Yoga </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                Yoga can help with weight loss by promoting mindfulness, boosting metabolism, reducing stress,
                                improving strength and flexibility, balancing hormones, and increasing mind-body awareness. Specific
                                Yoga poses like Surya Namaskar, Warrior Poses are very effective for weight loss.
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

export default Yoga
