import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DarkThinLipBanner from '../../components/Banner/DarkThinLipBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DarkThinLip = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DarkThinLipBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Dark Thin Lip</h2>
                        </div>
                        <Col>



                            <p><b>Treatment for dark, thin lips and more!</b></p>

                            <p>Our lips become the centre of attention when we speak and communicate. This is why many men
                                &amp; women are always conscious of how their lips look &amp; how they're shaped. There are many
                                factors that can affect your lips and their appearance. From something as simple as drinking
                                less water to smoking can change the colour &amp; texture of your lips.&nbsp;
                            </p>

                            <p>
                                While thin lips can be natural, lips also get thinner as you age.&nbsp; Collagen is what gives
                                elasticity &amp; volume to your skin. Thin lips are generally due to the lack or loss of
                                collagen in the skin.
                            </p>
                            <p>
                                Discolouration, darkening, wrinkle-formation on the lips are some of the common issues faced by
                                many. But that's not all, the lip shape &amp; volume is also an issue that troubles many. Having
                                a thin or an asymmetrical lip structure can chip away at your overall look. Sometimes, it's
                                quite normal to think of adding more definition to your lips to enhance your overall natural
                                look.
                            </p>
                            <p>Get Perfect, fuller lips for the perfect smile with Dermaclin lip augmentation procedures</p>




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

export default DarkThinLip