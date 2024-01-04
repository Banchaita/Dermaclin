import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import DiamondBanner from '../../components/Banner/DiamondBanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Diamond = () => {
    return (
        <>
            <Header />
            <TopNav />
            <DiamondBanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Diamond Microdermabrasion</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>A safe, painless and highly effective procedure to improve various skin problems like dull skin,
                                pigmentation, acne scars and age spots. Microdermabrasion uses a high-pressure flow of fine
                                crystals to gently polish the skin. The crystals remove the outer layer of dead cells revealing
                                the fresh, silky smooth skin underneath. It is a very simple procedure with almost no downtime
                                and can be safely performed not only on the face but areas like neck, chest, hands, forearms and
                                abdomen.<br />
                                <br />
                                <strong>Best suited to treat the following concerns:</strong>
                            </p>
                            <ul>
                                <li>Acne scars</li>
                                <li>Stretch marks</li>
                                <li>Tanning &amp; uneven skin tone</li>
                                <li>Skin resurfacing</li>
                            </ul>
                            <p><strong>Things to know:</strong></p>
                            <ul>
                                <li>A burning sensation or stinging may occur during the treatment.</li>
                                <li>Possible side effects include, but are not limited to: peeling, tightness, mild to extreme
                                    redness, suction marks, wind-burn sensation, dry and flaking skin.</li>
                                <li>The results of this treatment may vary due to conditions such as age, condition of the skin,
                                    sun damage, damage due to smoking, climate, etc.</li>
                                <li>Avoid chemical peel, waxing, electrolysis, Laser treatments, or threading within 7 days
                                    before and after this treatment.</li>
                                <li>Do not undergo any injectible procedure such as fillers, botox etc. a week before the
                                    procedure</li>
                                <li>A week prior to treatment, avoid topical products such as Tretinoin (Retin-A), Retinols,
                                    Retinoids, Glycolic Acid, Alpha Hydroxy Acid, Salicylic Acid, or other
                                    &ldquo;anti-aging&rdquo;, &ldquo;acne&rdquo;, and &ldquo;bleaching&rdquo; products. Also
                                    AVOID waxing, bleaching, tweezing, or the use of hair removal cream on the area to be
                                    treated.</li>
                                <li>Avoid excessive sun exposure and wear a broad-spectrum sunscreen daily of SPF 30</li>
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

export default Diamond
