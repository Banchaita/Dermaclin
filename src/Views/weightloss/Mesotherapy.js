import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BodyMesotherapyBanner from '../../components/Banner/BodyMesotherapyBanner]';

const WeightlessMesotherapy = () => {
    return (
        <>
            <Header />
            <TopNav />
            <BodyMesotherapyBanner/>
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Body Mesotherapy </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                Mesotherapy is now used as a minimally invasive procedure in which medication is micro-injected
                                into targeted areas to shape your body and to treat excess fat and cellulite that you have
                                trouble getting rid of with diet and exercise.
                            </p>

                            <p>
                                Mesotherapy introduces fat melting medications directly into your areas of concern. When added
                                to
                                a weight loss regimen, injections oxidize fat, shrink cells, weaken connective tissue and
                                increase cell production. Fat released into the body is metabolized during exercise. Mesotherapy
                                sessions are used alongside exercise and diet regimens rather than as an alternative to them.
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

export default WeightlessMesotherapy
