import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import MesotherapyBanner from '../../components/Banner/MesotherapyBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Mesotherapy = () => {
    return (
        <>
            <Header />
            <TopNav />
            <MesotherapyBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Mesotherapy</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Mesotherapy is a popular, safe &amp; natural alternative to many other chemical &amp;
                                highly-invasive restoration methods.</p>
                            <p>Mesotherapy is a direct &amp; high&nbsp;effective&nbsp;process that involves the introduction of
                                vital nutrients &amp; rejuvenating peptides right in the balding &amp; malnourished parts of
                                your scalp. It provides your hair-follicles with just the right amount of stimulation &amp; pump
                                to kickstart hair growth. The added benefits of Mesotherapy include faster cell metabolism in
                                the scalp, removal of scalp infections &amp; reduced DHT saturation. A healthy scalp grows
                                voluminous, strong &amp; thick hair that you would be proud to flaunt.</p>
                            <p><strong>How mesotherapy works?</strong></p>
                            <p>Vital nutrients &amp; rejuvenating peptides are micro-injected right around your weak hair
                                follicles to&nbsp; boost cellular activity back to healthy levels. Serum is delivered into the
                                scalp through a Meso gun, derma roller or microinjections. It provides your hair follicles with
                                just the right amount of&nbsp; stimulation &amp; pump to kickstart hair growth.</p>
                            <p><strong>No. of sittings required:</strong></p>
                            <p>one sitting every week for 6 -10 weeks for best results. It works perfectly for androgenic
                                alopecia, telogen e?uvium &amp; even androgenic areata</p>

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

export default Mesotherapy
