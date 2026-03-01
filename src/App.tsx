import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicePage from "./components/pages/ServicePage";
import DoctorPage from "./components/pages/DoctorPage";
import TestimonialCard from "./components/ui/TestimonialCard";
import TestimonialPage from "./components/pages/TestimonialPage";
import BookingPage from "./components/pages/BookingPage";


function App() {
  return (
    <>

      <Layout>
        <HomePage />
        <AboutPage />
        <ServicePage />
        <DoctorPage />
        <TestimonialPage/>
        <BookingPage />
        <Outlet /> 
      </Layout>
    </>
  );
}
export default App;
