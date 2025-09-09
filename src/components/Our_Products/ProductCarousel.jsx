import * as React from "react";
import { ProductData } from "../Store/DataCollection";
import { useContext } from 'react'
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";



export default function ProductCarousel({products,objectFit}) {
  const [cart, setCart] = useState({});
  const handleAddToCart = (product, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [product.id]: {
        product,
        quantity
      }
    }));
    
    // Optional: You can add a notification or console log here
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  return (
    <>
      <div className="lg:mt-12 mt-6">
        <div className="rounded-sm py-2 px-4 text-center ml-6 sm:ml-0 sm:py-0 mb-3 sm:mb-8">
          <h1 className="font-semibold text-xl sm:text-xl lg:text-2xl">
            Our Products
          </h1>
        </div>

        <div className="relative group ">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-2">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="p-1">
                    <ProductCard 
                      product={product} 
                      onAddToCart={handleAddToCart}
                      objectFit={objectFit}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </>
  );
}