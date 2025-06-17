import React from 'react';
import data from '../Data/categories';

function ShopCategories() {
  
  return (
    <div className='container mx-auto py-16 p-4'>
      <h1 className='text-4xl font-bold'>Shop Our Top Categories</h1>
      <div className='flex flex-wrap mt-3 justify-between'>
        {
        data.map((item, i) => {
        return (
          <div key={i}
            className='w-[49%] h-[220px] md:w-[32.2%] md:h-[350px] lg:w-[15.9%] lg:h-[300px] bg-pink-400 rounded-xl overflow-hidden relative my-1'
          >
            <h1 className='text-center absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 text-xl font-bold text-white'>
              {item.text}
            </h1>
            <img
              src={item.image}
              alt={item.text}
              className='w-full h-full object-cover hover:scale-105 duration-400'
            />
          </div>
        )
        })
        
        }
      </div>
    </div>
  );
}

export default ShopCategories;