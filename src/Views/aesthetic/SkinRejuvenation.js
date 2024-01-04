import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import SkinRejuvenationbanner from '../../components/Banner/SkinRejuvenationbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SkinRejuvenation = () => {
    return (
        <>
            <Header />
            <TopNav />
            <SkinRejuvenationbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Skin Rejuvenation</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Skin Rejuvenation technology is a non-surgical procedure that tones, lifts &amp; smoothens your
                                skin. It brings back the youthful glow to your skin by stimulating the collagen present it by
                                delivering the right amount of heat energy.&nbsp; This procedure also helps to address saggy
                                &amp; puffy eyes.&nbsp;</p>
                            <p>&nbsp;</p>
                            <p><strong>How does it work?</strong></p>
                            <p>Radio frequency delivers controlled heat to volumetric tissue in the body. Bipolar Radiofrequency
                                is effective on thin and delicate skin such as the face, making it suitable to target fine lines
                                and wrinkles.</p>
                            <p><strong>Benefits:</strong></p>
                            <ul>
                                <li>Correction of saggy, puffy eyes.</li>
                                <li>The tightening of sagging skin around&nbsp; the jowls and neck tightening and
                                    smoothing&nbsp; of skin resulting in a reduced appearance of fine lines and wrinkles.</li>
                                <li>A reduction in the appearance of double chins.</li>
                                <li>A complete non-invasive &amp; non-surgical procedure.</li>
                                <li>No cuts, scarring or stitches.&nbsp;&nbsp;</li>
                                <li>Zero downtime.</li>
                                <li>Provides for natural collagen formation.</li>
                            </ul>
                            <p><strong>How many sessions should I opt for?</strong></p>
                            <p>We recommend minimum 6-10 sessions for best results!</p>
                            <p><strong>Indications:</strong></p>
                            <ul>
                                <li>Dark Circles &amp; Puffy Eyes</li>
                                <li>Upper eyelid lifting and wrinkle removal;</li>
                                <li>Lifting &amp; toning</li>
                                <li>Saggy &amp; puffy eyes</li>
                                <li>Cellulite &amp; loose skin</li>
                                <li>Double chin</li>
                                <li>Sagging &amp; aging</li>
                                <li>Fine lines &amp; wrinkles</li>
                            </ul>
                            <p><strong>Contraindications:</strong></p>
                            <ul>
                                <li>Pacemaker and defibrillator in body</li>
                                <li>Metal under treated skin</li>
                                <li>With skin diseases or cancer history</li>
                                <li>With other serious disease, such as heart disease or diabetes</li>
                                <li>Gestation period and breast-feed</li>
                                <li>With thermal stimulus history</li>
                                <li>Open wounds</li>
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

export default SkinRejuvenation
