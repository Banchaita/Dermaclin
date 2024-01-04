import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import Frecklesbanner from '../../components/Banner/Frecklesbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Freckles = () => {
    return (
        <>
            <Header />
            <TopNav />
            <Frecklesbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Freckles </h2>
                        </div>
                        <Col>

                            <p>
                                Freckles are the brown spots that usually pop-up due to age, overexposure to the sun or can
                                also be genetic in nature. However, the biggest culprit in their onset is the UV damage to your
                                skin. Freckles are usually clustered everywhere on the face, neck or can also show up on your
                                body as well.&nbsp;&nbsp;
                            </p>
                            <p>It is important to know whether your freckles are because of the sun, genetic or age-concerned,
                                its treatment remains the same due to its structure. Their severity can be observed in stages,
                                hence, if you see their onset early on, its best you act fast.&nbsp;
                            </p>
                            <p>
                                Dermaclin's Qswitch NDYag Lazer is the latest technology to treat Freckles.&nbsp; Q -Switch laser
                                creates an invisible beam of light that specifically targets the brown pigment or melanin
                                present in the dark spots without having any affect on the surrounding skin. The pigment absorbs
                                the laser energy and gets fragmented within the skin's tissues, thereby giving you a smooth and
                                even skin tone. The laser reaches deeper areas where products or peels etc do not
                                reach.&nbsp;&nbsp;
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

export default Freckles
