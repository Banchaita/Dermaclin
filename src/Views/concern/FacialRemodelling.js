import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import FacialRemodellingBanner from '../../components/Banner/FacialRemodellingBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const FacialRemodelling = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <FacialRemodellingBanner/>
      <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Facial Remodelling </h2>
                        </div>
                        <Col>

                        <p>
                    Facial remodelling is a process that can give you more defined cheek-bones, redefine your brow
                        &amp; jawline etc. smoothen out wrinkles &amp; give you an overall natural lift to re-contour
                        your face in the best way possible. The procedures involved are safe &amp; non surgical without
                        any downtime.&nbsp;
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
      <Footer/>
    </>
  )
}

export default FacialRemodelling
