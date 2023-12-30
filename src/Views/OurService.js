import React from 'react'
import { Footer, Header, TopNav } from '../components/Layout'
import ServiceBanner from '../components/Banner/ServiceBanner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import prp from "../assests/images/prp.jpg"
import Dermal from "../assests/images/Dermal Filler.jpg"
import Chemical from "../assests/images/Chemical peeling.jpg"
import SKINrejuanation from "../assests/images/SKIN-rejuanation.jpg"
import Microdermabrasion from "../assests/images/Microdermabrasion.jpg"
import hifu from "../assests/images/hifu-header.jpg"
import roller from "../assests/images/roller.jpg"
import face from "../assests/images/face.jpg"
import bptox from "../assests/images/bptox.jpg"






const OurService = () => {
    return (
        <>
            <Header />
            <TopNav />
            <ServiceBanner />
            <section class="articles">
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={prp} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>PRP</h2>
                            <p>
                                PRP is a restorative agent extracted from your blood.
                                It is used in a plethora of medical applications for example in hair restoration,
                                skin rejuvenation, acne & scar reduction etc
                            </p>
                            <a href="#" class="read-more">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article>

                    <div class="article-wrapper">
                        <figure>
                            <img src={Dermal} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Derma Filler</h2>
                            <p class="description">
                                Facial volume reduces as we begin to age. Dermal fillers are a minimally invasive
                                treatment that fills lines & wrinkles to restore lost volume resulting in fuller,
                                younger & revitalized face. Dermal Fillers are used to treat wrinkles, creases
                                and scars & is also used for lip augmentation & defining of the lip line.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article>

                    <div class="article-wrapper">
                        <figure>
                            <img src={Chemical} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Chemical Peels</h2>
                            <p class="description">
                                Chemical peeling is a popular procedure these days where a chemical agent or combination
                                of agents of defined strength are applied to the skin to help in remodeling and regeneration
                                of the skin, improved texture and surface abnormalities along with the pigment & acne reduction.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={SKINrejuanation} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Skin Rejuvenation</h2>
                            <p class="description">
                                Skin Rejuvenation technology is a non-surgical procedure that tones, lifts & smoothens your skin.
                                It brings back the youthful glow to your skin by stimulating the collagen present it by delivering
                                the right amount of heat energy.  This procedure also helps to address saggy & puffy eyes.
                            </p>
                            <a href="#" class="read-more">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={Microdermabrasion} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Diamond Microdermabrasion</h2>
                            <p class="description">
                                A safe, painless and highly effective procedure to improve various skin problems like dull skin,
                                pigmentation, acne scars and age spots. Microdermabrasion uses a high-pressure flow of fine crystals
                                to gently polish the skin. The crystals remove the outer layer of dead cells revealing the fresh,
                                silky smooth skin underneath. It is a very simple procedure with almost no downtime and can be
                                safely performed not only on the face but areas like neck, chest, hands, forearms and abdomen.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={hifu} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>HIFU</h2>
                            <p class="description">
                                HIFU (High Intensity Focused Ultrasound) otherwise known as Ultherapy  is a 100%,
                                non-invasive, FDA cleared procedure to help you achieve tighter, firmer, lifted skin.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={roller} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Derma Roller</h2>
                            <p class="description">
                                Dermaclin's Specialised Derma Roller is an easy-to-use & non-electrical device that you can use as per
                                your convenience. Its painless micro-points along with the up & down movement helps in stimulating
                                your skin & triggers your body into repairing the targeting area.
                            </p>
                            <a href="#" class="read-more">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={face} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Mesotherapy Skin</h2>
                            <p class="description">
                                Mesotherapy is a 100% safe & organic alternative to surgical & scarring cosmetic procedures.
                                As the amount of oxygen absorbed by skin decreases with age, many of your skin's toxins do
                                not get ?ushed out. Vitamins, minerals and amino acids are delivered directly into the skin
                                to nourish, rejuvenate, promote production of collagen and elastin, and stimulate your metabolism.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={bptox} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Botox</h2>
                            <p class="description">
                                Dermaclin's Botox treatment is a US FDA approved treatment that provides fast results against ageing,
                                wrinkles & fine lines. Botox is most effective on wrinkles that haven’t quite set - “dynamic” wrinkles
                                that appear during a facial movement, such as when you frown. For Face Contouring Botox gives beautiful
                                results such as High Cheekbones, Eyebrow Lift, defined Jawline. Botox can also be used as a prescribed
                                medicine to prevent headaches in adults with chronic migraine & to treat the symptoms of severe underarm sweating.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>


            </section>

            <Footer />
        </>
    )
}

export default OurService