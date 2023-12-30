import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const QueryFrom = () => {
  return (
    <>
        <Container className='from-area'>
            <Row>
                <Col>
                      <div className="secttion-heading">
                          <h4 className="query-title">Submit Query</h4>
                      </div>

                      <div className="from-part">
                          <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Control type="text" placeholder="Name" className="mb-3" />
                                  <Form.Control type="email" placeholder="Email" className="mb-3" />
                                  <Form.Control type="text" placeholder="Phone" className="mb-3"/>
                                  <Form.Control type="text" placeholder="City" className="mb-3" />
                                  <Form.Control type="text" placeholder="Query" className="mb-3"/>
                              </Form.Group>   
                          </Form>
                          <div className="submit-btn">
                              <div class="button-container">
                                  <span class="mas">Submit</span>
                                  <button id='work' type="button" name="Hover">Submit</button>
                              </div>
                          </div>
                      </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default QueryFrom