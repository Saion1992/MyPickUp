import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

// new code starts
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database"; // Import Realtime Database functions
import {app} from "../firebase";
//new code ends

const EmailFormNew = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
// code updated -------
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  //   setShowWarning(false); // Hide the warning if the user starts typing.
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email === "") {
  //     // Show the warning if the email input is empty.
  //     setShowWarning(true);
  //   } else {
  //     // You can perform any necessary form submission logic here

  //     // After successful form submission, show the modal
  //       setShowModal(true);
       
  //   }
  // };
// new updated code --------
const handleEmailChange = (e) => {
  setEmail(e.target.value);
  setHasError(false); // Reset error when the user types
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!email) {
    setHasError(true); // error
    return;
  }

  // Add your logic for handling the form submission with the email
  console.log("Submitted email:", email);

  // Send email to Firebase Firestore
  const dbFirestore = getFirestore(app); // Get a Firestore reference
  const emailCollection = collection(dbFirestore, "emails");
  // addDoc(emailCollection, { email: email });
  const newDoc = addDoc(emailCollection, { email: email });
  console.log(newDoc.id);

  // Send email to Firebase Realtime Database
  const dbRealtime = getDatabase(app); // Get Realtime Database reference
  const realtimeRef = ref(dbRealtime, "userDataEmail"); // Specify the path you want to use
  
  
  // push(realtimeRef, email);
  push(realtimeRef, email).then(() => {
    console.log("The email address was successfully pushed to the database.");
    setShowModal(true);
  });;

  // Close the modal after successful submission
  handleClose();
};
const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsClicked(!isClicked);
    setHasError(false); // Reset error when the modal is closed
  };
  
// new code ends -----
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address
            <p style={{ fontWeight: "200" ,color:"black"}}>
              (Please mention only official IDs)
            </p>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          {showWarning && <div className="text-danger">Email is required.</div>}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#084aa6",
            color: "white",
            borderRadius: "20px",
           
            // width: "20%",
                  }}
                  className="my-2"
        >
          Submit
        </Button>
      </Form>

      <Modal centered show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Form Submitted</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <h5 className="p-4" style={{ color: "navy" }}>
            Thank you for your interest in MyPickup! We will mail you the pitch
            deck within 24 business hours.
          </h5>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default EmailFormNew;
























// import React, { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";

// const EmailFormNew = () => {
//   const [email, setEmail] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [showWarning, setShowWarning] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setShowWarning(false); // Hide the warning if the user starts typing.
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (email === "") {
//       // Show the warning if the email input is empty.
//       setShowWarning(true);
//     } else {
//       // You can perform any necessary form submission logic here

//       // After successful form submission, show the modal
//         setShowModal(true);
       
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           {showWarning && <div className="text-danger">Email is required.</div>}
//         </Form.Group>

//         <Button
//           variant="primary"
//           type="submit"
//           style={{
//             backgroundColor: "#084aa6",
//             color: "white",
//             borderRadius: "20px",
           
//             // width: "20%",
//                   }}
//                   className="my-2"
//         >
//           Submit
//         </Button>
//       </Form>

//       <Modal centered show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           {/* <Modal.Title>Form Submitted</Modal.Title> */}
//         </Modal.Header>
//         <Modal.Body>
//           <h5 className="p-4" style={{ color: "navy" }}>
//             Thank you for your interest in MyPickup! We will mail you the pitch
//             deck within 24 business hours.
//           </h5>
//         </Modal.Body>
//         {/* <Modal.Footer>
//           <Button variant="secondary" onClick={closeModal}>
//             Close
//           </Button>
//         </Modal.Footer> */}
//       </Modal>
//     </div>
//   );
// };

// export default EmailFormNew;
