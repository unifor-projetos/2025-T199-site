import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer-unifor py-4"
      style={{
        backgroundColor: "#005CA9",
      }}
    >
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Sobre o Espaço</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              a.
            </p>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#" className="mx-2">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Exibições</a>
              </li>
              <li>
                <a href="#">Eventos</a>
              </li>
              <li>
                <a href="#">Galerias</a>
              </li>
              <li>
                <a href="#">Visite-nos</a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                Av. Washington Soares, 1321 - Edson Queiroz
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" />
                (85) 3477-3000
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                museu@unifor.br
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <small>
              &copy; {new Date().getFullYear()} Espaço Cultural Yolanda e Edson
              Queiroz
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
