// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 footer--pin fixed-bottom mb-0 xl">
      <Container fluid>
        <Row >
          <Col sm={6} className='mt-3'>
          <Link to={'/ourdetails'}><h3 >About Us</h3></Link>  
            <p>
             Welcome to the team RAH !
              We are passionate environmentalists who are willing to provide sustainable transportation to the world.
            </p>
          </Col>
          <Col sm={6} className="social-icons mt-3" >
            <h3>Connect with Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />facebook
              </a>
              <br></br>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />twitter
              </a>
              <br></br>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />instagram
              </a>
              <br></br>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />linkedin
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;