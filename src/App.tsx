import "./App.css";
import AboutPage from "./components/pages/AboutPage";
import BookingPage from "./components/pages/BookingPage";
import CirclePage from "./components/pages/CirclePage";
import ContactPage from "./components/pages/ContactPage";
import DoctorPage from "./components/pages/DoctorPage";
import HomePage from "./components/pages/HomePage";
import QAPage from "./components/pages/QAPage";
import ServicePage from "./components/pages/ServicePage";
import TestimonialPage from "./components/pages/TestimonialPage";
import Navbar from "./components/ui/Navbar";
function App() {
  return (
    <>
    <div className="mx-auto px-8 overflow-hidden">
        <HomePage />
        <AboutPage />
        <ServicePage />
        <BookingPage />
        <DoctorPage />
        <TestimonialPage />
        <CirclePage />
        <QAPage />
        <Navbar logo="/logo.png" clinicName="عيادة الأمانة" />
        <ContactPage />
    </div>
    </>
  );
}
export default App;
