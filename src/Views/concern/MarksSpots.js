import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import MarksSpotsBanner from '../../components/Banner/MarksSpotsBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const MarksSpots = () => {
  return (
    <>
        <Header/>
        <TopNav/>
        <MarksSpotsBanner/>
        <section className="experts-area g-sec-pad">
              <Container>
                  <Row>
                      <div className="section-heading">
                          <h2 className="g-heading ed-heading client-exp banner-title">MARKS & AGE SPOTS </h2>
                      </div>
                      <Col>


                      <p>
                        Just like its name, age spots have a lot to do with age. Also, due to prolonged exposure to the
                        sun &amp; many chemical factors, you're body is most likely develop age spots in many parts of
                        your body such as the face, forearms, upper back and shoulders.&nbsp; These spots range in color
                        and are from light brown to red or black.&nbsp; These spots pose no threat however most people
                        choose to have them removed.&nbsp;
                    </p>
                    <p>At Dermaclin, we have several treatments to remove marks &amp; spots and give you a healthy &amp;
                        desirable skin that you deserve.&nbsp;
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

export default MarksSpots