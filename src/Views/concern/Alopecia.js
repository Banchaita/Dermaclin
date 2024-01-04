import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import AlopeciaBanner from '../../components/Banner/AlopeciaBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Alopecia = () => {
    return (
        <>
            <Header />
            <TopNav />
            <AlopeciaBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Alopecia</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>

                            <p>
                                Alopecia areata is a type of hair loss that occurs when your immune system mistakenly attacks
                                hair follicles, which is where hair growth begins. The damage to the follicle is usually not
                                permanent. Alopecia areata is most common in people younger than 20, but children and adults of
                                any age may be affected. Women and men are affected equally.&nbsp; This usually begins with
                                clumps of hair falling out leaving smooth, bald patches on the scalp.&nbsp; This hair loss comes
                                &amp; goes with hair growing back in one area &amp; falling out in another.&nbsp; About 10% of
                                people generally can never regrow hair.&nbsp;
                            </p>
                            <p>Because hair is an important part of appearance, hair loss can result in feeling unattractive
                                and underconfident.&nbsp; At Dermaclin we can help change that with our advanced hair
                                restoration
                                programs.&nbsp;
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

export default Alopecia
