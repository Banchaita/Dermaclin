import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rightarrow from "../assests/images/right-arrow.png"
import dr from "../assests/images/dr.jpg"


const Experts = () => {
  return (
    <>
      <section class="experts-area g-sec-pad">
        <Container>
          <div className="secttion-heading">
            <h2 className="ed-heading">Our Experts </h2>
          </div>
          <Row>
            <Col className='dr-title'>
              <div className="section-heading">
                <h2 className="g-heading">Dr.Shivani</h2>
              </div>
              <p className="edu"> Cosmetologist & Holistic Healer</p>
              <p className="edu-para">
                Dr Shivani’s core purpose is to help people live healthy, happy & confident.
                The objective is to set a benchmark by delivering a beautiful clinical experience
                that brings a smile. It is not a goal, strategy or plan to be the best. It is an
                understanding of what one can be best at.<br />
                The key differentiator of Dr Shivani is to provide a holistic approach in all its
                services.
                We take care of your mind, body and spirit to provide an experience that makes you feel
                cared,
                important and special.
                <a href="http://"> Know More &nbsp;
                  <img src={rightarrow} alt="" srcset="" width={20} />
                </a>
              </p>
            </Col>
            <Col md="auto">
              <div class="doc-img-cont">
                <img src={dr} alt style={{ width: "300px", borderRadius: '50rem' }} />
              </div>
            </Col>
          </Row>

        </Container>
      </section >
    </>
  )
}

export default Experts
