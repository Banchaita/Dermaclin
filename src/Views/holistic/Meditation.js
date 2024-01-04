import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Meditationbanner from '../../components/Banner/Meditationbanner';


const Meditation = () => {
    return (
        <>
            <Header />
            <TopNav />
            <Meditationbanner/>
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Meditation </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                Meditation is an ancient practice that dates back thousands of years.
                                Despite its age, this practice is common worldwide because it has benefits for brain
                                health and overall well-being. With the help of modern technology, researchers continue
                                to expand their understanding of how meditation helps people and why it works.
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

export default Meditation
