import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {Button as Button2, Dialog, DialogTitle, DialogContent, Box } from "@mui/material";
import "./Banner.css";
import MyVerticallyCenteredModal from "./Modals";
import axios from "axios";
import Swal from 'sweetalert2';

function Banner2() {
    const [showImageDialog, setShowImageDialog] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showOption2Dialog, setShowOption2Dialog] = useState(false); // New state variable
    const [showAirportCabsDialog, setShowAirportCabsDialog] = useState(false);
    const handleAirportCabsClick = () => {
        setShowAirportCabsDialog(true); // Open the new dialog when "Airport Cabs" is clicked
    };

    const handleCloseAirportCabsDialog = () => {
        setShowAirportCabsDialog(false); // Function to close the new dialog
    };
    const handleOpenImageDialog = () => {
        setShowImageDialog(true);
    };

    const handleCloseImageDialog = () => {
        setShowImageDialog(false);
    };

    const handleImageClick = (option) => {
        console.log(`Option ${option} clicked`);
        setShowImageDialog(false);
        if (option === 2) {
            console.log("option2clicked")
            setShowOption2Dialog(true); // Open the new dialog when option 2 is clicked
        }
        else if (option === 3) {
            handleAirportCabsClick();
        }
        else {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCloseOption2Dialog = () => {
        setShowOption2Dialog(false); // Function to close the new dialog
    };



    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [dropLocation, setDropLocation] = useState("");
    const [packagePrice, setPackagePrice] = useState("");
    const [packagePlan, setPackagePlan] = useState("");
    const [rideDate, setRideDate] = useState("");
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [pickupSearch, setPickupSearch] = useState("");
    const [dropSuggestions, setDropSuggestions] = useState([]);
    const [dropSearch, setDropSearch] = useState("");



    const autocompleteService = new window.google.maps.places.AutocompleteService();

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
    const handlePickupSearch = (e) => {
        setPickupSearch(e.target.value);
        fetchAutocompleteSuggestions(e.target.value, setPickupSuggestions);
    };
    const handleDropSearch = (e) => {
        setDropSearch(e.target.value);
        fetchAutocompleteSuggestions(e.target.value, setDropSuggestions);
    };

    const handleLocationSelect = (location, locationType) => {
        if (locationType === "pickup_location") {
            setPickupLocation(location);
            setPickupSearch(location); // Update the pickupSearch state
            setPickupSuggestions([]);
        } else if (locationType === "drop_location") {
            setDropLocation(location);
            setDropSearch(location); // Update the dropSearch state
            setDropSuggestions([]);
        }
    };
    const handleAirportFormSubmit = (event) => {
        event.preventDefault();
        if (mobile.length !== 10) {
            alert("Mobile number must be 10 digits");
            return;
        }
        const data = {
            name,
            mobile,
            gender,
            pickup_location: pickupLocation,
            drop_location: dropLocation, // Add drop_location
            pickup_time: pickupTime,
            ride_Date: rideDate,
        };

        axios.post('https://cabrental-yb2k.onrender.com/api/airportCabsBooking/', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                Swal.fire( // Add SweetAlert2 notification here
                    'Success!',
                    'Your request is recorded. Our team will get back to you in the next 1 hour. Have a great day ahead :)',
                    'success'
                );
                console.log('Success:', response.data);
                setName("");
                setMobile("");
                setGender("");
                setPickupLocation("");
                setDropLocation(""); // Reset drop_location
                setPickupTime("");
                setRideDate("");
                setDropSearch("");
                setPickupSearch("");

            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire( // Add SweetAlert2 notification here
                    'Error Occurred!',
                    'An Error Occurred. Please try again',
                    'error'
                );
            });

        handleCloseAirportCabsDialog();
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (mobile.length !== 10) {
            alert("Mobile number must be 10 digits");
            return;
        }
        const data = {
            name,
            mobile,
            gender,
            pickup_location: pickupLocation,
            pickup_time: pickupTime,
            package_price: packagePrice,
            package_plan: packagePlan,
            ride_Date: rideDate,
        };

        axios.post('https://cabrental-yb2k.onrender.com/api/autoRentalBooking/', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                Swal.fire( // Add SweetAlert2 notification here
                    'Success!',
                    'Your request is recorded. Our team will get back to you in the next 1 hour. Have a great day ahead :)',
                    'success'
                );
                console.log('Success:', response.data);
                setName("");
                setMobile("");
                setGender("");
                setPickupLocation("");
                setPickupTime("");
                setPackagePrice("");
                setPackagePlan("");
                setRideDate("");
                setDropSearch("");
                setPickupSearch("");
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire( // Add SweetAlert2 notification here
                    'Error Occurred!',
                    'An Error Occurred. Please try again',
                    'error'
                );
            });

        handleCloseOption2Dialog();
    };

    const handlePackagePlanChange = (e) => {
        setPackagePlan(e.target.value);
        switch (e.target.value) {
            case "3hrs/30km":
                setPackagePrice("399");
                break;
            case "6hrs/60km":
                setPackagePrice("899");
                break;
            case "10hrs/100km":
                setPackagePrice("1499");
                break;
            default:
                setPackagePrice("");
        }
    };


    return (
        <Container>
            <Row>
                {/* First Column */}
                <Col lg={5} xs={12} className="p-5 px-lg-2 align-items-center">
                    <h1 style={{ color: "rgba(3,69,174,255)", fontWeight: "bold" }}>
                        Zero Stress Commute
                    </h1>
                    <h3 className="my-5" style={{ fontWeight: "500" }}>
                        Weekly & Monthly Subscription based <span style={{ color: "green" }}>electric </span> rides for daily
                        commute.
                    </h3>
                    <Row className="mt-3">
                        <Col xs={6} className="px-0">
                            <Button
                                className="bookbtn px-lg-4 "
                                onClick={handleOpenImageDialog}
                                style={{
                                    fontSize: "20px",
                                    backgroundColor: "#084aa6",
                                    borderRadius: "50px",
                                    padding: "12px",
                                    width: "150px",
                                }}
                            >
                                Book a slot
                            </Button>
                        </Col>
                    </Row>
                </Col>

                {/* Second Column */}
                <Col lg={7} xs={12}>
                    <div className="video-container">
                        <video src="animation2.mp4" autoPlay muted loop ></video>
                    </div>
                </Col>
            </Row>

            <Dialog open={showImageDialog} onClose={handleCloseImageDialog}>
                <DialogTitle>Choose an Option</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button2
                            variant="contained"
                            onClick={() => handleImageClick(1)}
                            sx={{
                                width: 250,
                                height: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10px 0',
                                backgroundColor: '#084A9E',
                                '&:hover': {
                                    backgroundColor: '#06387C',
                                },
                            }}
                        >
                            Daily Auto Subscription
                        </Button2>
                        <Button2
                            variant="contained"
                            onClick={() => handleImageClick(2)}
                            sx={{
                                width: 250,
                                height: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10px 0',
                                backgroundColor: '#084A9E',
                                '&:hover': {
                                    backgroundColor: '#06387C',
                                },
                            }}
                        >
                            Hourly Auto Rentals
                        </Button2>
                        <Button2

                            variant="contained"
                            onClick={() => handleImageClick(3)}
                            sx={{
                                width: 250,
                                height: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10px 0',
                                backgroundColor: '#084A9E',
                                '&:hover': {
                                    backgroundColor: '#06387C',
                                },
                            }}
                        >
                            Airport Cabs
                        </Button2>
                    </Box>
                </DialogContent>
            </Dialog>

            <Dialog
                    sx={{ width: '100vw' }} open={showOption2Dialog} onClose={handleCloseOption2Dialog}>
            <DialogTitle>Hourly Auto Rental Form</DialogTitle>
            <DialogContent>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control maxLength={10} type="text" value={mobile} onChange={e => setMobile(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" value={gender} onChange={e => setGender(e.target.value)} required>
                                    <option value="">Select...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Pickup Location</Form.Label>
                                <Form.Control type="text" value={pickupSearch} onChange={handlePickupSearch} required />
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
                            <Form.Group className="mb-3">
                                <Form.Label>Pickup Time</Form.Label>
                                <Form.Control type="time" value={pickupTime} onChange={e => setPickupTime(e.target.value+":00")} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Package Plan</Form.Label>
                                <Form.Control as="select" value={packagePlan} onChange={handlePackagePlanChange} required>
                                    <option value="">Select...</option>
                                    <option value="3hrs/30km">3hrs/30km</option>
                                    <option value="6hrs/60km">6hrs/60km</option>
                                    <option value="10hrs/100km">10hrs/100km</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Package Price</Form.Label>
                                <Form.Control type="text" value={"₹ "+packagePrice} readOnly />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Ride Date</Form.Label>
                        <Form.Control type="date" value={rideDate} onChange={e => setRideDate(e.target.value)} required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </DialogContent>
        </Dialog>
            <Dialog
                sx={{ width: '100vw' }} open={showAirportCabsDialog} onClose={handleCloseAirportCabsDialog}>
                <DialogTitle>Airport Cabs Form</DialogTitle>
                <DialogContent>
                    <Form onSubmit={handleAirportFormSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control maxLength={10} type="text" value={mobile} onChange={e => setMobile(e.target.value)} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control as="select" value={gender} onChange={e => setGender(e.target.value)} required>
                                        <option value="">Select...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Pickup Location</Form.Label>
                                    <Form.Control type="text" value={pickupSearch} onChange={handlePickupSearch} required />
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Drop Location</Form.Label>
                                    <Form.Control type="text" value={dropSearch} onChange={handleDropSearch} required />
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
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Pickup Time</Form.Label>
                                    <Form.Control type="time" value={pickupTime} onChange={e => setPickupTime(e.target.value+":00")} required />
                                </Form.Group>
                            </Col>
                        </Row>



                        <Form.Group className="mb-3">
                            <Form.Label>Ride Date</Form.Label>
                            <Form.Control type="date" value={rideDate} onChange={e => setRideDate(e.target.value)} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </DialogContent>
            </Dialog>

            <MyVerticallyCenteredModal
                show={showModal}
                handleClose={handleCloseModal}
            />

        </Container>
    );
}

export default Banner2;
