import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import HIFUBanner from '../../components/Banner/HIFUBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const HIFU = () => {
    return (
        <>
            <Header />
            <TopNav />
            <HIFUBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">HIFU</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>HIFU (High Intensity Focused Ultrasound) otherwise known as Ultherapy &nbsp;is a 100%,
                                non-invasive, FDA cleared procedure to help you achieve tighter, firmer, lifted skin.&nbsp;</p>
                            <p><strong>How it works:</strong></p>
                            <p>Small targeted amounts of soft tissue are heated below the surface of the skin to contract the
                                tissue &amp; create new collagen. HIFU specifically targets the skin and its deep foundational
                                layer of tissue that would usually be addressed in surgery, but without cutting or disrupting
                                the surface of the skin, bypassing the epidermis during treatment.&nbsp;</p>
                            <p><strong>Benefits:</strong></p>
                            <ul>
                                <li>Results can be seen after 1 session &amp; actual results over 2&ndash;3 months of the<br />
                                    procedure.</li>
                                <li>Tighter, firmer &amp; lifted skin.</li>
                                <li>A complete non-invasive &amp; non-surgical procedure. &nbsp;</li>
                                <li>No cuts, scarring or stitches.</li>
                                <li>Zero downtime.</li>
                                <li>Provides for natural collagen formation.</li>
                            </ul>
                            <p><strong>Things to know:</strong></p>
                            <ul>
                                <li>Skin feels tighter with a mild sensitivity to touch; however this will last up to 48 hours.
                                    After three days, your skin will feel back to normal.</li>
                                <li>Actual Results are visible after 6 to 8 weeks and improve further over time. Collagen
                                    induction process continues to work for another six months after the treatment.</li>
                                <li>The treated area maybe flushed, reddened and feel tingly.</li>
                                <li>It is normal for the area to feel tender immediately after the procedure.</li>
                                <li>We recommend no sun exposure for 24 to 48 hours after the treatment.</li>
                                <li>No strenuous exercise for 24 to 48 hours.</li>
                                <li>Temporary bruising and numbness in the treated area can also occur (although this is rare)
                                </li>
                                <li>Apply a gentle cream gel every 4 to 6 hours for up to 72 hours&rsquo; post treatment.</li>
                            </ul>
                            <p><strong>Best suited to treat the following concerns:</strong></p>
                            <ul>
                                <li>Fine lines &amp; wrinkles</li>
                                <li>Cellulite &amp; Loose skin</li>
                                <li>Double chin reduction</li>
                                <li>Sagging &amp; Aging</li>
                                <li>Facial Remodelling</li>
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

export default HIFU
