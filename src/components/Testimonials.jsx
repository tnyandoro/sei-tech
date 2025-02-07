import React from 'react'; // Add this line if you're using React 16 or older

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'Great training programs!' },
    { name: 'Jane Smith', feedback: 'AI solutions improved our efficiency.' },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center">What People Are Saying</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded">
            <p>"{t.feedback}"</p>
            <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;