import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import FaceMesotherapyBanner from '../../components/Banner/FaceMesotherapyBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const FaceMesotherapy = () => {
    return (
        <>
            <Header />
            <TopNav />
            <FaceMesotherapyBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Mesotherapy</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Mesotherapy is a 100% safe &amp; organic alternative to surgical &amp; scarring cosmetic
                                procedures.&nbsp;</p>
                            <p><strong>How it works:&nbsp;</strong></p>
                            <p>As the amount of oxygen absorbed by skin decreases with age, many of your skin&#39;s toxins do
                                not get ushed out. Vitamins, minerals and amino acids are delivered directly into the skin to
                                nourish, rejuvenate, promote production of collagen and elastin, and stimulate your
                                metabolism.&nbsp;</p>
                            <p>This technique is also used to deliver lightening agents, such as Vitamin C, directly into the
                                skin layers for hyper pigmentation or the administering of hyaluronic acid into scar effected
                                areas.</p>
                            <p><strong>How many Meso sessions must I undergo?&nbsp;</strong></p>
                            <p>We recommend a minimum of 4 to 6 sessions for best results?</p>
                            <p><strong>Best suited to treat the following concerns:</strong></p>
                            <ul>
                                <li>Pigmentation</li>
                                <li>Tanning &amp; uneven skin tone</li>
                                <li>Marks &amp; age spots</li>
                                <li>Melasma</li>
                                <li>Alopecia</li>
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

export default FaceMesotherapy
