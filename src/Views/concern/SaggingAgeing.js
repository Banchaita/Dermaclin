import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import SaggingAgeingbanner from '../../components/Banner/SaggingAgeingbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SaggingAgeing = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <SaggingAgeingbanner/>
          <section className="experts-area g-sec-pad">
              <Container>
                  <Row>
                      <div className="section-heading">
                          <h2 className="g-heading ed-heading client-exp banner-title">Sagging & Ageing </h2>
                      </div>
                      <Col>


                          <p>
                              Ageing gets the best of us and is a normal process. But your goal must be to age beautifully
                              with the help of the most natural therapies and treatments. And at Calee, we provide you with
                              just what you need - complete care for the skin to help revitalise it and turn back the time on
                              your overall look with treatments that are non surgical yet with the same results.
                          </p>

                          <p>
                              Sagging is a condition which often comes after the wrinkling phase. Your skin loses its volume,
                              and eventually, the connective tissue fails to effectively hold your skin together. This is why
                              your skin starts to sag. Sagging &amp; aging can be noticed across your body but it is the
                              sagging &amp; aging on your face that can truly affect your overall look. <br />
                          </p>
                          <p>
                              Dermaclin can help turn your skin clock back with our range of minimally to completely non invasive
                              / non surgical anti-ageing solutions
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

export default SaggingAgeing
