import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import TattooRemovalBanner from '../../components/Banner/TattooRemovalBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const TattooRemoval = () => {
    return (
        <>
            <Header />
            <TopNav />
            <TattooRemovalBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Tattoo Removal</h2>
                        </div>
                        <Col>



                            <p>Getting inked seems quite exciting at first! But don't worry, feeling regretful about it later
                                is also quite common. The wrong tattoo can often project something about you that is
                                incorrect.&nbsp; &nbsp;While tattoos were once considered permanent, it is now possible to
                                remove them with treatments, fully or partially.&nbsp; Laser tattoo removal usually refers to
                                the non-invasive removal of tattoo pigments using a Q-switched laser. Typically, black and other
                                darker-colored inks can be removed completely.&nbsp;
                            </p>

                            <p>
                                At Dermaclin, a permanent tattoo isn't a permanent problem.&nbsp;
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

export default TattooRemoval
