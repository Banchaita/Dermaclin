import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import TanningUnevenSkinbanner from '../../components/Banner/TanningUnevenSkinbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const TanningUnevenSkin = () => {
    return (
        <>
            <Header />
            <TopNav />
            <TanningUnevenSkinbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Tanning & Uneven Skin</h2>
                        </div>
                        <Col>
                            <p> <div><b>Tanning</b></div></p>

                            <p>Over-exposure to the sun can greatly alter the melanin production within your skin. As we all
                                know, UV rays are quite harmful to our body. Hence to protect itself from UV damage, the
                                melanocytes produce and saturate melanin to a higher degree under the exposed areas. This, in
                                turn, tans your skin.
                            </p>
                            <p> <div><b>Age Spots</b></div></p>
                            <p>Just like its name, age spots have a lot to do with age. Due to prolonged exposure to the sun
                                &amp; many chemical factors, you're body is most likely develop age spots in many parts of your
                                body such as the face, forearms, upper back and shoulders.
                            </p>
                            <p>
                                At Dermaclin, we've brought a world of solutions to all these skin problems to give you a healthy
                                &amp; desirable skin that you deserve.
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

export default TanningUnevenSkin
