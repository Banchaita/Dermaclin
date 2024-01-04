import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HIFUBodybanner from '../../components/Banner/HIFUBodybanner';

const HIFUBody = () => {
    return (
        <>
            <Header />
            <TopNav />
            <HIFUBodybanner/>
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">HIFU Body </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                HIFU is a non-invasive treatments for fat loss, weight loss, toning and skin tightening. HIFU
                                Body treatments are the latest in non-invasive technology to target specific focused areas of
                                fat in the quickest way possible.&nbsp;
                            </p>

                            <p>
                                Focused energy is delivered at a depth of 1.3cm to 13mm to destroy fat cells &amp; tighten the
                                skin. This energy increases in temperature as it gets deeper within the skin causing cellular
                                friction. The destroyed cells are flushed out through the lymphatic system over a period of
                                time.
                            </p>
                            <p>
                                The procedure targets the fat cells by focussing high intensity, high frequency ultrasound
                                energy
                                on a targeted area of the body causing temperature to rise above 56&deg;C in the subcutaneous
                                fat layer beneath the skin. The damaged fat cells are then naturally processed and rejected by
                                the body&rsquo;s immune system in a few weeks. HIFU body contouring treatment is a proven and
                                completely safe, FDA approved procedure for getting rid of stubborn fat in your abdomen, flanks,
                                hips, thighs and buttocks.
                            </p>
                            <p><strong>Which areas can be treated?</strong></p>
                            <ul>
                                <li>Body areas which are treatable with our HIFU technology include:</li>
                                <li>Abdomen</li>
                                <li>Inner thighs</li>
                                <li>Outer thighs</li>
                                <li>Hips</li>
                                <li>Buttocks</li>
                                <li>Inner arms</li>
                                <li>D&eacute;colletage (Upper Chest Area)&nbsp;</li>
                                <li>Underneath of Upper Arms</li>
                                <li>Full Stomach Area&nbsp;</li>
                                <li>Knees</li>
                                <li>Back</li>
                            </ul>
                            <p><strong>Benefits:</strong></p>
                            <ul>
                                <li>Destroys fat cells</li>
                                <li>Reduces cellulite</li>
                                <li>Firms and tightens the skin</li>
                                <li>Increases the elasticity of skin</li>
                                <li>Smoothens skin texture</li>
                                <li>Clinically Proven&nbsp;</li>
                                <li>Safe and Effective&nbsp;</li>
                                <li>Cost effective alternative to a Surgical Face Lift&nbsp;</li>
                                <li>No need for Anaesthesia or Sedation&nbsp;</li>
                                <li>No incisions or risk of infection&nbsp;</li>
                                <li>No downtime&nbsp;</li>
                                <li>Comfortable and painless treatment&nbsp;</li>
                                <li>Results can be seen after just one treatment&nbsp;</li>
                                <li>Results can last for 2 years plus&nbsp;</li>
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

export default HIFUBody