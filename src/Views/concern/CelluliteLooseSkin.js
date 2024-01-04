import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import CelluliteLooseSkinBanner from '../../components/Banner/CelluliteLooseSkinBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const CelluliteLooseSkin = () => {
    return (
        <>
            <Header />
            <TopNav />
            <CelluliteLooseSkinBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Cellulite-Loose-Skin</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>


                            <p>
                                Being able to carry a short skirt or a dress elegantly, is something that almost every woman
                                dreams of. Two of the most common issues women generally face are cellulite &amp;&nbsp; loose
                                skin.&nbsp;
                            </p>
                            <p>Loose skin occurs when skin loses its elasticity as we age or due to dramatic weight loss and
                                is generally accompanied by stretch marks.
                            </p>
                            <p>
                                Cellulite is created by fat deposits underneath the skin which become inflamed &amp; press
                                against one another thus giving it a lumpy &amp; uneven texture.&nbsp;
                            </p>
                            <p>It is estimated that 4 out of 5 women in the world, suffer from this condition. But why do we
                                get this condition in the first place? Well, the reasons are many - a sedentary lifestyle, bad
                                diet &amp; eating habits, stress, hormonal ups &amp; downs or due genetics. Also, cellulite is
                                observed in gradual stages, right from a minor unevenness under your skin to the 'orange-peel'
                                like final consistency.&nbsp;
                            </p>
                            <p>At Dermaclin, we provide you with finest &amp; a time-tested treatment for eliminating cellulite
                                &amp; tightening of your body.</p>



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

export default CelluliteLooseSkin
