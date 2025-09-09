import React, { createContext, useState, useEffect } from "react";
export const ProductData = createContext();

import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import card5 from "./img/card5.png";
import card6 from "./img/card6.png";

function DataCollection({ children }) {
  // Old array stays unchanged
  const products = [
    {
      id: 1,
      title: "Blue Carved Table",
      rating: "4.9 (134)",
      ratingValue: 4.9,
      price: 499.99,
      oldPrice: 649.99,
      image: card1,
      popular: true,
    },
    {
      id: 2,
      title: "Lotus Mandala Cabinet",
      rating: "4.7 (98)",
      ratingValue: 4.7,
      price: 799.99,
      oldPrice: 999.99,
      image: card2,
      popular: false,
    },
    {
      id: 3,
      title: "Heritage Table",
      rating: "4.8 (121)",
      ratingValue: 4.8,
      price: 1_299.99,
      oldPrice: 1_599.99,
      image: card3,
      popular: true,
    },
    {
      id: 4,
      title: "Eternal Edge Dining",
      rating: "4.9 (210)",
      ratingValue: 4.9,
      price: 1_799.99,
      oldPrice: 2_199.99,
      image: card4,
      popular: true,
    },
    {
      id: 5,
      title: "Rustic Riverwood Bench",
      rating: "4.6 (87)",
      ratingValue: 4.6,
      price: 399.99,
      oldPrice: 549.99,
      image: card5,
      popular: false,
    },
    {
      id: 6,
      title: "Royal Haveli Brass Door",
      rating: "4.8 (176)",
      ratingValue: 4.8,
      price: 2_499.99,
      oldPrice: 2_999.99,
      image: card6,
      popular: true,
    },
  ];

  // New array from JSON
  const [ourProducts, setOurProducts] = useState([]);

  useEffect(() => {
    fetch("/productsByCategory.json")
      .then((res) => res.json())
      .then((data) => {
        const firstProducts = Object.entries(data).map(([category, items], index) => {
          const item = items[0];
          return {
            id: item.id,
            title: `${category} - ${item.name}`,
            rating: "4.8 (176)",
            ratingValue: 4.8,
            price: item.price,
            oldPrice: (item.price * 1.2).toFixed(2),
            image: item.image, // you can assign dynamic images if needed
            popular: true,
          };
        });
        setOurProducts(firstProducts);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <ProductData.Provider value={{ products, ourProducts }}>
      {children}
    </ProductData.Provider>
  );
}

export default DataCollection;
