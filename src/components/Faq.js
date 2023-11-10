import { Accordion } from "react-bootstrap";
import AccordionCard from "./AccordianCard";
import "./faq.css"
import { Element } from "react-scroll";


function FAQ() {
    
 const Accodiondata = [
   {
     id: 1,
     ques: "How and when do I make the payment?",

     ans: "After your slot is booked and confirmed by our team, you will be able to take the first free ride. Rider details will be messaged 12 hrs before your ride on your phone number.",
   },
   {
     id: 2,
     ques: "What are the charges?",
     ans: "We charge 14 rs per km  per seat - including everything (Advance booking charges, GST, Platform fee, Convenience charges etc)",
   },
   {
     id: 3,
     ques: "If I go to office 3 days are week, both ways for 5 km, what will be weekly charges?",
     ans: "Office Weekly Subcription Price will be calculated as follows = No. of days per week X No. of Km per trip X SingleWay (1)/Both way(2) X 14Rs/km = 3 X 5 X 2 X 14= Rs 420 per weekSchoolWe provide only monthly packages for school teachers & students. The rate is at 11Rs/km.Please refer to the below table for exact charges.",
   },
   { 
     id: 4,
     ques: "",
     ans: "",
   },
   {
     id: 5,
     ques: "",
     ans: "",
   },
 ];

    return (
      <>
        <Element name="faq">
          <div
            className="row  m-0 d-flex justify-content-center mt-5 py-5 py-md-5"
            style={{ background: "#f5f5f5" }}
            id="myfaq"
          >
            <p
              className="text-center py-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ color: "#084aa6", fontSize: "20px" }}
            >
              <b>FAQ</b>
            </p>
            <text
              className="Heading-1 text-center col-12 py-2 "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              
            </text>
            <div className="col-9 col-lg-7 col-sm-8">
              <div className="row">
                {/* {Accodiondata.map((items) => {
                return <AccordionCard data={items} />;
              })} */}
                {/* --------------- 1 ------------ */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        How and when do I make the payment?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      After your slot is booked and confirmed by our team, you
                      will be able to take the first free ride.Rider details
                      will be messaged 12 hrs before your ride on your phone
                      number.Once your first free ride is done, you will have to make the payment for your weekly or monthly subscription.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* -----------------2----------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        What are the charges?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      We charge 14 rs per km per seat - including everything
                      Advance booking charges, GST, Platform fee, Convenience
                      charges etc
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                {/* <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                className="my-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion.Item className="p-2 shadow ">
                  <Accordion.Header
                    className="FaqHeader"
                    style={{ fontSize: "33px" }}
                  >
                    <p style={{ fontWeight: "bold" }}>
                      {" "}
                      If I go to office 3 days are week, both ways for 5 km,
                      what will be weekly charges?{" "}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="p-4 text-start">
                    <b>Office :-</b> Weekly Subcription Price will be calculated
                    as follows <br /> = No. of days per week X No. of Km per
                    trip X SingleWay (1)/Both way(2) X 14Rs/km <br /> = 3 X 5 X
                    2 X 14 <br /> = Rs 420 per week. <br />
                    <b>School :-</b> <br /> We provide only monthly packages for
                    school teachers & students. The rate is at 11Rs/km. Please
                    refer to the below table for exact charges.
                    <div style={{}} >
                      {" "}
                      <img className="fluid" src="chart.png" alt="" style={{objectFit:"contain",width:"500px"}}/>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        If I go to the office 3 days a week, both ways for 5 km,
                        what will be the weekly charges?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      <h6>Weekly Subscription Price Calculation:</h6>
                      <b style={{ color: "blue" }}>Office </b> <br />
                      = No. of days per week X No. of Km per trip X SingleWay
                      (1)/Both way(2) X 14Rs/km <br />
                      = 3 X 5 X 2 X 14 <br />
                      = Rs 420 per week. <br /> <br />
                      <b style={{ color: "blue" }}>School:</b> <br />
                      We provide only monthly packages for school teachers &
                      students. The rate is at 11Rs/km. Please refer to the
                      below table for exact charges.
                      <div
                        className="my-1"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        <img
                          src="chart.png"
                          alt=""
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        What if I get late due to the shared co-passenger?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      This will not happen as our maximum wait time is 5 min for
                      morning and 10 min for evening rides. Moreover, we match
                      co-passengers within 1km detour from the shortest route to
                      your destination. Usually, co-passengers pickups are from
                      the same or nearby housing society and drops are from same
                      or nearby IT park.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        Is this service only for sharing/pooling or can we avail
                        private rides as well?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      We allow max 2 adults ( 3 students for school pickups) in
                      the same route and time. If we are not able to find a
                      co-passenger in this route then it's a private ride. As of
                      now, all our rides are shared rides. Irrespective whether
                      you go alone or with a co-passenger, you will charged
                      basis the 14Rs/km rate. If you are able to get a
                      co-passenger in your route and time, we will offer a 10%
                      discount for both the passengers on your subscription
                      amount.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        What is the maximum wait-time for the drivers for
                        pickup-up?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      For morning rides the maximum wait-time is 5 min more than
                      your prescribed time. For evening rides, the maximum
                      wait-time is 10 min more than your prescribed pickup time.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        What if someday I don't want to go? What is the
                        cancellation policy?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      Customers will be given an option to cancel the ride for
                      free if informed 2 hours in advance via sending a “cancel
                      my ride” message on whatsapp. This can happen only in 10%
                      of the total rides booked by the customer. For eg. (4
                      rides are cancellable if 40 trips are booked, 1 ride is
                      cancellable if 5 trips are booked). All canceled rides
                      will be added to next month’s subscription plan free of
                      cost. In any case, customers will have to bear the cost
                      for any rides canceled above the prescribed 10% rides.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        Can I reschedule a ride?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      Rescheduling is possible only if required slots are
                      available. You need to inform 2 hours in advance in case
                      you want to change your pickup timings. MyPickup reserves
                      the right to accept or reject the reschedule request. In
                      such cases, cancelled rides will be carry-forwarded basis
                      above canellation policy.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        Can I change the location once I have taken
                        subscription?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      No. Location change is not allowed once you take
                      subscription. Idea is that your home or office or school
                      will not change on weekly or daily basis.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        Will the same driver come to pickup me up daily?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      Mostly yes. But in case if the same driver is not
                      available or there is vehicle breakdown, we will send an
                      alternate driver.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="my-3 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Item className="p-2 shadow ">
                    <Accordion.Header
                      className="FaqHeader"
                      style={{ fontSize: "33px" }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        {" "}
                        What if the driver comes late?{" "}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 text-start">
                      In case the driver is late by 10 min of your desired
                      pickup time. You will be refunded for that trip by the end
                      of the day. Delayed trips will not be refunded in case of
                      major traffic jams, rains or water-logging.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* ---------------------------------- */}
              </div>
            </div>
          </div>
        </Element>
      </>
    );
}

export default FAQ;