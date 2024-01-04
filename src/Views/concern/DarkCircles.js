import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DarkCirclesBanner from '../../components/Banner/DarkCirclesBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DarkCircles = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DarkCirclesBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Dark Circles</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>


                            <p>
                                Dark Circles are the dark blemishes or discolouration under the eyes that make you look
                                exhausted, tired &amp; older
                            </p>
                            <p>The formation of dark circles can indicate that you are starving on a cellular level. This
                                means that your body may be running short of essential nutrients such as iron, zinc or vitamins
                                C, E &amp; A.&nbsp; Genetics &amp; Ageing is another factor that greatly contributes to the
                                formation of dark circles. There are also many other factors such as pigmentation, improper
                                blood circulation, Stress, lack of sleep &amp; an unhealthy diet that result in the formation of
                                dark circles
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

export default DarkCircles