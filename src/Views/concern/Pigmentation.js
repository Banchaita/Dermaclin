import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import PigmentationBanner from '../../components/Banner/PigmentationBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Pigmentation = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <PigmentationBanner/>
      <section className="experts-area g-sec-pad">
              <Container>
                  <Row>
                      <div className="section-heading">
                          <h2 className="g-heading ed-heading client-exp banner-title">Pigmentation </h2>
                      </div>
                      <Col>


                      <p>
                        Skin pigmentation is a problem that affects almost every man &amp; woman at some point in life
                        with Indian skin being more prone to pigmentation. It is believed that around 80% of Indian men
                        &amp; women suffer from skin pigmentation in varied severity.&nbsp;
                        your skin back to its glorious &amp; youthful look!&nbsp;&nbsp;
                    </p>
                    <p><b>Why do we suffer from skin pigmentation?</b></p>
                    <p>
                        Pigmentation is the presence of excess color in the skin. Essentially, hyper-pigmentation is a
                        common condition in which patches of skin become darker in colour than the normal surrounding
                        skin. This darkening occurs when there is an excess of melanin (the brown pigment that produces
                        normal skin colour) forms deposits in the skin.&nbsp; Discoloration can occur anywhere and in
                        any formation on the face, and other parts of the body; be it as patches, or as tanning, or as
                        simple as age spots or marks.
                    </p>
                    <p>
                        Over-exposure to the sun can greatly alter the melanin production within your skin. As we all
                        know, UV rays are quite harmful to our body. Hence to protect itself from UV damage, the
                        melanocytes produce and saturate melanin to a higher degree under the exposed areas. This, in
                        turn, tans your skin.
                    </p>
                    <p><b>Age Spots</b></p>
                    <p>Just like its name, age spots have a lot to do with age. Due to prolonged exposure to the sun
                        &amp; many chemical factors, you're body is most likely develop age spots in many parts of your
                        body such as the face, forearms, upper back and shoulders.
                    </p>
                    <p>At Dermaclin, we've brought a world of solutions to all these skin problems to give you a healthy
                        &amp; desirable skin that you deserve.</p>

                    



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

export default Pigmentation
