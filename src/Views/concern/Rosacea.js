import React from 'react'
import {Footer, Header, TopNav } from '../../components/Layout'
import RosaceaBanner from '../../components/Banner/RosaceaBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Rosacea = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <RosaceaBanner/>
      <section className="experts-area g-sec-pad">
              <Container>
                  <Row>
                      <div className="section-heading">
                          <h2 className="g-heading ed-heading client-exp banner-title">Rosacea </h2>
                      </div>
                      <Col>


                      <p>
                        Is your skin way too sensitive for your own good? Or can you visibly see broken blood vessels
                        on your cheeks, nose or around your eyes? If you are suffering from the issues above, along with
                        constant skin inflammation, excessive skin flush or acne-like pimples, then you may be suffering
                        from Rosacea.&nbsp;
                    </p>
                   
                    <p>
                        Rosacea is usually mild &amp; less severe in the beginning but if left unchecked, can become
                        severe. In its severe stage, Rosacea can cause the swelling of sebaceous glands, enlarged pores,
                        inflamed skin, rapid pimple formation and much more!
                    </p>
                    <p>
                        Rosacea can be detected early-on, and its graduation to a severe stage can be prevented.
                    </p>
                    
                    <p>Dermaclin Skin Maintenance Program - the lightest touch and the best treatments against Rosacea.</p>



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

export default Rosacea
