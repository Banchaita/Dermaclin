import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import FinelineswrinklesBanner from '../../components/Banner/FinelineswrinklesBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Finelineswrinkles = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <FinelineswrinklesBanner/>
      <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Fine lines & wrinkles </h2>
                        </div>
                        <Col>

                        <p>
                    Fine lines &amp; wrinkles are some of the first signs of ageing. It can throw a curve-ball at
                    your youthful glow &amp; overall look. If you are wondering how fine lines &amp; wrinkles show
                    up, here's a quick read for you:
                </p>
                <p>Causes of Fine Lines &amp; Wrinkles:</p>
                <p><b>Constant exposure to the sun:</b></p>
                <p>We all know the damaging effects of harmful UV rays. The reason why they are so notorious is
                    that these rays penetrate through to the deepest layers of the skin, dehydrate &amp; burn skin
                    cells. Constant exposure to them can accelerate the process of ageing. This is why it is
                    observed that fine lines &amp; wrinkles mostly show up on the parts of your skin that are most
                    exposed to the sun.
                </p>
                <p><b>Facial Expression</b></p>
                <p>Our facial muscles, and their constant mechanical back &amp; forth can create grooves in our
                    skin. These grooves get deeper &amp; deeper with age and often turn into wrinkles &amp; fines.
                </p>
                <p><b>Collagen</b></p>
                <p>Collagen &amp; Elastin are extremely important in maintaining our skin's youth. With age, we
                    lose both collagen &amp; elastin gradually, losing the moisture &amp; elasticity in our skin.
                    This, in turn, results in fine lines.
                </p>
                <p>
                    At Dermaclin, we've got a plethora of skin rejuvenation &amp; anti-ageing treatments to give you
                        the young and glowing skin you deserve.
                
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

export default Finelineswrinkles
