import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import PlateletRichPlasmaBanner from '../../components/Banner/PlateletRichPlasmaBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PlateletRichPlasma = () => {
    return (
        <>
            <Header />
            <TopNav />
            <PlateletRichPlasmaBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Platelet Rich Plasma</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Platelet Rich Plasma method of restoration, better known as PRP, is FDA (U.S) approved therapy
                                best known for its 100% natural process &amp; safe implementation. It also yields zero
                                side-efects, and this is why it is hailed as one of the most reliable &amp; quickest hair
                                restoration therapies. And at Calee, you get the best of it.</p>
                            <p><strong>How PRP works?</strong><br />
                                Our body can heal itself once it gets the right nutrition and care. Under the PRP process, our
                                experts extract the growth factors from the plasma in your blood platelets. This growth factor
                                is then processed &amp; the enriched cells are injected into the scalp, thus breathing life back
                                into it.<br />
                                <br />
                                <strong>A minimum of 3 to 6 Sessions are required to achieve results.</strong>
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

export default PlateletRichPlasma
