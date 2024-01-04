import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import ExcessBodyBanner from '../../components/Banner/ExcessBodyBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const ExcessBody = () => {
    return (
        <>
            <Header />
            <TopNav />
            <ExcessBodyBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Excess Body &amp; Facial Hair</h2>
                        </div>
                        <Col>


                            
                            <p>
                                All women have body &amp; facial hair.&nbsp; Normal hair is generally light &amp; fine in
                                texture.&nbsp; Excessive body &amp; facial hair is darker &amp; course in texture.&nbsp;
                                Excessive body hair is a problem that is quite a pain to deal with. And not only is the
                                removal of this hair an exasperating &amp; time-consuming affair but it can also damage your
                                skin in the long run. Chemical removal of hair or constant waxing &amp; shaving can damage
                                the outer layer of your skin giving it an unpleasant hue &amp; appearance and also damage
                                its texture &amp; tone.
                            </p>
                            <p>The presence of excess body hair can lead to feelings of self-consciousness. However, the
                                hormonal imbalance that can lead to it, may compromise a woman’s health &amp; therefore
                                needs to be treated
                            </p>Explore our time-tested treatments &amp; therapies here:&nbsp;




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

export default ExcessBody
