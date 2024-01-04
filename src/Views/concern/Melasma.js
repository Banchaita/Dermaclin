import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MelasmaBanner from '../../components/Banner/MelasmaBanner';


const Melasma = () => {
  return (
    <>
        <Header/>
        <TopNav/>
        <MelasmaBanner/>
        <section className="experts-area g-sec-pad">
              <Container>
                  <Row>
                      <div className="section-heading">
                          <h2 className="g-heading ed-heading client-exp banner-title">Melasma </h2>
                      </div>
                      <Col>


                      <p>
                        Melasma is a problem that causes dark or discoloured patches on your skin. The condition is
                        more common in women, especially in the pregnancy stage, but however, it can also affect men.
                        Indian skin is more vulnerable to melasma and can typically appear on the upper cheeks,
                        forehead, upper lip area &amp; chin.
                    </p>
                    <p><b>Causes of Melasma</b></p>
                    <p>As stated earlier, the condition is more common in women, than it is in men only because the
                        former is prone to hormonal imbalance. Estrogen &amp; progesterone sensitivity has a close
                        association with this condition. Birth control pills, pregnancy, hormonal therapy - all these
                        conditions correlate with melasma. Not to forget, other factors such as exposure to the sun
                        &amp; stress can also lead to melasma.Sometimes melasma can disappear on its own. If it does
                        not, it is best to get it looked by a skin expert!
                    </p>
                    <p>At Dermaclin, we offer you expert care and treatment to help erase all kinds of blemishes from
                        your
                        skin, including the ones caused by melasma.</p>



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

export default Melasma