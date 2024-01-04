import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import prp from "../assests/images/prp.jpg"
import DermalFiller from "../assests/images/Dermal Filler.jpg"
import Chemicalpeeling from "../assests/images/Chemical peeling.jpg"
import rightarrow from "../assests/images/right-arrow.png"
import { Link } from 'react-router-dom';

const HomeService = () => {
    return (
        <>
            <section class="home-services g-sec-pad">
                <Container>
                    <div className="secttion-heading">
                        <h2 className="ed-heading">Our Service</h2>
                    </div>
                    <Row className='home-service-row'>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={prp} alt="" srcset="" width={500} />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="service-info">
                                <h3 class="sub-heading haf-lin-de">PRP</h3>
                                <p class="desc">PRP is a restorative agent extracted from your blood. It
                                    is used in a plethora of medical applications for example in hair
                                    restoration, skin rejuvenation, acne & scar reduction etc.
                                </p>
                            </div>

                            <div className="service-bottom-info">
                                <Row>
                                    <Col md={4}>
                                        <div class="button-container-app">
                                            <a href="/Appointment">
                                                <button id='work' type="button" name="Hover">Book an Appointment</button>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <a href="/Aesthetic/PRP" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>


                        </Col>
                    </Row>

                    <Row className='home-service-row'>

                        <Col>
                            <div className="service-info anti-area">
                                <h3 class="sub-heading haf-lin-de">Derma Filler</h3>
                                <p class="desc">
                                    Facial volume reduces as we begin to age. Dermal fillers are a minimally invasive treatment that fills
                                    lines & wrinkles to restore lost volume resulting in fuller, younger & revitalized face. Dermal Fillers
                                    are used to treat wrinkles, creases and scars & is also used for lip augmentation & defining of the lip line.
                                </p>
                            </div>

                            <div className="service-bottom-info ">
                                <Row>
                                    <Col md={4}>
                                        <div class="button-container-app">
                                            <a href="/Appointment">
                                                <button id='work' type="button" name="Hover">Book an Appointment</button>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <a href="/Aesthetic/DermalFillers" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={DermalFiller} alt="" srcset="" width={500} className='antiimg' />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className='home-service-row'>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={Chemicalpeeling} alt="" srcset="" width={500} className='hifuimg' />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="service-info">
                                <h3 class="sub-heading haf-lin-de">Chemical Peels</h3>
                                <p class="desc">
                                    Chemical peeling is a popular procedure these days where a chemical agent or
                                    combination of agents of defined strength are applied to the skin to help in
                                    remodeling and regeneration of the skin, improved texture and surface abnormalities
                                    along with the pigment & acne reduction.
                                </p>
                            </div>

                            <div className="service-bottom-info">
                                <Row>
                                    <Col md={4}>
                                        <div class="button-container-app">
                                            <a href="/Appointment">
                                                <button id='work' type="button" name="Hover">Book an Appointment</button>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <a href="/Aesthetic/ChemicalPeeling" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>


                        </Col>
                    </Row>

                    <div className="more">
                        <Link to="/service" class="nav-link active" aria-current="page">
                            <div class="button-container">
                                <button id='work' type="button" name="Hover">View More</button>
                            </div>
                        </Link>
                    </div>
                </Container>
            </section >
        </>
    )
}

export default HomeService
