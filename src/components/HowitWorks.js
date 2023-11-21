import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";

const HowItWorksComponent = () => {
  return (
    <Element name="working">
      <Container className="my-5 p-lg-5">
        <Row className="d-flex justify-content-center">
          <Col className="text-center text-lg-start my-5">
            <h2 className="fw-bold" style={{ color: "#084aa6" }}>
              How it works?
            </h2>

            <p className="fs-5" style={{ fontWeight: "500" }}>
              No Booking. No cancellations.{" "}
              <span style={{ color: "green" }}>No Pollution.</span>
            </p>

            <p className="fs-5" style={{ fontWeight: "200" ,color:"grey"}}>
              Dear Customers, Please note that our service is available only in Bangalore, India as of now.
            </p>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <Col md={4} data-aos="fade-up" data-aos-duration="1000">
            <img
              src="./route.png"
              alt="Icon 1"
              className="img-fluid"
              style={{ width: "140px", height: "140px" }}
            />
            <p
              className="fs-6 text-center p-3"
              style={{
                fontSize: "17px",
                fontWeight: "450",
                textAlign: "justify",
              }}
            >
              Click on “Book a slot” and enter your daily commute details in the
              form
            </p>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-duration="1000">
            <img
              src="./customer.png"
              alt="Icon 2"
              className="img-fluid"
              style={{ width: "140px", height: "140px" }}
            />
            <p
              className="fs-6 text-center p-3"
              style={{
                fontSize: "17px",
                fontWeight: "450",
                textAlign: "justify",
              }}
            >
              Our Customer support agent will call you to confirm your schedule
              and book your rides within 2 business hours
            </p>
          </Col>

          <Col md={4} className="" data-aos="fade-up" data-aos-duration="1000">
            <img
              src="./auto.png"
              alt="Icon 3"
              className="img-fluid "
              style={{ width: "150px", height: "140px" }}
            />
            <p
              className="fs-6 text-center p-3"
              style={{
                fontSize: "17px",
                fontWeight: "450",
                textAlign: "justify",
              }}
            >
              Rider details are shared with you 12 hours prior to your ride. Our
              auto rickshaw will be ready at your doorstep pickup time &
              location
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="" style={{ fontSize: "30px", color: "#084aa6" }}>
              For more information, please refer to FAQs . <br /> First ride is
              free.
            </p>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default HowItWorksComponent;
