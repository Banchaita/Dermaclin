import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const HAPPYCLIENT = () => {
    return (
        <>
            <section class="client-area g-sec-pad">
                <Container>
                    <div className="secttion-heading">
                        <h2 className="ed-heading">OUR HAPPY CLIENT'S </h2>
                    </div>
                </Container>
                <MDBContainer className='py-5'>
                    <MDBCarousel showControls dark>
                        <MDBCarouselItem className="active">
                            <MDBContainer>
                                <MDBRow className="text-center">
                                    <MDBCol lg="4" className="mb-5 mb-md-0 card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Tanuja Mahant</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Dr Shivani is an amazing Dermat, I consulted her for mole removal & my
                                            sister's acne issues along with Hydra Facial & the results were amazing.
                                            She is very good at what she does & addresses the issues very nicely &
                                            patiently. Does not force you to take a particular treatment, suggests the best way outs only.
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol lg="4" className="d-none d-lg-block card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Prabhdeep Kaur</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            I've consulted many dermatologists in the past but my experience with Dr shivani
                                            at the Dermaclin  has been the most satisfying until now. I've been visiting her
                                            since 2022 and I wouldn't be lying if I say that for a person like me who has had
                                            major issues with my skin and hair , getting treated by Dr shivani  has brought
                                            me tremendous satisfaction, helping me get rid of almost all of my skin problems.
                                            Thank you Dr shivani  ♥️🙏
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol lg="4" className="d-none d-lg-block card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Amandeep Minhas</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            I recently visited a skin care doctor and I must say, it was an outstanding experience.
                                            The doctor was incredibly thorough in their examination and explained everything in a way that was
                                            easy to understand.
                                            Overall, I would highly recommend this skin care doctor to anyone looking for a knowledgeable and
                                            caring professional. They truly exceeded my expectations and I look forward to my next visit with them.
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBContainer>
                                <MDBRow className="text-center">
                                    <MDBCol lg="4" className="mb-5 mb-md-0 card-part">

                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Gaurav Sharma</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Great job done BY DR shivani i got MNRF  from DERMACLIN its very impressive when i see the results.
                                            Thankyou DR shivani for great service
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol lg="4" className="d-none d-lg-block card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Vishal Thakur</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            I went to the clinic with an LVH (Left ventricular hypertrophy) issue .
                                            After I was prescribed a medicine, my goal was to get rid of the medicine
                                            by making changes in my lifestyle and eating habits.
                                            I have to say I didn't get the same experience as most of the doctors I have
                                            visited. She is a master of her skills and understands how to deal with patients.
                                            Kudos to Dr Shivani.
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol lg="4" className="d-none d-lg-block card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Khushi Sharma</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            I m very pleased with the treatment. .. Dr. Shivani is really amazing , brilliant and very kind.
                                            I m happy with my skin now.
                                            Kudos to Dr Shivani.
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBContainer>
                                <MDBRow className="text-center">
                                    <MDBCol lg="4" className="mb-5 mb-md-0 card-part">

                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Sabi Dhiman</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            I appreciate all of the information, resources nd options you provide.
                                            Although i m borderline on a few metrics , you’ve empowered me to take
                                            control of my own health nd make informed choices nd changes.
                                            Thankyou!  Mam
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol lg="4" className="d-none d-lg-block card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Sartaj Kahlon</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Many thanks to Dr. Shivani who treated my facial skin disease with the right treatment 😊
                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol lg="4" className="d-none d-lg-block card-part">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <h5 className="mb-3">Bhindaaujla Aujla</h5>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            Amazing Experience Amazing Doctor..And Doctor Shiwani Ji Great Person Thanks Doc😊😊🙏🙏

                                        </p>
                                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                            <li>
                                                <MDBIcon
                                                    fas
                                                    icon="star"
                                                    size="sm"
                                                    className="text-warning"
                                                />
                                            </li>
                                        </MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCarouselItem>
                    </MDBCarousel>
                </MDBContainer>
            </section>




        </>

    );
};

export default HAPPYCLIENT;
