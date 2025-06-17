import React, { useContext } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoStar } from 'react-icons/io5';
import Skeleton from './Skeleton';
import ProductContext from '../store/ProductContext';

function PopularProducts() {
  const { products, isLoading } = useContext(ProductContext);
  return (
    <div className='container p-4 mx-auto'>
      <h1 className='text-2xl font-bold'>Weekly Popular Products</h1>
      <div className='overflow-x-auto mt-4'>
        <div className='flex flex-nowrap gap-3'>
        {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} />
            ))
          ) : (
            products.map((v, i) => {
              return (
                <div key={i} className='my-1 w-[49%] md:w-[32%] lg:w-[30.5%] shrink-0 relative'>
                  <div className='w-full h-[240px] sm:h-[300px] lg:h-[410px] border border-gray-300 rounded-xl overflow-hidden'>
                    <button className='btn btn-circle absolute end-1 top-1 text-2xl'>
                      <CiHeart />
                    </button>
                    <img src={v.image} alt='' className='w-full h-full object-contain' />
                  </div>
                  <div className='flex justify-between py-2'>
                    <div>
                      <p className='text-xl font-bold line-clamp-1'>{v.name}</p>
                      <p className='text-[13px] my-2 line-clamp-2'>{v.description}</p>
                      <div className='flex'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}><IoStar /></span>
                        ))}
                        <span>
                          <sup>(121)</sup>
                        </span>
                      </div>
                      <button className='px-2 py-2 md:px-4 md:py-2 border-1 border-black rounded-4xl cursor-pointer hover:bg-blue-900 hover:text-white duration-500'>
                        Add To Cart
                      </button>
                    </div>
                    <p className='lg:text-xl font-bold'>${v.price}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;