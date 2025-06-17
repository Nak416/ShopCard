// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialIcons = [FaFacebookF, FaInstagram, FaTwitter];
const paymentMethods = ['stripe', 'visa', 'mastercard', 'amazone', 'klarna', 'google'];

const footerLinks = [
  { title: 'Department', items: ['Fashion', 'Education', 'Frozen Food', 'Beverages', 'Organic Grocery', 'Office Supplies', 'Beauty', 'Books', 'Electronics', 'Travel', 'Fitness', 'Sneakers', 'Toys', 'Furniture'] },
  { title: 'About Us', items: ['About', 'Careers', 'News & Blog', 'Help', 'Press', 'Shop By Location', 'Brands', 'Affiliates', 'Guides'] },
  { title: 'Services', items: ['Gift Card', 'Mobile App', 'Shipping & Delivery', 'Order Pickup', 'Account Signup'] },
  { title: 'Help', items: ['Help Center', 'Returns', 'Track Orders', 'Contact Us', 'Feedback', 'Security & Fraud'] },
];

const quickLinks = ['Become Seller', 'Gift Cards', 'Help Center'];
const bottomLinks = ['Terms of Service', 'Terms of About', 'Privacy & Policy'];

const Footer = () => (
  <footer className="bg-white text-gray-700 border-t border-gray-200 mt-10">
    <div className="container mx-auto px-4 py-10">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="Logo.png"
              alt="Shopcart Logo"
              className="h-12 w-12 object-cover"
            />
            <h2 className="text-2xl font-bold">Shopcart</h2>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4 text-2xl">
            {socialIcons.map((Icon, idx) => (
              <Icon
                key={idx}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
              />
            ))}
          </div>

          {/* Accepted Payments */}
          <h3 className="font-semibold text-lg my-6">Accepted Payments</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-3">
            {paymentMethods.map((method) => (
              <img
                key={method}
                src={`${method}.png`}
                alt={method}
                className="h-10 w-20 bg-white border rounded hover:shadow-lg hover:scale-105 transition duration-200 mx-auto"
              />
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="font-bold mb-3 text-lg">{col.title}</h4>
            <ul className="text-base space-y-2">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-red-900 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* App Store & Quick Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <img
            src="paypal.png"
            alt="PayPal"
            className="h-10 cursor-pointer hover:scale-105 transition-transform"
          />
          <img
            src="google-pay.png"
            alt="Google Pay"
            className="h-10 cursor-pointer hover:scale-105 transition-transform"
          />
        </div>

        <div className="flex space-x-6 text-gray-600 flex-wrap justify-center">
          {quickLinks.map((label, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-8 border-t pt-4 text-sm text-gray-900 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex space-x-4 flex-wrap justify-center">
          {bottomLinks.map((text, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-red-900 transition-colors duration-200"
            >
              {text}
            </a>
          ))}
        </div>
        <p className="text-center">
          All rights reserved by Musemind UI/UX Design Agency © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
