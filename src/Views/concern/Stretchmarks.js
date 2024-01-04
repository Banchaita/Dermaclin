import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import Stretchmarksbanner from '../../components/Banner/Stretchmarksbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Stretchmarks = () => {
    return (
        <>
            <Header />
            <TopNav />
            <Stretchmarksbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Stretch Marks</h2>
                        </div>
                        <Col>


                            <p>
                                Stretch marks are quite tricky! They can show up on the private parts of your body such as the
                                glutes, shoulders or stomach. Either way, to get the perfect skin tone &amp; texture for
                                yourself, these streaks or stretches have to go!
                            </p>
                            <p><b>Why do stretch marks occur?</b></p>

                            <p>
                                A sudden drop or rise in your body weight is the main reason behind why stretch marks are
                                formed. The problem is quite common for men &amp; women. Hormonal changes, muscle gain due to
                                body-building, pregnancy are just some of the conditions during which the elastic layer of our
                                skin is tested. Sometimes, however, the elastic threshold of the skin is exceeded resulting in
                                tears in the epidermis resulting in stretch marks.
                            </p>

                            <p>With stretch marks on your body, wearing a low-cut or a sleeveless shirt or a short dress can
                                be a big problem.</p>
                            <p>But at Dermaclin, we've got you covered! We provide you with the highest rated treatments &amp;
                                therapies to minimise stretch marks on your body</p>



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

export default Stretchmarks