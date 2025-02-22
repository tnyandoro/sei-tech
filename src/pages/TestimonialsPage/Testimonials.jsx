import React from "react";

const testimonials = [
  {
    name: "Patrick Thompson",
    company: "SafeWork Solutions",
    feedback:
      "The NEBOSH training courses were comprehensive and easy to follow. My team feels much more confident about workplace safety now.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Sarah Carter",
    company: "Horizon Construction",
    feedback:
      "Their health and safety equipment exceeded our expectations. It's great to see a company so dedicated to workplace safety.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "John Roberts",
    company: "CareTech Industries",
    feedback:
      "The compliance services helped us meet all necessary health and safety standards. The team was professional and supportive throughout.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Michael Brown",
    company: "EcoBuild Contractors",
    feedback:
      "The risk assessment training made a big difference in our operations. Their trainers were knowledgeable and engaging.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Michael John",
    company: "GreenSafe Solutions",
    feedback:
      "Thanks to their incident reporting tools, our team has significantly improved response times in emergencies. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "David Mitchell",
    company: "WorkWell Industries",
    feedback:
      "Their products and training have transformed our workplace safety culture. We've seen a measurable reduction in incidents since partnering with them.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?business,meeting')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500">
            WHAT PEOPLE ARE SAYING
          </h1>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-lg p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
              <div className="mt-4 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-green-500"
                />
                <div className="ml-3">
                  <h3 className="text-green-500 font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400">
          © 2025 SEI TECH International. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Testimonials;
