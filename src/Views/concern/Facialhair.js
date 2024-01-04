import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import FacialhairBanner from '../../components/Banner/FacialhairBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Facialhair = () => {
    return (
        <>
            <Header />
            <TopNav />
            <FacialhairBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Facial Hair</h2>
                        </div>
                        <Col>



                            <p>
                                Facial hair for women is a problem that can be quite irksome. Having male pattern facial growth
                                can severely change your overall look for the worse.&nbsp; This condition is called hirsutism
                                and can be treated. Women actually have measurable amounts of androgens in their blood. The
                                levels are much lower than they are in a man’s blood, but they are present. And the cells in the
                                hair follicles on a woman’s face also make hair in response to androgens. When a woman has
                                unusually high levels of androgens in the blood, she can start to grow hair in places that most
                                women do not. Such hair growth may also be caused by cells in the hair follicles that are more
                                easily stimulated by androgens to make hairs, even when androgen levels are normal. In some
                                cases, the extra androgen comes from medications. Some birth control pills as well as certain
                                steroids contain androgens, or have effects similar to androgens. Occasionally, an abnormality
                                in the ovaries, the adrenal glands or the pituitary gland can cause overproduction of
                                androgens.&nbsp;&nbsp;
                            </p>
                            <p>Dermaclin's premier Permanent Lazer Hair Reduction Technology ensures that you're rid of all the
                                unpleasant hair growth once and for all. It is painless – It is permanent – It is safe!&nbsp;
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

export default Facialhair