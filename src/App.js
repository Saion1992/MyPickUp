import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Banner2 from "./components/Banner2";
import HowItWorksComponent from "./components/HowitWorks";
import CarouselComponent from "./components/DemoSection";
import MultiCarousel from "./components/Testimonials";
import Footer from "./components/Footer";
import ReferralRedirect from "./components/refferal";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner2 />
              <HowItWorksComponent />
              <CarouselComponent />
              <MultiCarousel />
              <Footer />
            </>
          }
        />
        <Route path="/refer" element={<ReferralRedirect />} />{" "}
        {/* Referral Route */}
      </Routes>
    </Router>
  );
}

export default App;
