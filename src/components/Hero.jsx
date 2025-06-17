import React from 'react';

function Hero() {
  return (
    <div className="w-full h-auto md:h-[70vh] bg-black bg-image py-10 md:py-0">
      <div className="container h-full mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start px-4">
        <div className="w-full md:w-[40%] text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Shopping and Department Store.
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl">
            Shopping is a bit of a relaxing hobby for the bank balance.
          </p>
          <button className="bg-white mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-3xl text-black text-lg md:text-2xl cursor-pointer hover:bg-blue-900 hover:text-white transition duration-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
