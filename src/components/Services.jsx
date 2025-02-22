import React from 'react';

const Services = () => {
  const services = [
    { title: 'AI-Driven Risk Assessments', description: 'Mitigate workplace risks with AI insights.' },
    { title: 'Expert Training', description: 'Industry-certified training programs.' },
    { title: 'Continuous Monitoring', description: 'Ensure workplace safety in real time.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded p-6">
            <h3 className="text-xl font-semibold text-green-500">{service.title}</h3>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;