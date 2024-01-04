import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DilateporesBanner from '../../components/Banner/DilateporesBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Dilatepores = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DilateporesBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Dilate Pores</h2>
                        </div>
                        <Col>


                            <p>
                                Our skin has pores all over which help to control moisture levels, perspiration, oil and a lot
                                more. Usually, pores are quite small and cannot be noticed that easily. However, due to many
                                factors, these pores become enlarged and invite a world of trouble by clogging dirt, dead skin
                                and oil.
                            </p>
                            <p><b>What causes your pores to dilate?</b></p>
                            <p>Along with your diet &amp; the environment, your genes greatly dictate the onset of dilated
                                pores. Also, if you experience excessive sweating or oil secretion from your skin, it is natural
                                for your pores to dilate. Exposure to the sun is another factor that can greatly affect your
                                pores as well. UV rays harm the collagen under the skin thus putting more stress on the
                                epidermis.
                            </p>
                            <p>
                                Take a closer look at your skin, in the mirror. It is not difficult to spot dilated pores after
                                a closer look. If you spot them, it's best to get them treated right away.
                            </p>
                            <p>
                                At Dermaclin, we provide you with a plethora of options &amp; treatments against dilated pores that
                                help in organically rejuvenating your skin.
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

export default Dilatepores
