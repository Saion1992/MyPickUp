import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import MyVerticallyCenteredModal from "./Modals";
import { useState } from "react";
import EmailModal from "./EmailModal";
import "./Header.css"
import { Link, scroller } from "react-scroll";

function Header() {
  const [showModal, setShowModal] = useState(false);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleSubmit = () => {
     // Perform any necessary submission logic here

     // Show the modal if a mobile number is provided
     setShowModal(true);
   };

   const handleCloseModal = () => {
     setShowModal(false);
   };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      // smooth: "easeInOutQuint",
    });
  };
  //  CSS-----------------------
   const customTitleStyle = {
     fontSize: "18px",
     marginRight: "17px",
     fontWeight: 500,
   };

   const customColor = {
     color: "#084aa6", // Set your desired custom color here
   };
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          // sticky="top"
          className="bg-white mb-3 p-lg-4   pb-lg-4 p-sm-4"
        >
          <Container fluid className="p-0">
            <Navbar.Brand href="#">
              {" "}
              <img className="nav-logo" src="./logo.jpg" alt=""  />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 "
                  style={{}}
                >
                  <Link
                    to="features"
                    // className="headlink"
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      color: "#084aa6",
                      fontWeight: "500",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("features")}
                  >
                    Our services
                  </Link>

                  <Link
                    to="faq"
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      color: "#084aa6",
                      fontWeight: "500",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("faq")}
                  >
                    FAQ
                  </Link>
                  <Link
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      color: "#084aa6",
                      fontWeight: "500",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={handleSubmit}
                  >
                    Book a Slot
                  </Link>
                  <MyVerticallyCenteredModal
                    show={showModal}
                    handleClose={handleCloseModal}
                  />
                  <NavDropdown
                    title={
                      <Link style={{ ...customTitleStyle, ...customColor }}>
                        Investors
                      </Link>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{
                      fontSize: "18px",
                      marginRight: "17px",
                      fontWeight: 500,
                      padding: "0",
                    }}
                  >
                    <NavDropdown.Item href="#action3">
                    
                      <EmailModal show={show} onHide={handleClose} />
                    </NavDropdown.Item>
                  
                  </NavDropdown>
                  <Link
                    to="footer"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#084aa6",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("footer")}
                  >
                    Contact Us
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
