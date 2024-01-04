import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../../assests/images/SKIN AND CARE.png"
import telephone from "../../assests/images/telephone.png"
import mail from "../../assests/images/mail.png"
import facebook from "../../assests/images/facebook.png"
import instagram from "../../assests/images/instagram.png"
import pinterest from "../../assests/images/pinterest.png"
import twitter from "../../assests/images/twitter.png"
import ScrollToTop from '../ScrollToTop';


const Footer = () => {
    return (
        <>
            <section className="footer">
                <Container>
                    <Row>
                        <Col className='logo-part' md={2} sm={12} xs={12} lg={4}>
                            <div className="foot-logo">
                                <img src={Logo} alt="" srcset="" width={500} />
                            </div>
                            <div className="media-logo ">
                                <ul>
                                    <li>
                                        <a href="mailto:Dermaclin125@gmail.com">
                                            <img src={mail} alt="" srcset="" width={20} />

                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://">
                                            <img src={facebook} alt="" srcset="" width={20} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://">
                                            <img src={instagram} alt="" srcset="" width={20} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://">
                                            <img src={pinterest} alt="" srcset="" width={20} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://">
                                            <img src={twitter} alt="" srcset="" width={20} />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </Col>
                        <Col md={2} sm={6} xs={6} lg={2}>
                            <div className="foot-manu-one">
                                <ul>
                                    <li><a href="/Concern/acne">Acne</a></li>
                                    <li><a href="/concern/acnescars">Acne scars</a></li>
                                    <li><a href="/concern/pigmentation">Pigmentation</a></li>
                                    <li><a href="/concern/finelineswrinkles"> Fine lines &
                                        wrinkles</a></li>
                                    <li><a href="/concern/saggingageing">Sagging & ageing</a>
                                    </li>
                                    <li><a href="/concern/facialremodelling">Facial
                                        Remodelling</a></li>
                                    <li><a href="/concern/Hairloss">Hair loss</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2} sm={6} xs={6} lg={2}>
                            <div className="foot-manu-one">
                                <ul>
                                    <li><a href="/concern/excessbody">Excessive body hair</a></li>
                                    <li><a href="/concern/lipaugmuntation">Lip augmentation</a></li>
                                    <li><a href="/concern/sweatcontrol">Sweat control</a></li>
                                    <li><a href="/aesthetic/DermalFillers">Dermal Fillers</a></li>
                                    <li><a href="/aesthetic/hifu">HIFU</a></li>
                                    <li><a href="/aesthetic/diamond">PRP</a></li>
                                    <li><a href="/aesthetic/DermaRoller">Derma Roller</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={6} lg={2}>
                            <div className="foot-manu-one">
                                <ul>
                                    <li><a href="Dermaclin/dermaclin.html">Career</a></li>
                                    <li><a href="Dermaclin/dermaclin.html">Faq</a></li>
                                    <li><a href="Dermaclin/dermaclin.html">Blog</a></li>
                                    <li><a href="Dermaclin/dermaclin.html">Gallery</a></li>
                                    <li><a href="Dermaclin/dermaclin.html">Privacy Policy</a></li>
                                    <li><a href="/Dermaclin/contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col  md={3} sm={6} xs={6} lg={2}>
                            <div className="foot-manu">
                                <ul>
                                    <li># HM-125, Phase-3B1,</li>
                                    <li>Sector 60 Mohali - 160059 (Near Rose Garden)</li><br />
                                    <li>
                                        <a href="tel:9465587840" class="g-anchor">
                                            <img src={telephone} alt="" width="15px" />
                                            &#43;91 9465587840  
                                        </a>
                                        <ScrollToTop/>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div class="col-md-12 copyright" style={{ background: "#E7E9E7",height:"40px" }}>
                            <p style={{ textAlign: "center", marginTop: "15px", color: "#000",}}>Design & Developed By <a
                                href="/Dermaclin/" style={{ color: "#000", fontWeight: "600" }}
                                target="_blank">Dermaclin</a></p>
                        </div>
                    </Row>
                </Container>
            </section>
            
            
        </>
    )
}

export default Footer
