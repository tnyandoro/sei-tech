import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PopupModal from "./components/PopupModal";
import Expertise from "./components/Expertise";
import ExpertServices from "./components/ExpertServices"; // Import Expertise component
import BookACourse from "./components/BookACourse";
import UpcomingTraining from "./components/UpcomingTraining";
import TrainingCourses from "./components/TrainingCourses";
// import './App.css'
import './styles/input.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Expertise /> {/* Add Expertise section here */}
      <ExpertServices/>
      <BookACourse/>
      <UpcomingTraining/>
      <Testimonials />
      <TrainingCourses/>
      <Footer />
    </>
  )
}

export default App
