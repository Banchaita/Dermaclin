import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import WartsSkinTagsBanner from '../../components/Banner/WartsSkinTagsBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const WartsSkinTags = () => {
  return (
    <>
      <Header/>
      <TopNav/>
      <WartsSkinTagsBanner/>
      <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Warts Skin Tags</h2>
                        </div>
                        <Col>



                     
                            <p><b>What are Warts?</b></p>
                            <p>Warts are small lumps &amp; elevated growths on your skin that are caused by the Human
                                Papilloma Virus. These can show up almost any part of your body and often show no symptom
                                before appearing.</p>
                            <p>Also, there are several types of warts &amp; skin tags, each different in severity &amp;
                                the area it shows up on.</p>
                            <p><b>Common Warts&nbsp;</b></p>
                            <p>Just like their name, common warts are quite normal and affect a large number of people
                                around the world. They can show up on the fingers, toes, neck, near the underarm area and
                                have a grainy texture. They can cause slight discolouration as they have a colour that's
                                different from your skin.</p>
                            <p><b>Plantar Warts</b></p>
                            <p>Plantar warts grow on the soles of the feet and can be quite painful to deal with because
                                they often get pressed while walking. Their growth is inwards, and they do not pop out, thus
                                making it more painful.&nbsp;</p>
                            <p><b>Genital Warts</b></p>
                            <p>Genital Warts show up around the private parts in the form of small lumps &amp; dots.</p>
                            <p><b>Filiform Warts</b></p>
                            <p>Filiform warts grow around the mouth, nose,&nbsp; neck or even under the chin. They are
                                usually small and have a flap-like shape. Also, their colour is the same colour as your
                                skin.</p>
                            <p><b>Periungual Warts</b></p>
                            <p>Periungual Warts is the type that grows under your fingernails &amp; toe-nails. They can
                                make natural nail growth painful &amp; uncomfortable. Also, their positioning makes them
                                quite difficult to treat.</p>
                            <p><b>Flat Warts</b></p>
                            <p>Flat Warts can be seen growing on the thighs, arms or even the face. They're usually quite
                                minute and can be easily scrapped. They're pink, brown or slightly yellowish.</p>
                            <p><br/></p>
                            <p><b>What are Skin Tags?</b></p>
                            <p>A skin tag is an unusual growth or hangings from your skin that occurs with age,
                                weight-loss/gain or skin friction. They're harmless and can be easily removed. You can
                                notice skin tags on areas such as the neck, chest, groin, back or even in delicate places
                                like eye-lids and earlobes.</p>
                            <p>They can disrupt your overall look and can hinder your natural body movement as well.</p>
                            <p><br/></p>
                            <p>At Dermaclin, we provide you with the safest &amp; best-in-class treatment against skin tags
                                &amp; warts which also have zero downtime.</p>
                            <p><br/></p>
                            
                        




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

export default WartsSkinTags
