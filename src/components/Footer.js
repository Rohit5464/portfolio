import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="animate__animated animate__zoomIn"><img src={logo} alt="Logo" className="img2"/></div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rohit-dubey-232742224/" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Rohit5464" target="_blank">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.instagram.com/rohit_dubey_._?r=nametag" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright ©2023 by RO-HIT. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
