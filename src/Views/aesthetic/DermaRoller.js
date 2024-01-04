import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DermaRollerBanner from '../../components/Banner/DermaRollerBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DermaRoller = () => {

  return (
    <>
      <Header />
      <TopNav />
      <DermaRollerBanner />
      <section className="experts-area g-sec-pad">
        <Container>
          <Row>
            <div className="section-heading">
              <h2 className="g-heading ed-heading client-exp banner-title">Derma Roller</h2>
            </div>
            <Col xs={12} md={12} sm={12} lg={6}>
              <p>Dermaclin&#39;s Specialised Derma Roller is an easy-to-use &amp; non-electrical device that you can
                use as per your convenience. Its painless micro-points along with the up &amp; down movement
                helps in stimulating your skin &amp; triggers your body into repairing the targeting area.</p>
              <p>It also helps in the formation of collagen, thus making it stronger &amp; healthier.</p>
              <p><strong>Best suited to treat the following concerns:</strong></p>
              <ul>
                <li>Acne scars</li>
                <li>Skin regeneration</li>
                <li>Sun damaged skin</li>
                <li>Anti aging</li>
                <li>Hair loss</li>
              </ul>
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

export default DermaRoller
