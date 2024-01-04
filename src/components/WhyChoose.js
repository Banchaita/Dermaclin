import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vedio from '../assests/images/Vedio-of-cline.mp4'
import ReactPlayer from 'react-player';
import plus from '../assests/images/plus.png'

const WhyChoose = () => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        // Simulating data or fetching from an API
        const items = ['Clinic Dermaclin along with its team of experts provides a complete end-to-end solution for all your Aesthetic, Cosmetic, Wellness needs',
        'Accommodation &amp; food for International &amp; local patients opting for surgical procedures that require a few days.',
        'A skilled, experienced, qualified &amp; Internationally trained panel of doctors plus experienced and knowledgeable industry specialists.',
        '&nbsp;&nbsp;Latest &amp; modern techniques used for all aesthetic &amp; cosmetic &amp; wellness treatments.',
        'State of the art infrastructure wherein International standards is maintained with regard to ambiance, procedures, machinery, instruments &amp; hygiene.',
        'We ensure a wow clinical experience',
        'Intensive pre &amp; post care &amp; advisory',
        'Latest procedures at an affordable cost',
        'Easy &amp; quick EMIs with several options.',
        'Drop &amp; Pick up services for patients that opt for surgical procedures.'
    ];
    
        // Transforming the data before setting it in state
        const modifiedItems = items.map(item => (
          <li key={item} style={{listStyle:'none', }}>
            <img src={plus} alt="" style={{ width: '10px'}} />
            &nbsp; {item}
          </li>
        ));
    
        setListItems(modifiedItems);
      }, []);


   
  return (
    <>
        <section className="whychosse">
            <Container className='choose-container'>
                  <Row>
                      <Col className='video-contant'>
                          <div class="g-flex-col about-dermaclin">
                              <ReactPlayer
                                  url="https://medville-eight.vercel.app/assests/images/Vedio-of-cline.mp4"
                                  width="640"
                                  height="360"
                                  controls={false}
                                  playing={true}
                                  loop={true}
                                  muted={true} // Mute the video to enable autoplay
                                  playbackRate={1}
                                  style={{margin:"5px"}}
                              />

                          </div>
                      </Col>
                      <Col className='faq-contant'>
                          <div class="section-heading text-center mt-4">
                              <h2 class="ed-heading">Why Choose Dermaclin</h2>
                          </div>
                          <ul>
                            <span>
                                &nbsp;&nbsp; {listItems}
                            </span>
                          </ul> 
                      </Col>
                  </Row>
                      <Col className='vedio-contamt-bottom-part'>
                      <div class="section-heading">
                            <h2 class="ed-heading text-white">WE ARE Dermaclin</h2>
                            <p class="desc">
                              Our core purpose is to help people live healthy, happy &amp; confident. The
                              objective is to set a benchmark by delivering a beautiful clinical experience
                              that brings a smile. It is not a goal, strategy or plan to be the best.&nbsp; It
                              is an understanding of what one can be best at.
                            </p>
                        </div>
                      </Col>
            </Container>
        </section>
    </>
  )
}

export default WhyChoose