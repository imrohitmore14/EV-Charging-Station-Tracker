
// src/components/HomePage.js
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import img from '../car.jpg'
import img1 from '../two wheeler.jpg'
import img2 from '../charger.jpg'
// import Footer from "./components/Footer.js";



export function Home() {
    return (

        <Container className="mt-5">
            {/* <div className="my-4">
                    <h1>Welcome to the Electric Vehicle World</h1>
                <p>
                    Explore the future of transportation with our eco-friendly electric
                    vehicles.
                </p>
                <Link to="/vehicles">
                    <Button variant="primary">Explore Vehicles</Button>
                </Link>
            </div>

            <Row>
                <Col md={4}>
                    <h2>Electric Cars</h2>
                    <p>
                        Discover our lineup of electric cars that combine style with
                        sustainability.
                    </p>
                </Col>
                <Col md={4}>
                    <h2>Electric Bikes</h2>
                    <p>
                        Experience the thrill of emission-free riding with our electric
                        bikes.
                    </p>
                </Col>
                <Col md={4}>
                    <h2>Charging Solutions</h2>
                    <p>
                        Learn about our charging infrastructure to keep your vehicle powered
                        up.
                    </p>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Electric Cars</Card.Title>
                            <Card.Text>
                                Discover our lineup of electric cars that combine style with
                                sustainability.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Electric Bikes</Card.Title>
                            <Card.Text>
                                Experience the thrill of emission-free riding with our electric
                                bikes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Charging Solutions</Card.Title>
                            <Card.Text>
                                Learn about our charging infrastructure to keep your vehicle powered
                                up.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
           
            

        </Container>
    );
};
// // src/components/HomePage.js
// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export function Home() {
//   return (
//     <Container>
//       <div className="my-4">
//         <h1>Welcome to the Electric Vehicle World</h1>
//         <p>
//           Explore the future of transportation with our eco-friendly electric
//           vehicles.
//         </p>
//         <Link to="/vehicles">
//           <Button variant="primary">Explore Vehicles</Button>
//         </Link>
//       </div>

//       <Row>
//         <Col md={4}>
//           <h2>Electric Cars</h2>
//           <p>
//             Discover our lineup of electric cars that combine style with
//             sustainability.
//           </p>
//         </Col>
//         <Col md={4}>
//           <h2>Electric Bikes</h2>
//           <p>
//             Experience the thrill of emission-free riding with our electric
//             bikes.
//           </p>
//         </Col>
//         <Col md={4}>
//           <h2>Charging Solutions</h2>
//           <p>
//             Learn about our charging infrastructure to keep your vehicle powered
//             up.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
