import React,{ useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import yoga from "../assests/images/yoga.jpg"
import AntiObesity from "../assests/images/AntiObesity.jpg"
import Hifu from "../assests/images/Hifu Body.jpeg"
import BodyMesotherapy from "../assests/images/BodyMesotherapy.jpg"
import FatX from "../assests/images/Fat X.jpg"
import FatDetox from "../assests/images/Fir Detox.jpg"
import Psychological from "../assests/images/Psychological Counselling.jpg"
import Meditation from "../assests/images/Meditation.jpg"
import rightarrow from "../assests/images/right-arrow.png"
import { Link } from 'react-router-dom';

const HolisticService = () => {
    const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

    return (
        <>
            <section class="holistic-service g-sec-pad">
                <Container>
                    <div className="secttion-heading">
                        <h2 className="ed-heading">Our Service</h2>
                    </div>
                    <Row className='home-service-row'>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={yoga} alt="" srcset="" width={500} />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="service-info">
                                <h3 class="sub-heading haf-lin-de">Yoga</h3>
                                <p class="desc">
                                    Yoga can help with weight loss by promoting mindfulness, boosting metabolism, reducing stress,
                                    improving strength and flexibility, balancing hormones, and increasing mind-body awareness. Specific
                                    Yoga poses like Surya Namaskar, Warrior Poses are very effective for weight loss.
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
                                        <a href="/holistic/yoga" className='knowmore'> Know More &nbsp;
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
                                <h3 class="sub-heading haf-lin-de">Anti Obesity Platform</h3>
                                <p class="desc">
                                    AOP is a non-surgical revolutionary all-in-one treatment
                                    process that combines 4 different technologies that
                                    increase body temperature and expand the capillaries and arteries to
                                    improve the blood supply, enhance the nutrient supply,
                                    and oxygenation that facilitates Lipolysis and immediate skin
                                    tightening.
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
                                        <a href="/weightloss/antiobesityplatform" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={AntiObesity} alt="" srcset="" width={500} className='antiimg'/>
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className='home-service-row'>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={Hifu} alt="" srcset="" width={500} className='hifuimg' />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="service-info">
                                <h3 class="sub-heading haf-lin-de">Hifu Body</h3>
                                <p class="desc">
                                    HIFU is a non-invasive treatments for fat loss, weight
                                    loss, toning and skin tightening. HIFU Body treatments are the
                                    latest in non-invasive technology to target specific focused areas
                                    of fat in the quickest way possible.
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
                                        <a href="/weightloss/hifubody" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20}  />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row className='home-service-row' style={{ display: showServices ? 'flex' : 'none' }}>
                        <Col>
                            <div className="service-info anti-area">
                                <h3 class="sub-heading haf-lin-de">Body Mesotherapy</h3>
                                <p class="desc">
                                    AOP is a non-surgical revolutionary all-in-one treatment
                                    process that combines 4 different technologies that
                                    increase body temperature and expand the capillaries and arteries to
                                    improve the blood supply, enhance the nutrient supply,
                                    and oxygenation that facilitates Lipolysis and immediate skin
                                    tightening.
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
                                        <a href="/weightloss/mesotherapy" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20}  />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={BodyMesotherapy} alt="" srcset="" width={500} className='antiimg' />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className='home-service-row'style={{ display: showServices ? 'flex' : 'none' }}>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={FatX} alt="" srcset="" width={500}  className='hifuimg'/>
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="service-info">
                                <h3 class="sub-heading haf-lin-de">Fat X</h3>
                                <p class="desc">
                                    FatX being composed of Deixycholic acid and NAIS complex
                                    has an excellent effect on desolving fat cells.
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
                                        <a href="/weightloss/fatx" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className='home-service-row'style={{ display: showServices ? 'flex' : 'none' }}>
                        <Col>
                            <div className="service-info anti-area">
                                <h3 class="sub-heading haf-lin-de">Fir Detox</h3>
                                <p class="desc">
                                    We are exposed to hundreds of chemicals a day and not
                                    all of these can be processed by the body. The FIR Detox program
                                    helps to improve blood circulations targets subcutaneous fat, and
                                    body heating, triggers your sweat mechanism and dumps toxins
                                    straight out of your body through this channel.
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
                                        <a href="/weightloss/firdetox" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={FatDetox} alt="" srcset="" width={500} className='antiimg'/>
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className='home-service-row' style={{ display: showServices ? 'flex' : 'none' }}>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={Psychological} alt="" srcset="" width={500} className='hifuimg'/>
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="service-info">
                                <h3 class="sub-heading haf-lin-de">Psychological Counselling</h3>
                                <p class="desc">
                                    Counseling Psychology is a generalist health service (HSP) specialty in
                                    professional psychology that uses a broad range of culturally-informed and
                                    culturally-sensitive practices to help people improve their well-being, prevent
                                    and alleviate distress and maladjustment, resolve crises, and increase their
                                    ability to function better in their lives.
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
                                        <a href="/holistic/psychological" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row className='home-service-row' style={{ display: showServices ? 'flex' : 'none' }}>
                        <Col>
                            <div className="service-info anti-area">
                                <h3 class="sub-heading haf-lin-de">Meditation</h3>
                                <p class="desc">
                                    Meditation is an ancient practice that dates back thousands of years.
                                    Despite its age, this practice is common worldwide because it has benefits for brain
                                    health and overall well-being. With the help of modern technology, researchers continue
                                    to expand their understanding of how meditation helps people and why it works.
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
                                        <a href="/holistic/meditation" className='knowmore'> Know More &nbsp;
                                            <img src={rightarrow} alt="" srcset="" width={20} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="service-info-img">
                                <div className="img-box">
                                    <img src={Meditation} alt="" srcset="" width={500} className='antiimg' />
                                    <div class="overlay"></div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <div className="more pb-4">
                        <div class="button-container">
                            <button id='work' type="button" name="Hover" onClick={toggleServices}>
                                {showServices ? 'View Less' : 'View More'}
                            </button>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    )
}

export default HolisticService
