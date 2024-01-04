import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import BrowCheeksBanner from '../../components/Banner/BrowCheeksBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const BrowCheeks = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <BrowCheeksBanner/>
      <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Brow & Cheek & Chin</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>

                          <p>
                              With age, sagging can appear on many parts of your face, however, the most prominent sagging
                              &amp; drooping is visible in the brow, cheek &amp; chin area.&nbsp;
                          </p>
                          <p>At Dermaclin, we provide you with an array of non surgical treatments to tighten, lift &amp; add
                              volume to these areas which will shave years off your face.
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

export default BrowCheeks
