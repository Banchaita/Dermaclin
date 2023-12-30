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
                        <Col className='logo-part'>
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
                        <Col>
                            <div className="foot-manu-one">
                                <ul>
                                    <li><a href="/Dermaclin/concern/acne.html">Acne</a></li>
                                    <li><a href="/Dermaclin/concern/acnescars.html">Acne scars</a></li>
                                    <li><a href="/Dermaclin/concern/pigmentation.html">Pigmentation</a></li>
                                    <li><a href="/Dermaclin/concern/fine lines & wrinkles.html"> Fine lines &
                                        wrinkles</a></li>
                                    <li><a href="/Dermaclin/concern/sagging-ageing.html">Sagging & ageing</a>
                                    </li>
                                    <li><a href="/Dermaclin/concern/FacialRemodelling.html">Facial
                                        Remodelling</a></li>
                                    <li><a href="/Dermaclin/concern/hair-loss.html">Hair loss</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="foot-manu-one">
                                <ul>
                                    <li><a href="/Dermaclin/concern/excessivebodyhair.html">Excessive body hair</a></li>
                                    <li><a href="/Dermaclin/concern/lip-augmuntation.html">Lip augmentation</a></li>
                                    <li><a href="/Dermaclin/concern/sweat.html">Sweat control</a></li>
                                    <li><a href="/Dermaclin/aesthetic/dermalfillers.html">Dermal Fillers</a></li>
                                    <li><a href="/Dermaclin/aesthetic/HIFU.html">HIFU</a></li>
                                    <li><a href="/Dermaclin/aesthetic/PRP.html">PRP</a></li>
                                    <li><a href="/Dermaclin/aesthetic/dermaroller.html">Derma Roller</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
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
                        <Col>
                            <div className="foot-manu">
                                <ul>
                                    <li># HM-125, Phase-3B1 Mohali,</li>
                                    <li>Sector 60 Phase 3b 1, Mohali - 160059 (Near Rose Garden)</li><br />
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
                        <div class="col-md-12" style={{ background: "#E7E9E7",height:"40px" }}>
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
