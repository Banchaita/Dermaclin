import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import ChemicalPeelingbanner from '../../components/Banner/ChemicalPeelingbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ChemicalPeeling = () => {
    return (
        <>
            <Header />
            <TopNav />
            <ChemicalPeelingbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Chemical Peeling</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Chemical peeling is a popular procedure these days where a chemical agent or combination of
                                agents of defined strength are applied to the skin to help in remodeling and regeneration of the
                                skin, improved texture and surface abnormalities along with the pigment &amp; acne reduction.
                            </p>
                            <p><strong>&bull; Lactic Peels</strong></p>
                            <p>Originally derived from milk, this is a gentle peel and can be used for all types of skin
                                including sensitive skin. It is also popular as a party peel as it can be done a day prior to a
                                social event without any downtime.
                            </p>
                            <p><strong>&bull; Glycolic Acid Peels</strong></p>
                            <p>It is one of the most popular treatments of hyper pigmentation commonly found in face washes, acne creams
                                (Glyco 6, Glyco A, Keracnyl, Avene Diacneal / Triacneal). Glycolic acid is an Alpha Hydroxy acid
                                (AHA) that helps with various skin conditions like acne, pigmentation and anti-ageing. It is
                                also suitable for all degrees of acne.</p>
                            <p><strong>&bull; TCA (Trichloroacetic Acid) Peels</strong></p>
                            <p>This is one of the strongest peels for acne because of the high concentration of acid ranging
                                between 20%-50% unlike AHA and BHA peel. Normally it is left on the skin for a minute or two.
                                This peel is for hyper pigmentation issues like sun damage, acne marks and melasma. This is
                                suitable for moderate/severe acne.
                            </p>
                            <p><strong>&bull; Salicylic Acid Peels</strong></p>
                            <p>Salicyclic acid is Beta Hydroxy acid(BHA).This is a start up peel. Various concentrations of
                                Salicylic acid are used to bring acne under control. It is a keratolytic agent which unclogs
                                pores and kills the acne causing bacteria. It also helps with blemishes left behind by acne.
                                This is suitable for mild / moderate acne.<br />
                                <br />
                                <strong>Things to know:</strong>
                            </p>
                            <ul>
                                <li>Avoid excessive sun 48 hours prior to treatment</li>
                                <li>Avoid waxing services 24 hours prior to treatment</li>
                                <li>Alert your treatment provider if have taken any prescriptions
                                    and/or acne medication in the last 6-9 months</li>
                                <li>Do not wash face for at least 6 hours post treatment</li>
                                <li>Use a gentle cleanser &amp; moisturizer for 5 days post treatment</li>
                                <li>Avoid sun exposure for 7 days post treatment &amp; use SPF to protect skin</li>
                                <li>Avoid peeling or picking at the treatment area as the skin heals</li>
                            </ul>
                            <p><strong>Best suited to treat the following concerns:</strong></p>
                            <ul>
                                <li>Acne</li>
                                <li>Acne scars</li>
                                <li>Dark circles</li>
                                <li>Pigmentation</li>
                                <li>Melasma</li>
                                <li>Marks &amp; age spots</li>
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

export default ChemicalPeeling