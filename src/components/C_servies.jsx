import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaGift, FaThumbsUp } from 'react-icons/fa';

function C_servies() {
  return (
    <div className="w-full bg-gray-100 py-10 px-5">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-3xl font-bold mb-8">សេវាកម្មរបស់យើង (Our Services)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FaShippingFast className="text-4xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">ដឹកជញ្ជូនលឿន (Fast Delivery)</h2>
            <p className="text-gray-600">
              យើងដឹកជញ្ជូនផលិតផលរបស់អ្នកទៅដល់ផ្ទះយ៉ាងលឿន និងសុវត្ថិភាព។
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FaHeadset className="text-4xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">សេវាកម្មជំនួយ 24/7 (24/7 Support)</h2>
            <p className="text-gray-600">
              ក្រុមការងាររបស់យើងត្រៀមខ្លួនជានិច្ចដើម្បីជួយអ្នកគ្រប់ពេល។
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FaMoneyBillWave className="text-4xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">តម្លៃសមរម្យ (Best Prices)</h2>
            <p className="text-gray-600">
              យើងផ្តល់តម្លៃសមរម្យបំផុត និងមានប្រសិទ្ធភាពខ្ពស់សម្រាប់ផលិតផលទាំងអស់។
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FaLock className="text-4xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">សុវត្ថិភាព (Secure Payment)</h2>
            <p className="text-gray-600">
              ប្រព័ន្ធទូទាត់មានសុវត្ថិភាព និងការពារទិន្នន័យរបស់អ្នក។
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FaGift className="text-4xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">អំណោយពិសេស (Special Gifts)</h2>
            <p className="text-gray-600">
              ទទួលបានអំណោយពិសេសពេលទិញផលិតផលជាមួយយើង។
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FaThumbsUp className="text-4xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">គុណភាពល្អបំផុត (High Quality)</h2>
            <p className="text-gray-600">
              ផលិតផលគ្រប់មុខមានគុណភាពល្អ និងបានសម្គាល់ដោយអតិថិជនជាច្រើន។
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default C_servies;
