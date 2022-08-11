import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer_logo text-start">
              <img src={logo} alt="logo" />
              <h5 className="footer_title">Tasty Foods</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, nihil.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00 am - 10:00 pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone: +880100000000</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: example@gmail.com </span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Location: New York, USA </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email here" />
              <span>
                <i class="ri-send-plane-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <div className="copyright_text">
                <p>Copyright &copy; - 2022 | All Right Reserved by Tasty Foods.</p>
                <p>Website Developed by Shubrato Kumar</p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://web.facebook.com/">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.github.com/">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.youtube.com/">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/">
                    <i class="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
