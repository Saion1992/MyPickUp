import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slidersection.css"
import { Element } from "react-scroll";


const CarouselComponent = () => {
    
  return (
    <Element name="features">
      <Carousel
        fade
        data-bs-theme="dark"
        style={{ backgroundColor: "" }}
        className="mb-5"
      >
        <Carousel.Item interval={1000}>
          <Container fade fluid>
            <Row>
              <Col xs={12} md={6}>
                <Row
                  className="p-lg-5"
                  style={{
                    height: "30%",
                    backgroundColor: "#084aa6",
                    color: "white",
                    textAlign: "justify",
                    minHeight: "30vh", // Adjust the minimum height as needed
                  }}
                >
                  <h2 className="heading">Secure Your Commute</h2>
                  <p>
                    Book your rides in advance and save yourself from waiting
                    endlessly for you rides. Our drivers always reach before
                    time for your convenience ensuring zero wait time. Just book
                    and forget about your commute issues.
                  </p>
                </Row>
                <Row style={{ height: "70%", backgroundColor: "" }}>
                  <img
                    src="./save.jpg"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", padding: "0" }}
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                {/* hidden in small screen */}
                <Row
                  style={{ height: "70%", backgroundColor: "" }}
                  className="
              d-none d-md-block"
                >
                  <img
                    src="./autoroad.jpg"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", padding: "0" }}
                  />
                </Row>
                <Row
                  className="p-lg-5 "
                  style={{
                    height: "30%",
                    backgroundColor: "#084aa6",
                    color: "white",
                    textAlign: "justify",
                    minHeight: "30vh", // Adjust the minimum height as needed
                  }}
                >
                  <h2 className="heading">Share. Save. Repeat.</h2>
                  <p>
                    All our rides are shared and gender-segregated ensuring
                    maximum sense of security while commuting.By sharing,you
                    reduce your commute expenditure as well as it helps
                    de-congesting our city.
                  </p>
                </Row>
                {/* ------------display on small screen */}
                <Row
                  style={{ height: "70%", backgroundColor: "" }}
                  className="d-md-none"
                >
                  <img
                    src="./autoroad.jpg"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", padding: "0" }}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Container fade fluid>
            <Row>
              <Col xs={12} md={6}>
                <Row
                  className="p-lg-5"
                  style={{
                    height: "30%",
                    backgroundColor: "#084aa6",
                    color: "white",
                    textAlign: "justify",
                    minHeight: "30vh", // Adjust the minimum height as needed
                  }}
                >
                  <h2 className="heading">Same driver daily</h2>
                  <p>
                    We try our best to allocate the same driver daily for your
                    convenience and safety. It is easy for school kids to
                    recognize their favorite “Auto uncle” instantly. The pickup
                    spots are defined and there is no space for
                    miscommunication.
                  </p>
                </Row>
                <Row style={{ height: "70%", backgroundColor: "" }}>
                  <img
                    src="./Autodriver.png"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", padding: "0" }}
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                {/* hidden i sm screen */}
                <Row
                  style={{ height: "70%", backgroundColor: "" }}
                  className="d-none d-md-block"
                >
                  <img
                    src="./map.jpg"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", padding: "0" }}
                  />
                </Row>
                <Row
                  className="p-lg-5 "
                  style={{
                    height: "30%",
                    backgroundColor: "#084aa6",
                    color: "white",
                    textAlign: "justify",
                    minHeight: "30vh", // Adjust the minimum height as needed
                  }}
                >
                  <h2 className="heading"> GPS tracking for Parents</h2>
                  <p>
                    To all the parents anxious about their kids commute to and
                    fro from school. All rides are tracked via GPS and a unique
                    link is shared to parents phone number every time the
                    journey starts. You know when your kid starts from school
                    and when he or she reaches home.
                  </p>
                </Row>
                {/* display in sm scren */}
                <Row
                  style={{ height: "70%", backgroundColor: "" }}
                  className="d-md-none"
                >
                  <img
                    src="./map.jpg"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", padding: "0" }}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Element>
  );
};

export default CarouselComponent;
