import React from 'react';

function C_About() {
  return (
    <div className="w-full bg-gray-100 py-10 px-5">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-2xl leading-relaxed">
          Welcome to our shop! We offer high-quality products at the best prices to meet your needs.
          Our mission is to provide excellent service, fast delivery, and ensure customer satisfaction.
          Thank you for trusting us and being part of our journey.
        </p>
        <p className="text-gray-700 text-2xl leading-relaxed mt-4">
          Our team is passionate about helping you find the right products and delivering an outstanding shopping experience.
          If you have any questions, feel free to contact us anytime.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default C_About;
