import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assests/images/SKIN AND CARE.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';

function TopNav() {
  const location = useLocation();
  // Check if the current route is the About page
  const isAboutPage = location.pathname === '/about';
  const isSevicePage = location.pathname === '/service';
  const isdarkthinlipPage = location.pathname === '/darkthinlip';
  const isAppointmentPage = location.pathname === '/appointment';
  const isContactPage = location.pathname === '/contact';
  const isholisticPage = location.pathname === '/holistic/';
  const isholisticpsychologicalPage = location.pathname === '/holistic/psychological';
  const isholisticmeditationPage = location.pathname === '/holistic/meditation';
  const isholisticyogaPage = location.pathname === '/holistic/yoga';
  const isweightlossyogaPage = location.pathname === '/weightloss/yoga';
  const isweightlossmesotherapyPage = location.pathname === '/weightloss/mesotherapy';
  const isweightlosshifubodyPage = location.pathname === '/weightloss/hifubody';
  const isweightlossfirdetoxPage = location.pathname === '/weightloss/firdetox';
  const isweightlossfatxPage = location.pathname === '/weightloss/fatx';
  const isweightlossantiobesityplatformPage = location.pathname === '/weightloss/antiobesityplatform';
  const isconcernalopeciaPage = location.pathname === '/concern/alopecia';
  const isconcernacnescarsPage = location.pathname === '/concern/acnescars';
  const isconcernancePage = location.pathname === '/concern/acne';







  

  

  return (
    <>
      <Navbar expand="lg" sticky="top" className="top-navbar">
        <Container>
          <Navbar.Brand href="#home" className="d-block d-lg-none">
            <a href="/">
              <img src={Logo} alt="" width={250} style={{ marginTop: "12px" }} className='navbarlogo' />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              {(isAboutPage || isSevicePage || isdarkthinlipPage || isAppointmentPage || isContactPage || isholisticPage || isholisticpsychologicalPage || isholisticmeditationPage || isholisticyogaPage || isweightlossyogaPage || isweightlosshifubodyPage || isweightlossmesotherapyPage || isweightlossfirdetoxPage || isweightlossfatxPage || isweightlossantiobesityplatformPage || isconcernalopeciaPage|| isconcernacnescarsPage  || isconcernancePage) && (
                <Nav.Link href="/">Home</Nav.Link>
              )}

             <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/service">Our Services</Nav.Link>
              <NavDropdown title="Concern" id="basic-nav-dropdown">
                <Container className="dropdown-container" >
                  <Row>
                    <Col xs={12} md={6} sm={12}>
                      <NavDropdown.Item href="/concern/acne">Acne </NavDropdown.Item>
                      <NavDropdown.Item href="/concern/acnescars">Acne Scars</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/sunkeneyes">Sunken Eyes</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/saggypuffyeye">Saggy & Puffy Eyes</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/freckles">  Freckles</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/Hairloss">Hair Loss</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/darkcircles">Dark Circles</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/browcheeks">Brow, Cheeks, Chin</NavDropdown.Item>

                    </Col>
                    <Col xs={12} md={6}sm={12}>
                      <NavDropdown.Item href="/concern/dilatepores">Dilated Pore</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/stretchmarks">Stretch Marks</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/cellulitelooseskin">Cellulite & Loose Skin</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/wartsskintags">Warts & Skin Tags</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/glowmaintenance">Glow & Maintenance</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/darkthinlip">Thin & Dark Lips</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/sweatcontrol">Sweat Control</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/lipaugmuntation">Lip Augmuntation</NavDropdown.Item>


                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6} sm={12}>
                      <NavDropdown.Item href="/concern/doublechin">Double Chin</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/saggingageing">Sagging & Ageing</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/finelineswrinkles"> Fine Line & Wrinkles</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/pigmentation"> Pigmentation</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/rosacea">Rosacea</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/dullskin">DullSkin</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/tattooremoval">Tattoo Removal</NavDropdown.Item>

                    </Col>
                    <Col xs={12} md={6} sm={12}>
                      <NavDropdown.Item href="/concern/tanningunevenskin"> Tanning & Uneven Skin Tone</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/melasma"> Melasma</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/alopecia">Alopecia</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/marksspots">  Marks & Age Spots</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/excessbody">Excessive Body Hair</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/facialremodelling">Facial Remodelling</NavDropdown.Item>
                      <NavDropdown.Item href="/concern/facialhair">Facial Hair</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Aesthetic Cosmetology" id="basic-nav-dropdown">
                <Container className="dropdown-container" >
                  <Row>
                    <Col xs={12} md={6}>
                      <h5 class="parent"><span>Skin Treatments</span></h5>
                      <NavDropdown.Item href="/aesthetic/botox">Botox</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/hifu">HIFU</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/dermalfillers">Dermal Fillers</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/skinrejuvenation">Skin Rejuvenation</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/qswitch">Qswitch</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/prp">Platelet Rich Plasma(PRP)</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/chemicalpeeling">Chemical Peels</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/facemesotherapy">Mesotherapy</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/diamond">Diamond Microdermabrasion</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/synergyPlus">Synergy Plus</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/dermaroller">Derma Roller</NavDropdown.Item>

                    </Col>
                    <Col xs={12} md={6}>
                      <h5 class="parent"><span>Laser Hair Removal</span></h5>
                      <NavDropdown.Item href="/aesthetic/LaserHairReduction">Laser Hair Reduction</NavDropdown.Item>
                      <h5 class="parent"><span>Hair Restoration</span></h5>
                      <NavDropdown.Item href="/aesthetic/PlateletRichPlasma">Platelet Rich Plasma</NavDropdown.Item>
                      <NavDropdown.Item href="/aesthetic/Mesotherapy">Mesotherapy</NavDropdown.Item>
                      <h5 class="parent"><span>Facials</span></h5>
                      <NavDropdown.Item href="/aesthetic/SkinMaintenance">Skin Maintenance Program</NavDropdown.Item>
                      <h5 class="parent"><span>Weight Loss</span></h5>
                      <NavDropdown.Item href="/weightloss/yoga">Yoga</NavDropdown.Item>
                      <NavDropdown.Item href="/weightloss/antiobesityplatform">Anti Obesity Platform</NavDropdown.Item>
                      <NavDropdown.Item href="/weightloss/hifubody">HIFU BODY</NavDropdown.Item>
                      <NavDropdown.Item href="/weightloss/mesotherapy">Body Mesotherapy</NavDropdown.Item>
                      <NavDropdown.Item href="/weightloss/fatx">FatX</NavDropdown.Item>
                      <NavDropdown.Item href="/weightloss/firdetox">FIR Detox</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Holistic" id="basic-nav-dropdown" className='holistic-drop'>
                <NavDropdown.Item href="/holistic/">Holistic</NavDropdown.Item>
                <NavDropdown.Item href="/holistic/yoga">Yoga</NavDropdown.Item>
                <NavDropdown.Item href="/holistic/meditation">Meditation</NavDropdown.Item>
                <NavDropdown.Item href="/holistic/psychological">Psychological Counselling</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/appointment">Appointment</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
}

export default TopNav;