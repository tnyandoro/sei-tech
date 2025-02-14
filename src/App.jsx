import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PopupModal from "./components/PopupModal";
import Expertise from "./components/Expertise";
import ExpertServices from "./components/ExpertServices"; 
import BookACourse from "./components/BookACourse";
import UpcomingTraining from "./components/UpcomingTraining";
import TrainingCourses from "./components/TrainingCourses";
import Register from "./pages/RegisterPage/RegisterForm.jsx";
import LoginForm from './pages/LoginPage/LoginForm.jsx';
import Products from "./pages/ProductsPage/Products.jsx";
import AboutUs from "./pages/AboutUsPage/AboutUs.jsx";
import ELearning from './pages/ElearningPage/Elearning.jsx';
import ContactUs from './pages/ContactUsPage/ContactUs.jsx';
import TestimonialsPage from "./pages/TestimonialsPage/Testimonials.jsx";
import CDMAwareness from './pages/CDMAwarenessPage/CDMAwareness.jsx';
import Upcomings from './pages/UpcomingsPage/Upcomings.jsx';
import AbrasiveWheelsTraining from './pages/AbrasiveWheelsTrainingPage/AbrasiveWheelsTraining.jsx';
import EmergencyEvacuationTraining from './pages/EmergencyEvacuationTrainingPage/EmergencyEvacuationTraining.jsx';
import AsbestorsAwareness from './pages/AsbestorsPage/Asbestors.jsx';
import EnvironmentalAwarenessTraining from './pages/EnvironmentalAwarenessTraining/EnvironmentalAwarenessTraining.jsx';
import './styles/input.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <PopupModal />
              <HeroSection />
              <Services />
              <Expertise />
              <ExpertServices />
              <BookACourse />
              <UpcomingTraining />
              <Testimonials />  {/* ✅ Component for home page */}
              <TrainingCourses />
            </>
          } 
        />

        {/* Other Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/e-learning" element={<ELearning />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/upcomings" element={<Upcomings />} />
        
        <Route path="/cdm-awareness" element={<CDMAwareness />} />
        {/* <Route path="/fire-warden-course" element={<FireWardenCourse />} /> */}
        <Route path="/abrasive-wheels-training" element={<AbrasiveWheelsTraining />} />
        <Route path="/emergency-evacuation-training" element={<EmergencyEvacuationTraining />} />
        <Route path="/asbestors-awareness" element={<AsbestorsAwareness />} />
        <Route path="/environmental-awareness-training" element={<EnvironmentalAwarenessTraining />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;