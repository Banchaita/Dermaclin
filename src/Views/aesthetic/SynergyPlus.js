import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import SynergyPlusBanner from '../../components/Banner/SynergyPlusBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SynergyPlus = () => {
    return (
        <>
            <Header />
            <TopNav />
            <SynergyPlusBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Synergy Plus</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>
                                An amazing all in one multi step medical facial that combines the benefits of the next level
                                hydra dermabrasion, a chemical peel, automated painless extraction &amp; a special delivery of
                                antioxidants, peptides &amp; hyaluronic acid (for acne scars).&nbsp; All of this is done in one
                                quick treatment with no downtime or irritation.
                            </p>
                            <p><strong>Best suited to treat the following concerns:</strong></p>
                            <ul>
                                <li>Acne</li>
                                <li>Dull skin</li>
                                <li>Glow &amp; maintenance</li>
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

export default SynergyPlus
