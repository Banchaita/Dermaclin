import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import PRPbanner from '../../components/Banner/PRPbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PRP = () => {
    return (
        <>
            <Header />
            <TopNav />
            <PRPbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Platelet Rich Plasma</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>PRP is a restorative agent extracted from your blood. It is used in a plethora of medical
                                applications for example in hair restoration, skin rejuvenation, acne &amp; scar&nbsp;
                                &nbsp;reduction etc.</p>
                            <p><strong>How it works?</strong></p>
                            <p>PRP is naturally produced in your body &amp; therefore it is 100% organic safe &amp; free from
                                side-effects. After extracting a small amount of blood from you, we subject it to centrifugal
                                separation to separate the Platelet Rich Plasma from it.</p>
                            <p>This PRP is then micro-injected back into your targeted part of your skin. This provides a boost
                                of rich nutrients to your skin and helps the skin tissue in growing new &amp; healthier cells.
                                It facilitates the growth of your own collagen and also naturally tightens the skin. This way,
                                PRP creases out wrinkles and provides a youthful texture to your skin.</p>
                            <p><strong>How many PRP sessions must I undergo?</strong></p>
                            <p>We recommend up to 3 sessions for the best results!</p>
                            <p><strong>Best suited to treat the following concerns:</strong></p>
                            <ul>
                                <li>Acne Scars</li>
                                <li>Dark Circles</li>
                                <li>Sunken Eyes</li>
                                <li>Dilated pores</li>
                                <li>Sagging &amp; aging</li>
                                <li>Fine lines &amp; wrinkles</li>
                                <li>Pigmentation</li>
                                <li>Tanning &amp; uneven skin</li>
                                <li>Melasma</li>
                                <li>Hair loss</li>
                            </ul>
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

export default PRP
