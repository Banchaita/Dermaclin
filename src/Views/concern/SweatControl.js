import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import SweatControlBanner from '../../components/Banner/SweatControlBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SweatControl = () => {
    return (
        <>
            <Header />
            <TopNav />
            <SweatControlBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Sweat Control</h2>
                        </div>
                        <Col>



                            <p>Sweat stains can tamper your best look! Even though sweating is completely natural, sweating
                                profusely can be embarrassing during social interactions as bacteria grow rapidly in these areas
                                leaving behind an appalling body odour &amp; sweat stains. Hyperhidrosis is a common disorder
                                &amp; can be localized to a certain area or most parts of the body. Excessive underarm sweating,
                                also known as axillary hyperhidrosis, tend to start around puberty.&nbsp; Untreated, these
                                problems can trouble you for life.&nbsp;
                            </p>
                            <p>This is one of the main reasons why many celebs undergo the sweat control treatment to avoid
                                excessive sweating in the midst of their public appearances.
                            </p>
                            <p>
                                &nbsp;The sweat control treatment effectively &amp; safely blocks sweat pores in specific parts
                                of your body.&nbsp; Also, as sweating is a natural process, your body simply reroutes the sweat
                                to different parts of your body. This is the main reason why sweat control is perfect for
                                you!&nbsp; With Dermaclin, you can say goodbye to this irksome problem!&nbsp;&nbsp;
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

export default SweatControl
