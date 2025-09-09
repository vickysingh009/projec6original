import React from 'react';
import IMG from "./card1.png"; // Replace with actual product images

function DetailCard({card1, card2 }) {
  return (
    <div className="p-4">
      {/* Wrapper for Cards */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* --- Card 1: Image on Left --- */}
        <div className="flex flex-row items-center bg-gray-300 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 w-full lg:w-1/2 hover:scale-105 duration-500">
          {/* Image Section */}
          <div className="w-1/3 sm:w-1/4 lg:w-1/3">
            <img
              className="object-cover w-full h-32 sm:h-40 md:h-52 lg:h-72 rounded-l-lg"
              src={card1.image}
              alt="Minimalist Wooden Chair"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between p-4 w-2/3 sm:w-3/4 lg:w-2/3">
            <h5 className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
            {card1.name}

            </h5>
            <p className="mb-1 text-xs sm:text-sm md:text-base text-gray-700">
             {card1.description1}
            </p>
            <p className="mb-1 text-xs sm:text-sm md:text-base text-gray-700 hidden sm:block">
            {card1.description2}
            </p>
            <div className="">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* --- Card 2: Image on Right --- */}
        <div className="flex flex-row-reverse items-center bg-gray-300 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 w-full lg:w-1/2  hover:scale-105 duration-500">
          {/* Image Section */}
          <div className="w-1/3 sm:w-1/4 lg:w-1/3">
            <img
              className="object-cover w-full h-32 sm:h-40 md:h-52 lg:h-72 rounded-r-lg"
              src={card2.image}
              alt="Luxury Sofa Set"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between p-4 w-2/3 sm:w-3/4 lg:w-2/3">
            <h5 className="mb-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
                  {card2.name}

            </h5>
            <p className="mb-1 text-xs sm:text-sm md:text-base text-gray-700">
              {card2.description1}
            </p>
            <p className="mb-1 text-xs sm:text-sm md:text-base text-gray-700 hidden sm:block">
                {card2.description2}
            </p>
            <div className="">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DetailCard;
