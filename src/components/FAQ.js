import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { Container } from 'react-bootstrap';


const FAQ = () => {
    return (
        <>
            <section class="holistic-faq-service g-sec-pad">
                <Container>
                    <div className="secttion-heading">
                        <h2 className="ed-heading">Frequently Asked Questions</h2>
                    </div>
                </Container>
                <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
                    <MDBAccordion alwaysOpen initialActive={1}>
                        <MDBAccordionItem collapseId={1} headerTitle="What is holistic medicine?">
                            <p>
                                Holistic medicine, also known as holistic healthcare or holistic healing, is an approach to
                                medical care that considers the whole person—mind, body, spirit, and emotions—rather than
                                focusing
                                solely on specific symptoms or diseases. The fundamental principle of holistic medicine is that
                                all
                                aspects of an individual's life and well-being are interconnected and should be addressed
                                together to
                                achieve optimal health.
                                Key characteristics of holistic medicine include:
                                <ol>
                                    <li>Patient-Centered Care</li>
                                    <li>Prevention and Wellness</li>
                                    <li>Natural Therapies</li>
                                    <li>Mind-Body Connection</li>
                                    <li>Balancing Energy</li>
                                    <li>Nutrition and Diet</li>
                                    <li>Personalized Care</li>
                                    <li>Complementary and Integrative Care</li>
                                </ol>

                            </p>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle="What conditions can be treated with holistic medicine?">
                            <p>
                                Holistic medicine takes a comprehensive approach to health and well-being, which means it can
                                address a wide range of
                                conditions and health concerns. Some conditions that can be treated or managed with holistic
                                medicine include:
                                <ol>
                                    <li>Chronic Pain</li>
                                    <li>Stress and Anxiety</li>
                                    <li>Digestive Disorders</li>
                                    <li>Immune System Support</li>
                                    <li>Hormonal Imbalances</li>
                                    <li>Allergies</li>
                                    <li>Autoimmune Diseases</li>
                                    <li>Mental Health Disorders</li>
                                    <li>Cardiovascular Health</li>
                                    <li>Cancer Support</li>
                                    <li>Weight Management</li>
                                    <li> Sleep Disorders</li>

                                </ol>
                            </p>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle="Can holistic medicine be used alongside conventional medicine?">
                            <p>
                                Yes, holistic medicine can be used alongside conventional medicine, and this approach is often
                                referred to as
                                integrative or complementary medicine. Integrative medicine combines the principles of holistic
                                care with conventional
                                medical treatments to provide a comprehensive and patient-centered approach to health and
                                healing. Here are some key
                                points to consider:
                                <ol>
                                    <li>Collaborative Care</li>
                                    <li>Comprehensive Approach</li>
                                    <li>Individualized Care:</li>
                                    <li>Safety:</li>
                                    <li>Managing Side Effects:</li>
                                    <li>Preventive Care:</li>
                                    <li>Patient-Centered Care:</li>
                                    <li>Mind-Body Connection:</li>
                                </ol>
                            </p>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={4} headerTitle="Is holistic medicine effective?">
                            <p>
                                The effectiveness of holistic medicine can vary depending on several factors,
                                including the specific condition being treated, the individual's overall health,
                                the expertise of the practitioner, and the chosen holistic therapies. Here are some
                                key points to consider regarding the effectiveness of holistic medicine:

                                <ol>
                                    <li>Complementary Approach</li>
                                    <li>Individualized Care</li>
                                    <li>Preventive Care</li>
                                    <li>Chronic Conditions</li>
                                    <li>Mind-Body Connection</li>
                                    <li>Nutritional Support</li>
                                    <li>Natural Remedies</li>
                                    <li>Patient Satisfaction</li>
                                </ol>

                            </p>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </section>

        </>
    )
}

export default FAQ
