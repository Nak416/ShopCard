import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function C_contact() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10">
        ទំនាក់ទំនង (Contact Us)
      </h2>

      <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-6 sm:space-y-8 text-gray-700">
          <div className="flex items-center gap-3 sm:gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl sm:text-2xl" />
            <div>
              <h3 className="font-semibold text-sm sm:text-base">ទូរស័ព្ទ</h3>
              <a href="tel:+855889825021" className="text-blue-600 hover:underline text-sm sm:text-base">
                +855 88 982 5021
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <FaEnvelope className="text-blue-600 text-xl sm:text-2xl" />
            <div>
              <h3 className="font-semibold text-sm sm:text-base ">អ៊ីមែល</h3>
              <a href="mailto:info@example.com" className="text-blue-600 hover:underline text-sm  sm:text-base">
                Theshopcard@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl sm:text-2xl" />
            <div>
              <h3 className="font-semibold text-sm sm:text-base">អាសយដ្ឋាន</h3>
              <p className="text-sm sm:text-base">ភ្នំពេញ, កម្ពុជា</p>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 ">
            <a href="https://www.facebook.com/vannak.hey.3" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 text-lg sm:text-xl border-2 p-1">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com/vannak.hey.3" aria-label="Twitter" className="text-blue-600 hover:text-blue-800 text-lg sm:text-xl border-2 p-1">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/vannak.hey.3" aria-label="Instagram" className="text-blue-600 hover:text-blue-800 text-lg sm:text-xl border-2 p-1">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="md:w-2/3 space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="ឈ្មោះ (Name)"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="អ៊ីមែល (Email)"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            rows="5"
            placeholder="សារ (Message)"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300 text-base sm:text-lg"
          >
            បញ្ចូន (Send)
          </button>
        </form>
      </div>
    </div>
  );
}

export default C_contact;
