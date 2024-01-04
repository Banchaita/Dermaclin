import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HairlossBanner from '../../components/Banner/HairlossBanner';


const Hairloss = () => {
    return (
        <>
            <Header />
            <TopNav />
            <HairlossBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Hair Loss </h2>
                        </div>
                        <Col>


                            <p>
                                We are often the first ones to notice our own hair-loss. Whether on the pillows where we lay
                                our head, during a shower or while we run a comb though our head - when we notice an alarming
                                amount of hair fall, we all tend to panic.
                            </p>
                            <p>It is natural for a person to lose some scalp hair every day. In fact, a count of 50 is
                                considered normal! This happens because our hair grows in different phases:
                            </p>
                            <p>
                                <b>Anagen Phase </b>- When Active Growth occurs
                            </p>
                            <p><b>Catagen Phase</b> - A gradual regression in growth</p>
                            <p><b>Telogen Phase </b>- Resting stage for the follicle</p>
                            <p>This is the main reason why shedding of hair is a normal process.</p>
                            <p>The problem occurs when your hair fall count goes up to 100 and you start noticing bald spots.
                                Men &amp; women both lose hair due to various hormonal, genetic &amp; environment factors.
                            </p>
                            <p>Here are some of the main reasons why men lose hair:</p>
                            <p><b>Androgenic Alopecia or Male Pattern Baldness</b></p>
                            <p>Androgenic Alopecia is quite common in men. It is caused when DHT - short for
                                dihydrotestosterone, clogs up in blood capillaries that provide nourishment to hair follicles.
                                The DHT creates a blockade that miniaturises the hair follicle, thus stopping hair growth
                                altogether.
                            </p>
                            <p>Androgenic areata &amp; telogen effluvium are also conditions that can lead to massive hair
                                loss!</p>
                            <p><b>Baldness in Women</b></p>
                            <p>Women too can suffer from female pattern baldness, due to hormonal imbalance, genetic factors
                                or from the side-effects of medication.</p>
                            <p><b>Gentle Dermaclin Care for your hair</b></p>
                            <p>At Dermaclin, we take our time first to study and understand the reason &amp; severity of your hair
                                fall. Once that is done, we advise you on an array of treatments and help you pick one that will
                                give you the best results!</p>




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

export default Hairloss