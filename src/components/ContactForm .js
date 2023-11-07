import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./ContactForm.css"; // Import custom CSS file
import { FaMapMarkerAlt, FaBuilding, FaSchool } from "react-icons/fa";
import MyToggleButton from "./ToggleButton";
import MyComponent from "./SelectDays";
import PickupReturnTime from "./pickuptime";
import ToggleColumnLayout from "./ToggleCol";
import ContactForm2 from "./demoContact";
import SubmitModal from "./SubmitModal";
import MyForm from "./OfficeForm";
import SchoolForm from "./SchoolForm";
import OfficeForm from "./OfficeForm";
import OfficeForm0 from "./demoContact";

const ContactForm = () => {
  const [activeButton, setActiveButton] = useState("office"); // Track the active button
  const [isdaysValid, setIsDaysValid] = useState(null);
  const [activePickupButton, setPickupActiveButton] = useState("yes");
  const [selectedDays, setSelectedDays] = useState([]);
  const [showForm, setShowForm] = useState(true); // Control form visibility
  const [selectedGender, setSelectedGender] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const [formValues, setFormValues] = useState({
    name: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
    gender: "",
    pickupTime: "",
    returnTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setShowForm(true); // Show the form when a button is clicked
  };

  const handleFormClose = () => {
    setShowForm(false); // Close the form
  };

  const handleGenderSelect = (event) => {
    setSelectedGender(event.target.value);
  };

  // -------------------- select days------------------

  // const handleDaySelect = (day) => {
  //   setSelectedDays((prevSelectedDays) => {
  //     if (prevSelectedDays.includes(day)) {
  //       return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
  //     } else {
  //       return [...prevSelectedDays, day];
  //     }
  //   });
  // };
  const handleDaySelect = (day) => {
    const updatedSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(updatedSelectedDays);
    setErrors({ ...errors, selectedDays: null });
  };

  // -----------handle check box-----------------
  // const handleCheckboxChange = (day) => {
  //   const updatedDays = formValues.daysOfWeek ? [...formValues.daysOfWeek] : [];

  //   const index = updatedDays.indexOf(day);
  //   if (index !== -1) {
  //     updatedDays.splice(index, 1);
  //   } else {
  //     updatedDays.push(day);
  //   }

  //   setFormValues({
  //     ...formValues,
  //     daysOfWeek: updatedDays,
  //   });
  // };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const updatedCheckboxes = [...selectedCheckboxes];
    if (updatedCheckboxes.includes(checkboxValue)) {
      // Remove the checkbox if it was already selected
      const index = updatedCheckboxes.indexOf(checkboxValue);
      updatedCheckboxes.splice(index, 1);
    } else {
      // Add the checkbox if it was not selected
      updatedCheckboxes.push(checkboxValue);
    }

    setSelectedCheckboxes(updatedCheckboxes);
    console.log(updatedCheckboxes);
  };

  const isFormFilled = () => {
    // Check if all fields are filled (non-empty)
    return Object.values(formValues).every((value) => value.trim() !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    console.log({ formValues });
    console.log(activePickupButton);

    // Validate name (required)
    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate mobile number (required, numeric, 10 characters)
    if (!formValues.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formValues.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number";
    }

    // Validate gender (required)
    if (!formValues.gender) {
      newErrors.gender = "Gender is required";
    }

    // Validate pickup location (required)
    if (!formValues.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required";
    }

    // Validate drop location (required)
    if (!formValues.dropLocation.trim()) {
      newErrors.dropLocation = "Drop location is required";
    }

    // Validate pickup time (required)
    if (!formValues.pickupTime.trim()) {
      newErrors.pickupTime = "Pickup time is required";
    }

    // Validate return time (required)
    if (!formValues.returnTime.trim()) {
      newErrors.returnTime = "Return time is required";
    }

    console.log({ selectedCheckboxes });
    console.log(selectedCheckboxes.length);
    if (selectedCheckboxes.length === 0) {
      setIsDaysValid(false);
      newErrors.selectedDays = "Select atleast one";
      console.log("select atleast one");
    } else {
      setIsDaysValid(true);
    }
    console.log(isdaysValid);
    if (!activePickupButton) {
      // Validate selected days (at least one day must be selected)
      // if (selectedDays.length === 0) {
      //   newErrors.selectedDays = "Please select at least one day";
      // }
      //  if (formValues.daysOfWeek.length === 0) {
      //    newErrors.daysOfWeek = "Please select at least one day";
      //  }

      // if (selectedCheckboxes.size === 0) {
      //   alert("Please select at least one checkbox before submitting.");
      // } else {
      //   // Handle form submission logic here
      //   console.log("Form submitted successfully!", selectedCheckboxes);
      // }
      // Validate toggle button
      newErrors.activePickupButton = "Please select an option";
    }

    // Set errors
    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    //  if (isValid) {
    //    // Form is valid, show the modal
    //    handleShow();
    //  } else {
    //    // Form is invalid, display errors
    //    console.log("Form is invalid. Errors:", errors);
    //  }

    if (Object.keys(newErrors).size === 0) {
      console.log("Form submitted with values:", {
        ...formValues,
        selectedDays,
      });
    }

    if (isFormFilled()) {
      // All fields are filled
      handleShow();

      console.log("Form is filled:", formValues);
    } else {
      alert("Error in form. Please fill all fields.");
      // Some fields are not filled
      console.log("Form is not completely filled.");
    }
  };
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container fluid>
      {/* ---------Toggle office and school---------------------- */}
      <div className=" d-flex">
        <Button
          className={`custom-button ${
            activeButton === "office" ? "active" : ""
          } ${activeButton === "office" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleButtonClick("office")}
          style={{
            padding: "10px",
            fontSize: "18px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <FaBuilding /> &nbsp; Office/Others
        </Button>
        <Button
          className={`custom-button ${
            activeButton === "school" ? "active" : ""
          } ${activeButton === "school" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleButtonClick("school")}
          style={{
            padding: "10px",
            fontSize: "18px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <FaSchool /> &nbsp; School/Extra Classes
        </Button>
      </div>
      {showForm && (
        <div className="mt-3">
          {activeButton === "office" && (
            <>
              {/* <OfficeForm /> */}
              <OfficeForm0/>
            </>
          )}

          {activeButton === "school" && (
            <>
               <p style={{color:'#666'}}>Please note that Saturday is not included in School subscription plans. Services will be provided for all days Monday to Friday for the entire month.</p>
              <SchoolForm />

            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default ContactForm;
