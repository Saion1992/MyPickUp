import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";
import FAQ from "./components/Faq";
import MyComponent from "./components/SelectDays";
import Feed from "./components/FeedBack";
import Footer from "./components/Footer";
import CarouselComponent from "./components/DemoSection";
import HowItWorksComponent from "./components/HowitWorks";
import Banner2 from "./components/Banner2";
import MultiCarousel from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Banner2 />
      <HowItWorksComponent />
      <CarouselComponent />
      {/* <Feed /> */}
      <MultiCarousel />
      {/* <FAQ /> */}
      <Footer />
    </>
    // <div className="App">

    // </div>
  );
}

export default App;
