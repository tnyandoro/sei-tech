import React from 'react';
import bgImage from '../assets/images/bg.jpg'; // Import the background image

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen mt-16" // Use mt-16 for margin-top
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-full bg-black bg-opacity-60 text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Empowering Your Operations with{' '}
          <span className="text-green-500">Human-Centered AI</span>
        </h1>
        <p className="mt-4 text-lg">
          Experience cutting-edge AI solutions, global certifications, and revolutionary workplace safety.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green-500 px-6 py-3 rounded">Get Started</button>
          <button className="bg-gray-700 px-6 py-3 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;