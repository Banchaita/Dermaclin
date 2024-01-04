import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DoubleChinBanner from '../../components/Banner/DoubleChinBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DoubleChin = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DoubleChinBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Double Chin</h2>
                        </div>
                        <Col>


                            <p>
                                Having a double chin can add years to age. There are numerous reasons that lead to the
                                formation of a double chin. It can be due to genetics, excess weight or can also be triggered
                                with age. The lower part of our face, i.e. just below our chin, is a naturally flat area.
                                However, with age, the collagen in our skin weakens, thus resulting in the loss of tightness and
                                suppleness. This gives way to saggy skin right underneath our jaw, which in turn, shows up as
                                the double chin.&nbsp;&nbsp;
                            </p>
                            <p>The same part is also a place where our body stores fat. If we happen to gain a lot of weight,
                                it shows up here. This is the second factor that gives way to the formation of the double
                                chin.&nbsp;
                            </p>
                            <p>
                                At Dermaclin, we provide you with a 100% non-invasive treatment to tighten up your skin &amp;
                                give
                                you a more contoured neckline!&nbsp;
                            </p>
                            <p>
                                Explore our time-tested treatments &amp; therapies here:&nbsp;
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

export default DoubleChin