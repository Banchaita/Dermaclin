import React from 'react'
import {Footer, Header, TopNav } from '../../components/Layout'
import QueryFrom from '../../components/QueryFrom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import AntiObesityPlatformbanner from '../../components/Banner/AntiObesityPlatformbanner';

const AntiObesityPlatform = () => {
  return (
    <>
        <Header/>
        <TopNav/>
        <AntiObesityPlatformbanner/>
        <section className="experts-area g-sec-pad">
                <Container>
                    <Row>
                        <div className="section-heading">
                            <h2 className="g-heading ed-heading client-exp banner-title">Anti Obesity Platform </h2>
                        </div>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <p class="hello">&nbsp;</p>
                            <p>FatX being composed of Deixycholic acid and NAIS complex has an&nbsp;&nbsp; excellent effect on
                                desolving fat cells.<strong>&nbsp;</strong><br />
                            </p>

                            <p>
                                <strong>Lipolysis:</strong>
                                <ol>
                                    <li>The fat cell itself is decomposed and absorbed as the cell membrane is broken, which covers the fat cell. </li>
                                    <li>The number of fat cells are decreased permanently as the fat cell itself is eliminated.</li>
                                    <li>Fat cells are not regenerated according to external situations.</li>
                                </ol>
                            </p>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={6}>
                            <div>
                                <QueryFrom />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section >
        <Footer/>
    
    </>
  )
}

export default AntiObesityPlatform