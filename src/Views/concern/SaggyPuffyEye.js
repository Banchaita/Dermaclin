import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import SaggyPuffyEyebanner from '../../components/Banner/SaggyPuffyEyebanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SaggyPuffyEye = () => {
    return (
        <>
            <Header />
            <TopNav />
            <SaggyPuffyEyebanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Saggy Puffy Eye</h2>
                        </div>
                        <Col>


                            <p>
                                An accumulation of free radicals due to an unhealthy diet of processed foods causes cellular
                                damage &amp; results in bags under the eyes, wrinkles, droopy eyelids &amp; loss of skin
                                elasticity.&nbsp; Puffy eyes are also caused by the weakening of muscles supporting the eyelids
                                &amp; the fat that supports the eyes movement of the lower eyelids, making them look puffy &amp;
                                swollen. Some of the other causes for saggy &amp; puffy eyes are as follows:
                            </p>

                            <p>
                                <div><b>- Lifestye</b></div>
                                <div><b>- Skin Diseases</b></div>
                                <div><b>- Infections</b></div>
                                <div><b>- Allergies</b></div>
                                <div><b>- Blepharochalasis</b></div>
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

export default SaggyPuffyEye
