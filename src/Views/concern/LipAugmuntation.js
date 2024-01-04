import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import LipAugmuntationBanner from '../../components/Banner/LipAugmuntationBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const LipAugmuntation = () => {
    return (
        <>
            <Header />
            <TopNav />
            <LipAugmuntationBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Lip Augmuntation </h2>
                        </div>
                        <Col>


                            <p><b>Treatment for dark, thin lips and more!</b></p>
                            <p><b>Why tender lips are so important to us:</b></p>
                            <p>
                                Our lips become the centre of attention when we speak and communicate. This is why many men
                                &amp; women are always conscious of what their lips look like &amp; how they're shaped. There
                                are many factors that can affect your lips and their appearance. From something as simple as
                                drinking less water to smoking can change the colour &amp; texture of your lips.&nbsp;
                            </p>
                            <p>Discolouration, darkening, wrinkle-formation on the lips are some of the common issues faced by
                                many.</p>
                            <p>But that's not all, the lip shape &amp; volume is also an issue that troubles many. Having a
                                thin or an asymmetrical lip structure can chip away at your overall look. Sometimes, it's quite
                                normal to think of adding more definition to your lips to enhance your overall natural look.
                            </p>
                            <p><b>Perfect lips for the perfect smile</b></p>
                            <p>And let's not forget - your lips are the main pillars to your smile! If you feel that you have
                                a toothy or a gummy smile, then with Dermaclin's lip augmentation, you can make your laughter &amp;
                                smiles more charming &amp; radiant.
                            </p>
                            <p>So get in touch with us today!&nbsp;</p>
                            <p>Explore our timquite normal that e-tested &amp; safe treatments for lip augmentation.</p>



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

export default LipAugmuntation