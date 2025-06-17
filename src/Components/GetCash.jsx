import React from 'react';

function GetCash() {
  return (
    <div className="w-full bg-base-300 py-10">
      <div className="flex flex-col md:flex-row w-full bg-gray-600 p-6 md:p-11">
        <div className="w-full md:w-1/2 flex items-center justify-center text-white mb-6 md:mb-0">
          <div className="w-auto px-4 md:w-[80%] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Get 5% Cash Back
            </h1>
            <p className="mt-3 md:mt-6 text-lg md:text-xl">
              on Shopcart.com
            </p>
            <button className="bg-white mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-3xl text-black text-lg md:text-2xl cursor-pointer hover:bg-blue-900 hover:text-white duration-500">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="GetCard.png"
            alt="Get Card"
            className="w-[250px] md:w-[350px] h-[250px] md:h-[370px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default GetCash;
