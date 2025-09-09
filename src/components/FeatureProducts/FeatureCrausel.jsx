import * as React from "react";
import { ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import card1 from './image/card1.png';
import card2 from './image/card2.png';
import card3 from './image/card3.png';
import card4 from './image/card4.png';
import card5 from './image/card5.png';
import card6 from './image/card6.png';

const products = [
  { id: 1, name: "Regal Noir Table", img: card1 },
  { id: 2, name: "Ocean Mist Almirah ", img: card2 },
  { id: 3, name: "Crimson Treasure Box", img: card3 },
  { id: 4, name: "Ivory Blossom Almirah", img: card4 },
  { id: 5, name: "Royal Arch Display", img: card5 },
  { id: 6, name: "Emerald Gate Almirah", img: card6 },

    { id: 4, name: "Ivory Blossom Cabinet", img: card4 },
  { id: 5, name: "Royal Arch Display", img: card5 },
];

function FeatureCarousel() {
  return (
    <div className="w-[95%] mx-auto sm:py-10 py-3">
      <div className="rounded-sm sm:py-2 px-4 text-center ml-6 sm:ml-0 pb-3">
        <h1 className="font-semibold text-xl lg:text-2xl inline-block border-b-2 border-blue-400 w-fit pb-1">
          Featured Product
        </h1>
      </div>

      {/* Loop enabled */}
      <div className="sm:pt-4 pt-0">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 lg:basis-1/6"
            >
              <div className="flex flex-col pt-2">
                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="sm:w-[90%] h-[250px] w-48 object-cover rounded-md"
                />

                {/* Product Info */}
                <div className="mt-1 flex items-center justify-between px-1">
                  <h3 className="text-slate-500 hover:underline cursor-pointer">
                    {product.name}
                  </h3>
                
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows (needed to see looping) */}
      
      </Carousel>
      </div>
    </div>
  );
}

export default FeatureCarousel;
