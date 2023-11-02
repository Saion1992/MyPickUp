// import React, { Component } from "react";
// import "./myform.css";
// import { Modal } from "react-bootstrap";

// class SchoolForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       gender: "Male",
//       mobnumber: "",
//       pickupLocation: "",
//       dropLocation: "",
//       pickupTime: "",
//       returnTime: "",
//       days: {
//         Sunday: false,
//         Monday: false,
//         Tuesday: false,
//         Wednesday: false,
//         Thursday: false,
//         Friday: false,
//         Saturday: false,
//       },
//       wantReturn: "yes", // Default to 'yes'

//       errors: {},
//       showModal: false,
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     this.setState((prevState) => ({
//       days: {
//         ...prevState.days,
//         [name]: checked,
//       },
//     }));
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = this.validateForm();
//     const popup = this.handleShow();

//     if (Object.keys(errors).length === 0) {
//       // Form is valid, proceed with submission
//       // You can submit the form data to your API or perform any other actions here.
//       this.setState({ errors });
//     } else {
//       this.setState({ errors });
//     }
//   };
//   handleReturnToggle = (value) => {
//     this.setState({ wantReturn: value });
//   };
//   handleShow = () => {
//     this.setState({ showModal: true });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false });
//   };
//   validateForm = () => {
//     const errors = {};
//     const {
//       name,
//       mobnumber,
//       pickupLocation,
//       dropLocation,
//       pickupTime,
//       returnTime,
//       days,
//       date,
//       age,
//     } = this.state;

//     if (!name) errors.name = "Name is required";
//     if (!mobnumber) errors.mobnumber = "Mobile number is required";
//     if (!pickupLocation) errors.pickupLocation = "Pickup location is required";
//     if (!dropLocation) errors.dropLocation = "Drop location is required";
//     if (!pickupTime) errors.pickupTime = "Pickup time is required";
//     if (!returnTime) errors.returnTime = "Return time is required";
//     if (age === "" || isNaN(age) || age < 18)
//       errors.age = "Please enter a valid age";
//     if (!date) errors.date = "Date is required";

//     const selectedDays = Object.values(days).filter((day) => day);
//     if (selectedDays.length === 0)
//       errors.days = "At least one day must be selected";

//     return errors;
//   };

//   render() {
//     const { errors, wantReturn } = this.state;
//     const {  showModal } = this.state;

//     return (
//       <div className="form-container">
//         {/* <h2>My Form</h2> */}
//         <form onSubmit={this.handleSubmit}>
//           <div className="row">
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={this.handleInputChange}
//               />
//               {errors.name && <div className="error">{errors.name}</div>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="gender">Gender:</label>
//               <select name="gender" onChange={this.handleInputChange}>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="mobnumber">Mob No:</label>
//               <input
//                 type="text"
//                 name="mobnumber"
//                 onChange={this.handleInputChange}
//               />
//               {errors.mobnumber && (
//                 <div className="error">{errors.mobnumber}</div>
//               )}
//             </div>
//           </div>

//           <div className="row">
//             <div className="form-group">
//               <label htmlFor="pickupLocation">Pickup Location:</label>
//               <input
//                 type="text"
//                 name="pickupLocation"
//                 onChange={this.handleInputChange}
//               />
//               {errors.pickupLocation && (
//                 <div className="error">{errors.pickupLocation}</div>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="dropLocation">Drop Location:</label>
//               <input
//                 type="text"
//                 name="dropLocation"
//                 onChange={this.handleInputChange}
//               />
//               {errors.dropLocation && (
//                 <div className="error">{errors.dropLocation}</div>
//               )}
//             </div>
//           </div>
//           <div className="row">
//             <div className="form-group">
//               <label htmlFor="date">Date:</label>
//               <input
//                 type="date"
//                 name="date"
//                 onChange={this.handleInputChange}
//               />
//               {errors.date && <div className="error">{errors.date}</div>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="age">Age:</label>
//               <input
//                 type="number"
//                 name="age"
//                 onChange={this.handleInputChange}
//               />
//               {errors.age && <div className="error">{errors.age}</div>}
//             </div>
//           </div>

//           <div className="row">
//             <div className="form-group">
//               <label htmlFor="pickupTime">Pickup Time:</label>
//               <input
//                 type="time"
//                 name="pickupTime"
//                 onChange={this.handleInputChange}
//               />
//               {errors.pickupTime && (
//                 <div className="error">{errors.pickupTime}</div>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="returnTime">Return Time:</label>
//               <input
//                 type="time"
//                 name="returnTime"
//                 onChange={this.handleInputChange}
//               />
//               {errors.returnTime && (
//                 <div className="error">{errors.returnTime}</div>
//               )}
//             </div>
//           </div>

//           <button type="submit" className="inputrow">
//             Submit
//           </button>
//         </form>
//         {/* Form Submitted Modal */}
//         <Modal show={showModal} onHide={this.closeModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Form Submitted</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h5 className="p-4" style={{ color: "navy" }}>
//               Your response is recorded! Our customer support team will reach
//               out to you within 6 business hours.
//               <br />
//               <br />
//               Thanks for connecting with MyPickup. Happy Commuting!
//             </h5>
//             <h5></h5>
//           </Modal.Body>
//         </Modal>
//       </div>
//     );
//   }
// }
// export default SchoolForm;










import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import "./myform.css";

function SchoolForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobnumber: "",
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
    pickupLocation: "",
    dropLocation: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [activeOption, setActiveOption] = useState("yes");

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
    if (field === "pickupLocation") {
      setPickupSuggestions([]);
    } else if (field === "dropLocation") {
      setDropSuggestions([]);
    }
  };

  const handlePickupChange = (e) => {
    const query = e.target.value;
    setFormData({ ...formData, pickupLocation: query });
    fetchAutocompleteSuggestions(query, setPickupSuggestions);
  };

  const handleDropChange = (e) => {
    const query = e.target.value;
    setFormData({ ...formData, dropLocation: query });
    fetchAutocompleteSuggestions(query, setDropSuggestions);
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
    handleShow(); // Show the modal on form submission
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
                name="mobnumber"
                value={formData.mobnumber}
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
            {" "}
            <Form.Group>
              <Form.Label>Pickup Location:</Form.Label>
              <Form.Control
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handlePickupChange}
                required
              />
               <ul className="autocomplete-list">
                {pickupSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    className="autocomplete-item"
                    onClick={() => handleLocationSelect(suggestion.description, "pickupLocation")}
                  >
                    {suggestion.description}
                  </li>
                ))}
              </ul>
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Drop Location:</Form.Label>
              <Form.Control
                type="text"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleDropChange}
                required
              />
              <ul className="autocomplete-list">
                {dropSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    className="autocomplete-item"
                    onClick={() => handleLocationSelect(suggestion.description, "dropLocation")}
                  >
                    {suggestion.description}
                  </li>
                ))}
              </ul>
            </Form.Group>
          </Col>
        </Row>
        {/* <Row className="p-3 ">
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
        </Row> */}
        <Row className="p-3 ">
          <Col>
            <Form.Group>
              <Form.Label>Pickup Time:</Form.Label>
              <Form.Control
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
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
                name="returnTime"
                value={formData.returnTime}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {/* <Row className="p-3 ">
          <Col>
            {" "}
            <p>Do you want a return?</p>
          </Col>
          <Col>
            <div className="d-flex">
              <button
                className={`toggle-button ${
                  activeOption === "yes" ? "active" : ""
                }`}
                style={{
                  backgroundColor: activeOption === "yes" ? "#084aa6" : "",
                }}
                onClick={() => handleToggle("yes")}
              >
                Yes
              </button>
              <button
                className={`toggle-button ${
                  activeOption === "no" ? "active" : ""
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
        </Row> */}
        <Row>
          <Col>
            <Form.Group as={Form.Col}>
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group as={Form.Col}>
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="p-2 my-3 "
          style={{ backgroundColor: "#084aa6" }}
          type="submit"
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

export default SchoolForm;
