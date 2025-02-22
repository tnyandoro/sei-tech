import React from "react";

const Expertise = () => {
  const expertiseData = [
    {
      icon: "🛡️", // Use actual icons/images in your app
      title: "AI-Driven Risk Assessments",
      description:
        "Our AI systems, paired with expert insights, identify workplace hazards and recommend actionable solutions to prevent incidents.",
    },
    {
      icon: "🩺",
      title: "Expert-Led First Aid Training",
      description:
        "Certified trainers provide hands-on first aid education, supported by AI tools for real-time scenario-based learning.",
    },
    {
      icon: "📊",
      title: "Continuous Health Monitoring",
      description:
        "Our qualified health experts and AI-powered systems work together to ensure employee well-being with real-time alerts and solutions.",
    },
    {
      icon: "🛠️",
      title: "Customized Safety Equipment Training",
      description:
        "Expert trainers guide the use of AI-recommended protective gear, tailored to the specific needs of your workplace.",
    },
    {
      icon: "🔥",
      title: "Fire Risk Management by Experts",
      description:
        "Combining AI technology with qualified professionals ensures proactive fire risk identification and mitigation strategies.",
    },
    {
      icon: "✔️",
      title: "Regulatory Compliance Simplified",
      description:
        "Our experts keep you up to date with safety regulations, while AI streamlines documentation and ensures compliance effortlessly.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8">
          Expertise meets <span className="text-green-500">AI-driven innovation</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          With a team of certified experts and advanced AI systems, we ensure
          your health and safety measures are not just effective but always up
          to date with the latest standards.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-center shadow-lg"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
