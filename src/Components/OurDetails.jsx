import { Row,Card ,Col,Container,} from "react-bootstrap";
// import img3 from '../harshal.jpg'
import React from "react";
import Image from "react-bootstrap";
import img3 from '../harshal.jpg'
import img4 from '../rohit.jpg'
import img5 from '../aayushi.jpg'
export function OurDetails(){
    return(
        <Container className="mt-5">
        <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Harshal Sapkale</Card.Title>
                            <Card.Text>
                                Education : Electical Engineering
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>Rohit More</Card.Title>
                            <Card.Text>
                            Education : Mechanical Engineering
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Aayushi Kaushal</Card.Title>
                            <Card.Text>
                            Education : Electical Engineering
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Container>

    );
}