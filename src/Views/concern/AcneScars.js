import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import AcneScarsBanner from '../../components/Banner/AcneScarsBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const AcneScars = () => {
  return (
    <>
      <Header />
      <TopNav />
      <AcneScarsBanner />
      <section className="experts-area g-sec-pad">
        <Container>
          <Row>
            <div className="section-heading">
              <h2 className="g-heading ed-heading client-exp banner-title">Acne Scars</h2>
            </div>
            <Col xs={12} md={12} sm={12} lg={6}>

              <p>
                Acne formation can leave many scars in its wake. This provides an uneven tone &amp; texture to
                your skin. This is caused by excessive inflammation after the onset of acne. Collagen formation
                does not happen properly thus leaving the scars unhealed.
              </p>
              <p>Even though the condition of Acne might have been erased, its scars remain. And of course, it
                is best that they are erased right away!
              </p>
              <p>By healing acne scars, you can welcome back the glow &amp; suppleness your skin had right
                before the acne onset.</p>
              <p>At Dearmaclin, we provide you with an array of clinically tested &amp; approved scar treatments
                that
                will bring the younger years back to your skin!
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

export default AcneScars