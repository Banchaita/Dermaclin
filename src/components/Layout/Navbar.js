import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assests/images/SKIN AND CARE.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function TopNav() {
  const location = useLocation();
  // Check if the current route is the About page
  const isAboutPage = location.pathname === '/about';
  const isSevicePage = location.pathname === '/service';

  

  return (
    <>
      <Navbar expand="lg" sticky="top" className="top-navbar">
        <Container>
          <Navbar.Brand href="#home" className="d-block d-lg-none">
            <a href="http://">
              <img src={Logo} alt="" width={250} style={{ marginTop: "12px" }} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {(isAboutPage || isSevicePage) && (
                <Nav.Link href="/">Home</Nav.Link>
              )}
             <Nav.Link href="">
                <Link to="/about" class="nav-link active" aria-current="page">About us</Link>
             </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/service" class="nav-link active" aria-current="page">Our Services</Link>
              </Nav.Link>
              <NavDropdown title="Concern" id="basic-nav-dropdown">
                <Container>
                  <Row>
                    <Col xs={6} md={6}>
                      <NavDropdown.Item href="">
                        <Link to="/service" class="nav-link" aria-current="page">Acne</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Acne Scars</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Sunken Eyes</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">Saggy & Puffy Eyes</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">  Freckles</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Hair Loss</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Brow, Cheeks, Chin</NavDropdown.Item>

                    </Col>
                    <Col xs={6} md={6}>
                      <NavDropdown.Item href="#action/3.2">Dilated Pore</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Stretch Marks</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Cellulite & Loose Skin</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Warts & Skin Tags</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Glow & Maintenance</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Thin & Dark Lips</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Sweat Control</NavDropdown.Item>

                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <NavDropdown.Item href="#action/3.4">Double Chin</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Sagging & Ageing</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"> Fine Line & Wrinkles</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"> Pigmentation</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Rosacea</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">DullSkin</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Tattoo Removal</NavDropdown.Item>

                    </Col>
                    <Col xs={6} md={6}>
                      <NavDropdown.Item href="#action/3.4"> Tanning & Uneven Skin Tone</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"> Melasma</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4"> Alopecia</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">  Marks & Age Spots</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Excessive Body Hair</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Facial Hair</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Lip Augmuntation</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Facial Remodelling</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Aesthetic Cosmetology" id="basic-nav-dropdown">
                <Container>
                  <Row>
                    <Col xs={6} md={6}>
                      <h5 class="parent"><span>Skin Treatments</span></h5>
                      <NavDropdown.Item href="#action/3.1">Botox</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">HIFU</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">DermalFillers</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">Skin Rejuvenation</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Qswitch</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Platelet Rich Plasma(PRP)</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Chemical Peels</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Mesotherapy</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Diamond Microdermabrasion</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Synergy Plus</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Derma Roller</NavDropdown.Item>

                    </Col>
                    <Col xs={6} md={6}>
                      <h5 class="parent"><span>Laser Hair Removal</span></h5>
                      <NavDropdown.Item href="#action/3.2">Laser Hair Reduction</NavDropdown.Item>
                      <h5 class="parent"><span>Hair Restoration</span></h5>
                      <NavDropdown.Item href="#action/3.2">Platelet Rich Plasma</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Mesotherapy</NavDropdown.Item>
                      <h5 class="parent"><span>Facials</span></h5>
                      <NavDropdown.Item href="#action/3.2">Skin Maintenance Program</NavDropdown.Item>
                      <h5 class="parent"><span>Weight Loss</span></h5>
                      <NavDropdown.Item href="#action/3.2">Yoga</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Anti Obesity Platform</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">HIFU BODY</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Body Mesotherapy</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">FatX</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">FIR Detox</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Holistic" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Holistic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Yoga</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Meditation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Psychological Counselling</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Appointment</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
}

export default TopNav;