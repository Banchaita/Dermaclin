import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import QSwitchbanner from '../../components/Banner/QSwitchbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const QSwitch = () => {
  return (
    <>
      <Header />
      <TopNav />
      <QSwitchbanner />
      <section className="experts-area g-sec-pad">
        <Container>
          <Row>
            <div className="section-heading">
              <h2 className="g-heading ed-heading client-exp banner-title">Q-Switch</h2>
            </div>
            <Col xs={12} md={12} sm={12} lg={6}>
              <p>Q-Switch Laser is the latest technology to treat uneven skin tone and hyper-pigmentation that is
                highly safe for Indian skin. Q -Switch laser creates an invisible beam of light that
                specifically targets the brown pigment or melanin present in the dark spots without having any
                affect on the surrounding skin. The pigment absorbs the laser energy and gets fragmented within
                the skin&#39;s tissues, thereby giving you a smooth and even skin tone. The laser reaches deeper
                areas where products or peels etc do not reach.&nbsp;</p>
              <p>It usually takes about 6-8 sessions to work effectively.</p>
              <p><strong>Q-Switch Treats:</strong></p>
              <ul>
                <li>Pigmentation (such as freckles, sun spots, age spots, melasma, birthmarks)</li>
                <li>Acne marks</li>
                <li>Fairer skin</li>
                <li>Skin rejuvenation</li>
                <li>Minimise pores</li>
                <li>Tattoo removal</li>
              </ul>
              <p><strong>Things to know:</strong></p>
              <ul>
                <li>70-90% clearance or lightening of your pigmentation.</li>
                <li>Very high success for clearance of acne marks.</li>
                <li>Prevention and treating of pimples and acne.</li>
                <li>Less outbreaks in future.</li>
                <li>Better&nbsp;oil control.</li>
                <li>Fairer and brighter skin.</li>
                <li>Complete clearance of tattoos (depending on ink colour).</li>
                <li>The laser energy feels like many tiny hot dots on your skin. The process is very tolerable.
                </li>
                <li>Mild pinkish flush might be present for about 15mins after the laser.</li>
                <li>You can put on make-up immediately after a laser treatment and go straight back to work</li>
                <li>Avoid sun tanning for the next 7-10 days. Also apply an appropriate sunscreen.</li>
              </ul>
              <p><strong>Best suited to treat the following concerns:</strong></p>
              <ul>
                <li>Tanning &amp; uneven skin tone</li>
                <li>Melasma</li>
                <li>Marks &amp; age spots</li>
                <li>Freckles</li>
                <li>Dark lips</li>
                <li>Tattoo removal</li>
                <li>Acne scars</li>
                <li>Dilated pores</li>
                <li>Stretch marks</li>
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

export default QSwitch
