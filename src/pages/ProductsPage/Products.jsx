import React from "react";
import { Link } from "react-router-dom";
import productImage from "../../assets/images/product.jpg";


const Products = () => {
  const products = [
    {
      id: 1,
      title: "AI-Powered Safety",
      description: "Identify and mitigate risks instantly with advanced AI technology.",
      image: productImage,
    },
    {
      id: 2,
      title: "Compliance Monitoring",
      description: "Ensure industry-standard adherence in real-time, effortlessly.",
      image: productImage,
    },
    {
      id: 3,
      title: "Seamless Integration",
      description: "Works seamlessly across platforms, enhancing connectivity.",
      image: productImage,
    },
    {
      id: 4,
      title: "Actionable Insights",
      description: "Make data-driven decisions for improved health and safety.",
      image: productImage,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-green-500 mb-8">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-400 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-300">{product.description}</p>
            <button className="mt-4 bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-12">
        <Link to="/" className="text-xl text-white border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Products;
