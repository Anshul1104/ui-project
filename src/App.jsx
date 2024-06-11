import "./App.css";
import Header from "./sections/Header/Header";
import Services from "./sections/Services/Services";
import Features from "./sections/Features/Features";
import StepsSection from "./sections/StepsSection/StepsSection";
import WebinarEvents from "./sections/WebinarEvents/WebinarEvents";
import Testimonial from "./sections/Testimonial/Testimonial";
import UpdateSection from "./sections/UpdateSection/UpdateSection";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Services />
      </div>
      <div className='container'>
        <Features />
      </div>
      <StepsSection />
      <div className='container'>
        <WebinarEvents />
      </div>
      <Testimonial />
      <div className='container'>
        <UpdateSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
