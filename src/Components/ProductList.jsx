import React, { useState, useEffect } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoStar } from 'react-icons/io5';
import Skeleton from './Skeleton'; // Adjust the path if needed

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Laptop sleeve macbook', price: '59', rating: 4.5, description: 'A cool gadget.', image: 'https://bullstrap.co/cdn/shop/files/12_4ab57fa3-0dd7-4c35-958e-8a399cc25cfe.png?v=1699975796' },
        { id: 2, name: 'Airport Max', price: '549', rating: 4.0, description: 'Trendy fashion item.', image: 'https://www.komplett.no/img/p/1200/1313148.jpg' },
        { id: 3, name: 'Flower Laptop Sleeve', price: '39', rating: 4.2, description: 'Fun toy for kids.', image: 'https://images.squarespace-cdn.com/content/v1/5fac038a8ab7951104a4d707/1677111429055-Y5MSSAB65P85KSJN6Z8P/laptop-sleeve-15-front-63f6b07c202dc.jpg?format=1000w' },
        { id: 4, name: 'Supreme Water Bottle', price: '59', rating: 4.3, description: 'Educational material.', image: 'https://i.ebayimg.com/images/g/Oe0AAOSwCupm2MqZ/s-l1200.jpg' },
        { id: 5, name: 'Laptop sleeve MacBook', price: '59', rating: 4.6, description: 'Beauty product.', image: 'https://cdn.thewirecutter.com/wp-content/media/2024/04/laptopsleeves-2048px-1129.jpg?auto=webp&quality=75&width=1024' },
        { id: 6, name: 'Macbook pro 13"', price: '1099', rating: 4.4, description: 'Fitness equipment.', image: 'https://www.cnet.com/a/img/resize/70d8bc6d67fee07b0b96e4db40b476e05994b03c/hub/2016/10/27/ab05197d-6c00-40a1-bf47-a6662fa8f582/apple-macbook-pro-13-inch-2016-1888-044.jpg?auto=webp&fit=crop&height=675&width=1200' },
        { id: 7, name: 'HomePod mini', price: '69', rating: 4.7, description: 'Modern furniture.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zCkyH1JONryzhR6FbTV4-rzSZS97SIInnw&s' },
        { id: 8, name: 'Ipad Mini', price: '599', rating: 4.5, description: 'Stylish sneakers.', image: 'https://angkormeas.com/wp-content/uploads/2024/10/Ipad-Mini7_v3.jpg?v=1729666075' },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold text-center mb-6'>Today's Best Deals for You!</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
        ) : (
          products.map((v) => (
            <div
              key={v.id}
              className='bg-white rounded-xl shadow-md overflow-hidden relative hover:scale-105 transform transition duration-300'
            >
              <div className='w-full h-60 relative'>
                <button className='absolute top-2 right-2 text-2xl text-gray-700 hover:text-red-500 z-10'>
                  <CiHeart />
                </button>
                <img
                  src={v.image}
                  alt={v.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 flex flex-col justify-between h-[200px]'>
                <p className='text-lg font-bold truncate'>{v.name}</p>
                <p className='text-sm text-gray-600 mt-1 line-clamp-2'>{v.description}</p>
                <div className='flex items-center mt-2'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IoStar key={i} className='text-yellow-400' />
                  ))}
                  <span className='ml-1 text-sm text-gray-500'>(121)</span>
                </div>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-lg font-bold'>${v.price}</p>
                  <button className='px-3 py-1 border border-black rounded-xl text-sm hover:bg-blue-900 hover:text-white transition duration-300'>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
