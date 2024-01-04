import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import SunkeneyesBanner from '../../components/Banner/SunkeneyesBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Sunkeneyes = () => {
    return (
        <>
            <Header />
            <TopNav />
            <SunkeneyesBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Sunken Eyes</h2>
                        </div>
                        <Col>



                            <p>Sunken eyes are the dark deep hollows around the eyes which are usually due to aging,
                                dehydration, a medical condition, dramatic weight loss or simply due to the lack of sleep.&nbsp;
                                Sunken eyes are also referred to as “tear trough hollows.” The appearance of sunken eyes may
                                differ from person to person</p>




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

export default Sunkeneyes