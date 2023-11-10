import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rating from "./Rating";
import { auto, auto2, auto3 } from "../assets";
import "./Feedback.css";
import { Element } from "react-scroll";



function MultiCarousel() {
  return (
    <Element name="Testimonials">
      <Container fluid>
        <h2
          className="Heading-1  text-center my-4 py-5"
          style={{ color: " #084aa6" }}
        >
          User Testimonials
        </h2>

        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Container className="mb-5">
              <Row className="p-5 ">
                <Col
                  sm={12}
                  lg={2}
                  className=" d-flex align-items-center justify-content-center"
                >
                  <img
                    className="img-fluid"
                    src="profile.png"
                    alt=""
                    style={{
                      height: "140px",
                      width: "140px",
                      borderRadius: "50px",
                    }}
                  />
                </Col>
                <Col className="align-items-center" lg={10}>
                  <h5 style={{ color: "#084aa6" }}>Mahesh</h5>
                  <Rating value={4.5} />
                  <p style={{ color: "#084aa6" }}>AVP @ Reliance Jio</p>

                  <p style={{ fontStyle: "italic" }}>
                    <span
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      "
                    </span>{" "}
                    Mypickup has made my travel from office to home a hassle
                    free affair. Earlier i used to struggle to find a cab back
                    home on time - This awesome service provides well maintained
                    E ricks on time with drivers who are courteous.{" "}
                    <span
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      "
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="mb-5">
              <Row className="p-5">
                <Col
                  sm={12}
                  lg={2}
                  className=" d-flex align-items-center justify-content-center"
                >
                  <img
                    className="img-fluid"
                    src="girl.png"
                    alt=""
                    style={{
                      height: "140px",
                      width: "140px",
                      borderRadius: "50px",
                    }}
                  />
                </Col>
                <Col className="align-items-center" lg={10}>
                  <h5 style={{ color: "#084aa6" }}>Sulbha</h5>
                  <Rating value={4.5} />

                  <p className="" style={{ color: "#084aa6" }}>
                    Program Manager @ Zeta, India
                  </p>
                  <p style={{ fontStyle: "italic" }}>
                    <span
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      "
                    </span>{" "}
                    I can vouch for MyPickup. Been a customer for nearly 2
                    months now! Sharing with co-passengers saves a lot of money
                    and hassle. I suggest we all use it to improve Bangalore
                    traffic conditions.{" "}
                    <span
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      "
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="my-5">
              <Row className="p-5">
                <Col
                  sm={12}
                  lg={2}
                  className=" d-flex align-items-center justify-content-center"
                >
                  <img
                    className="img-fluid"
                    src="girl.png"
                    alt=""
                    style={{
                      height: "140px",
                      width: "140px",
                      borderRadius: "50px",
                    }}
                  />
                </Col>
                <Col className="align-items-center" lg={10}>
                  <h4 style={{ color: "#084aa6" }}>Prasanthi</h4>
                  <Rating value={4.5} />

                  <p style={{ color: "#084aa6" }}>Manager @ Ola Electric </p>
                  <p style={{ fontStyle: "italic" }}>
                    <span
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      "
                    </span>{" "}
                    MyPickup helps me save a lot of booking time. All autos are
                    electric which is a feel-good factor. Drivers are courteous
                    and rides are affordable. No surge-pricing like other apps.{" "}
                    <span
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      "
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Element>
  );
}

export default MultiCarousel;