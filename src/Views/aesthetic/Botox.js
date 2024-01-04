import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import BotoxBanner from '../../components/Banner/BotoxBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Botox = () => {
  return (
    <>
      <Header />
      <TopNav />
      <BotoxBanner />
      <section className="experts-area g-sec-pad">
        <Container>
          <Row>
            <div className="section-heading">
              <h2 className="g-heading ed-heading client-exp banner-title">Botox</h2>
            </div>
            <Col xs={12} md={12} sm={12} lg={6}>
              <p>
                Dermaclin's Botox treatment is a US FDA approved treatment that provides fast results against ageing,
                wrinkles & fine lines. Botox is most effective on wrinkles that haven’t quite set - “dynamic” wrinkles
                that appear during a facial movement, such as when you frown. For Face Contouring Botox gives beautiful
                results such as High Cheekbones, Eyebrow Lift, defined Jawline. Botox can also be used as a prescribed
                medicine to prevent headaches in adults with chronic migraine & to treat the symptoms of severe underarm sweating.
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
      <Footer />
    </>
  )
}

export default Botox