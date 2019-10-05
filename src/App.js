import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';

function App() {
  return (
        <Container className="AppWrapper" fluid={true}> 
        <Row fluid={true} className="intro-row">
          <Col>
              <h2 style={{color: 'black', textShadow: '1px 1px 4px 6px #333'}}><FontAwesomeIcon icon={faInfoCircle}/> What kind of user are you?</h2>
			        <hr/>
          </Col> 
        </Row>
        <Row fluid={true} className="role-row">
          <Col>
                   <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/350x350" />
                    <Card.Body>
                      <Card.Title>Product Owner</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
          </Col>
          <Col fluid={true}>
              <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/350x350" />
                    <Card.Body>
                      <Card.Title>Scrum Master</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
          </Col>
          <Col fluid={true}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/350x350" />
                <Card.Body>
                  <Card.Title>Software Engineer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col fluid={true}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/350x350" />
                <Card.Body>
                  <Card.Title>QA Engineer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
		<Row className="progress-row">
			<Col fluid={true}>
        <br/>
				<ProgressBar now={60}/>
			</Col>
		</Row>

      </Container>
  );
}

export default App;
