import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import {submitOfficeFormData} from './Api';
import "./myform.css";

function OfficeForm0() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "Male",
    days: {
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    },
    pickup_location: "",
    drop_location: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [activeOption, setActiveOption] = useState("yes");
  const [submitted, setSubmitted] = useState(false);

  const autocompleteService = new window.google.maps.places.AutocompleteService();

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

  const fetchAutocompleteSuggestions = (query, setSuggestions) => {
    if (query) {
      autocompleteService.getPlacePredictions(
          { input: query },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setSuggestions(results);
            }
          }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleLocationSelect = (selectedLocation, field) => {
    setFormData({ ...formData, [field]: selectedLocation });
    if (field === "pickup_location") {
      setPickupSuggestions([]);
    } else if (field === "drop_location") {
      setDropSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      days: {
        ...prevFormData.days,
        [name]: checked,
      },
    }));
  };

  const handlePickupChange = (e) => {
    const query = e.target.value;
    setFormData({ ...formData, pickup_location: query });
    fetchAutocompleteSuggestions(query, setPickupSuggestions);
  };

  const handleDropChange = (e) => {
    const query = e.target.value;
    setFormData({ ...formData, drop_location: query });
    fetchAutocompleteSuggestions(query, setDropSuggestions);
  };

  const handleToggle = (value) => {

    setActiveOption(value);

  };

  const handleShow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (submitted) {
        // Display a different message if the form has already been submitted
        setSubmittedMessage("Your response is already recorded. Our customer support team will reach out to you within 6 business hours.");
      }
      // Define the form data to be sent to the server
      const requestData = {
        name: formData.name,
        mobile: formData.mobile,
        gender: formData.gender,
        selected_days: Object.keys(formData.days).filter((day) => formData.days[day]),
        pickup_location: formData.pickup_location,
        drop_location: formData.drop_location,
        pickup_time: formData.pickup_time,
        return_time: formData.return_time,
        want_return: activeOption === "yes",
      };
      // Use the submitFormData function to make the API request
      submitOfficeFormData(requestData);
      // handleShow(); // Show the modal on form submission
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Error submitting form:', error);
      // You can set an error state and display an error message to the user

    }
  };

  return (
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Row className="p-3 ">
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Mob:</Form.Label>
                <Form.Control
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Gender:</Form.Label>
                <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="p-3 ">
            <Col>
              <Form.Group>
                <Form.Label>Pickup Location:
                </Form.Label>
                <Form.Control
                    type="text"
                    name="pickup_location"
                    value={formData.pickup_location}
                    onChange={handlePickupChange}
                    required
                />
                <ul className="autocomplete-list">
                  {pickupSuggestions.map((suggestion) => (
                      <li
                          key={suggestion.place_id}
                          className="autocomplete-item"
                          onClick={() => handleLocationSelect(suggestion.description, "pickup_location")}
                      >
                        {suggestion.description}
                      </li>
                  ))}
                </ul>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Drop Location:</Form.Label>
                <Form.Control
                    type="text"
                    name="drop_location"
                    value={formData.drop_location}
                    onChange={handleDropChange}
                    required
                />
                <ul className="autocomplete-list">
                  {dropSuggestions.map((suggestion) => (
                      <li
                          key={suggestion.place_id}
                          className="autocomplete-item"
                          onClick={() => handleLocationSelect(suggestion.description, "drop_location")}
                      >
                        {suggestion.description}
                      </li>
                  ))}
                </ul>
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <p className="fs-7" style={{ fontWeight: "200" ,color:"grey"}}>
              <center>(Please mention exact addresses. For e.g. Society Name, Nearest location name, IT park name, etc.)</center>
            </p>
          </Row>
          <Row className="p-3 ">
            {" "}
            <Form.Group>
              <Form.Label>Days:</Form.Label>
              <div className="days-checkboxes">
                {Object.keys(formData.days).map((day) => (
                    <Form.Check
                        key={day}
                        type="checkbox"
                        label={day}
                        name={day}
                        checked={formData.days[day]}
                        onChange={handleCheckboxChange}
                    />
                ))}
              </div>
            </Form.Group>
          </Row>

          <Row className="p-3 ">
            <Col>
              <Form.Group>
                <Form.Label>Pickup Time:</Form.Label>
                <Form.Control
                    type="time"
                    name="pickup_time"
                    value={formData.pickup_time}
                    onChange={handleInputChange}
                    required
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Return Time:</Form.Label>
                <Form.Control
                    type="time"
                    name="return_time"
                    value={formData.return_time}
                    onChange={handleInputChange}
                    required
                    disabled={activeOption === "no"}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="p-3 ">
            <Col>
              {" "}
              <p>Do you want a return?</p>
            </Col>
            <Col>
              <div className="d-flex">
                <button
                    className={`toggle-button ${activeOption === "yes" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor: activeOption === "yes" ? "#084aa6" : "",
                    }}
                    onClick={() => handleToggle("yes")}
                >
                  Yes
                </button>
                <button
                    className={`toggle-button ${activeOption === "no" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor: activeOption === "no" ? "#084aa6" : "",
                    }}
                    onClick={() => handleToggle("no")}
                >
                  No
                </button>
              </div>
            </Col>
          </Row>

          <Button
              className="p-2 my-2 "
              style={{ backgroundColor: "#084aa6" }}
              type="submit"
              onClick={handleShow}
          >
            Submit
          </Button>
        </Form>

        <Modal show={showModal} onHide={closeModal}>
          {/* <Modal.Header>
          <Modal.Title>Form Submitted</Modal.Title>
        </Modal.Header> */}
          <Modal.Body closeButton>
            <h5 className="p-4" style={{ color: "navy" }}>
              Your response is recorded! Our customer support team will reach out
              to you within 6 business hours.
              <br />
              <br />
              Thanks for connecting with MyPickup. Happy Commuting!
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} style={{ backgroundColor: "#084aa6" }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  );
}

export default OfficeForm0;