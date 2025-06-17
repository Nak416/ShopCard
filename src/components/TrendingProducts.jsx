import React from 'react';

const products = [
  {
    id: 1,
    title: 'Furniture Village',
    description: 'Delivery with in 24 hours',
    image: 'furniture.jpg', // replace with your image path
  },
  {
    id: 2,
    title: 'Fashion World',
    description: 'Delivery with in 24 hours',
    image: 'fashion.jpg', // replace with your image path
  },
];

const TrendingProducts = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Trending Products For You!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
