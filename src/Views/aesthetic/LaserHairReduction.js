import React from 'react'
import { Footer, Header, TopNav } from '../../components/Layout'
import LaserHairReductionbanner from '../../components/Banner/LaserHairReductionbanner'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const LaserHairReduction = () => {
    return (
        <>
            <Header />
            <TopNav />
            <LaserHairReductionbanner />
            <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Laser Hair Reduction</h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p>Dermaclin brings to you the safest, most comprehensive &amp; the best in Laser Hair Reduction &ndash;
                                the 3 wave Laser diode, a trio powered technology with the synergic benefits of the 3 most
                                effective wavelengths 808nm, 755nm &amp; 1064nm for hair removal, each targeting different
                                structures within the hair follicle.&nbsp;</p>
                            <p>Dermaclin&rsquo;s use of this latest innovative technology ensures excellent &amp; permanent hair
                                reduction results with minimum discomfort to its clients.&nbsp; Whether you have light, dark or
                                even tanned skin, course or fine hair, Smooth Light achieves complete &amp; effective hair
                                removal that is safe, quick&nbsp; &amp; best of all - virtually painless.</p>
                            <p>Each hair type responds best to a specific laser wave length.&nbsp; Smooth light incorporates the
                                benefits of a variety of wavelengths &amp; technologies providing a customised treatment session
                                for every client.</p>
                            <p>SHR Technology gradually heats the skin to a temperature that effectively damages the hair
                                follicles &amp; prevents hair from growing back.</p>
                            <p>The gliding technology keeps the laser in constant motion ensuring full coverage of the treatment
                                area resulting in shorter treatment sessions.</p>
                            <p>Smooth Light cools the skin preventing burns and allows a virtually painless, yet effective hair
                                removal.</p>
                            <p>A variety of applicators allows our highly skilled laser technicians to treat any part of the
                                body including the smallest &amp; most sensitive areas.</p>
                            <p><strong>Understanding hair growth:&nbsp;</strong></p>
                            <p>Each of your hair follicles is in one of 3 stages of growth at any given time. The &quot;active
                                growth&quot; (anagen) phase, &quot;regressive&quot; (categen) phase, and &quot;resting&quot;
                                (telogen) phase. Laser hair removal is most e?ective at disabling &quot;actively growing&quot;
                                hairs during treatment. It is during the anagen that the hair shaft contains the greatest
                                abundance of melanin, the target of the laser light. Many hair follicles are in their resting or
                                regressive stages at any given time. The length of the growth cycle also vary slightly by body
                                area. Your Laser Hair Removal program will be customized to obtain optimal results. Depending on
                                hair density, coarseness, growth cycle, and area to be treated; the number of sessions &amp;
                                maintenance program will be recommended.</p>
                            <p><strong>Things to know:</strong></p>
                            <ul>
                                <li>A minimum of 6 sessions are required to achieve the necessary results which may require
                                    maintenance sessions depending on hair growth patterns.</li>
                                <li>Hormonal imbalance, pregnancy and menopause may stimulate additional hair growth in which
                                    case additional treatments may be necessary.</li>
                                <li>Hair should not be plucked or waxed before treatment.</li>
                                <li>Lotions, cosmetics, and other skin preparations should be avoided on the day of the
                                    treatment.</li>
                                <li>Limited exposure to the sun before and after treatment is advisable.</li>
                                <li>This treatment may not be performed during pregnancy.</li>
                            </ul>
                            <p><strong>Dermaclin ensures your safety:</strong></p>
                            <ul>
                                <li>Triple Wave Diode can be used on any skin type including tanned skin.</li>
                                <li>Performed by highly trained technicians under the supervision of qualified dermatologists.
                                </li>
                                <li>Laser patch test is carried out to check skin sensitivity &amp; reaction.</li>
                                <li>Free consultation with our dermatologists to understand your hair growth pattern etc. in
                                    detail.</li>
                                <li>Skin cooling technology prevents skin burns &amp; ensures a comfortable experience.</li>
                                <li>No side effects.</li>
                                <li>High standards of hygiene.</li>
                            </ul>
                            <p><strong>Dermaclin laser benefits:</strong></p>
                            <ul>
                                <li>Virtually painless as compared to waxing.</li>
                                <li>No more razor burns, cuts &amp; nicks.</li>
                                <li>Fewer ingrown hair.</li>
                                <li>Softer &amp; smoother skin&nbsp; with every session.</li>
                                <li>Less discolouration in skin.&nbsp;</li>
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

export default LaserHairReduction