import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DullSkinBanner from '../../components/Banner/DullSkinBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DullSkin = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DullSkinBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Dull Skin</h2>
                        </div>
                        <Col>


                            <p>
                                <b>Goodbye dullness - hello radiance!&nbsp;<br /></b><br />The skin is the largest single-organ of
                                our body, but above that, it is the shield against pretty much everything in the world. It is
                                imperative that we keep it perfect &amp; glowing so that it gives us the confidence &amp; zest
                                to face just about anything.&nbsp; <br />
                            </p>

                            <p>In today's unforgiving environment, we are exposed to more UV rays, more potent pollutants and
                                above all - an astronomical level of stress! Skin cells are mostly composed of water, so they
                                operate best in a hydrated environment.&nbsp; Dehydration also has a damaging effect on skin
                                making it look dull &amp; wrinkled. Dehydrated skin can include epidermal dehydration, dermal
                                dehydration or both. In the presence of all these factors, our skin health suffers
                                immensely.&nbsp; As our skin begins to lose its youthful glow; dullness &amp; uneven texture
                                become more prominent.&nbsp; &nbsp;<br /><br />At Dearmaclin, we've got an array of treatments and
                                therapies for you to help revitalise &amp; rejuvenate your skin back to its glorious &amp;
                                youthful look!&nbsp;&nbsp;
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

export default DullSkin