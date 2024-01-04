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
import clock from "../../assests/images/clock.png"
import { Link } from 'react-router-dom';

function Header () {
  return (
    <>
          <header className='top-header'>
              <Container fluid>
                <Row>
                    <Col xs={4} className='header-logo'>
                        <div className='top-logo'>
                            <Link to="/">
                                <img src={Logo} alt="" width={500} />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6} className='header-contact'>
                        <div className="contact-div">
                            <ui className="top-contact">
                                <li className="g-li">
                                    <a href="tel:+919465587840">
                                    <img src={telephone} alt="" class="phone"/>
                                    &#43;91 9465587840
                                    </a>
                                </li>
                                &nbsp;&nbsp;
                                <li class="g-li"><a href class="g-anchor">|</a></li> &nbsp;
                                <li className="g-li">
                                    <a href="mailto:Dermaclin125@gmail.com">
                                    <img src={mail} alt=""  class="mail"/> &nbsp;
                                    Dermaclin125&#64;gmail&#46;com &nbsp; &nbsp;
                                    </a>
                                </li>
                                <li class="g-li"><a href class="g-anchor">|</a></li> &nbsp;
                                <li className="g-li">
                                    <a href="/#">
                                    <img src={clock} alt=""  class="clock"/> &nbsp;
                                        Mon-Sat: 08:00 AM - 08:00 PM
                                         Sun: Closed
                                    </a>
                                </li>
                            </ui>
                        </div>
                    </Col>
                    <Col xs={2} className='header-contact-media'>
                        <div className="contact-media">
                            <ul className="top-contact-media">
                                <li className="top-g-li">
                                    <a href="https://www.facebook.com/profile.php?id=61555295933020" target='blank'>
                                    <img src={facebook} alt="" class="phone"/>
                                    </a>
                                </li>
                                <li className="top-g-li">
                                    <a href="https://www.instagram.com/dermaclin_skin_care/" target='blank'>
                                    <img src={instagram} alt=""class="phone"/>
                                    </a>
                                </li>
                                <li className="top-g-li">
                                    <a href="http://">
                                    <img src={pinterest} alt="" class="phone"/>
                                    </a>
                                </li>
                                <li className="top-g-li">
                                    <a href="http://">
                                    <img src={twitter} alt=""class="phone"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
              </Container>
          </header>
    </>
    

      
  );
}

export default Header;