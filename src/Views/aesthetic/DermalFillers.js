import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DermalFillersBanner from '../../components/Banner/DermalFillersBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DermalFillers = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DermalFillersBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Dermal Fillers</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Facial volume reduces as we begin to age. Dermal fillers are a minimally invasive treatment that
                                fills lines &amp; wrinkles to restore lost volume resulting in fuller, younger &amp; revitalized
                                face. Dermal Fillers are used to treat wrinkles, creases and scars &amp; is also used for lip
                                augmentation &amp; defining of the lip line.</p>
                            <p>Dermaclin offers you the world&rsquo;s No. 1 US FDA approved dermal filler JUVEDERM VOLUMA&reg;
                                XC&nbsp; to restore volume to cheeks &amp; chin &amp; JUVEDERM&reg; XC&nbsp; &nbsp;for natural
                                volume &amp; fullness to correct moderate to severe facial wrinkles &amp; folds such as
                                nasolabial folds.</p>
                            <p>Dermal fillers are also a great way to treat and potentially get rid of certain types of acne
                                scars, and is particularly effective for rolling scars and some less defined boxcar scars. They
                                are safe and well tolerated, with great results to fill the depression associated with scars.
                                They are excellent for volume loss caused by acne scarring<br />
                                <br />
                                <strong>Best suited to treat the following concerns:</strong>
                            </p>
                            <ul>
                                <li>Sagging &amp; aging</li>
                                <li>Fine lines &amp; wrinkles</li>
                                <li>Thin Lips</li>
                                <li>Lip Augmentation</li>
                                <li>Brow, cheeks &amp; Chin</li>
                                <li>Facial remodelling</li>
                                <li>Dark Circles</li>
                                <li>Sunken Eyes</li>
                                <li>Dilated pores</li>
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

export default DermalFillers
