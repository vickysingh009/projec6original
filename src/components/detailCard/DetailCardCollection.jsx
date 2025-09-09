import React from 'react'
import DetailCard from './DetailCard'
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card5.png";
const Details = {
  first: {  
    name: "Regal Noir Table",
    description1: "Designed with solid mahogany, this table brings enduring sophistication to every space.",
    description2: "The graceful pedestal base offers stability and charm for your dining or workspace.",
    image: card1,
  },

  second: {  
    name: "Ocean Mist Almirah",
    description1: "Crafted from fine wood with intricate carvings, it adds a coastal elegance to any room.",
    description2: "The turquoise finish blends artistry and function, making it a timeless storage statement.",
    image: card2,
  },

  third: {  
    name: "Crimson Treasure Box",
    description1: "Handcrafted with vibrant hues, this chest brings rustic charm to your living space.",
    description2: "A perfect blend of storage and artistry, designed to keep your treasures safe in style.",
    image: card3,
  },

  fourth: {  
    name: "Bookshelf",
    description1: "Carved from sturdy wood, this bookshelf combines traditional craftsmanship with modern elegance.",
    description2: "Its intricate detailing and spacious design make it ideal for showcasing books and décor.",
    image: card4,
  },
};




function DetailCardCollection() {
  return (
    <div>
        <div className="text-center">
        <h2 className="text-xl sm:text-3xl font-bold  text-gray-800 tracking-tight">
          Discover Comfort & Elegance
        </h2>
      <p className="hidden sm:block text-base sm:text-lg text-gray-600 dark:text-gray-300">
  Explore our handpicked modern furniture collection designed to elevate your space.
</p>
      </div>

      <DetailCard
      card1={Details.first} card2={Details.second}
      ></DetailCard>
      <DetailCard
      card1={Details.third} card2={Details.fourth}
      ></DetailCard>
    </div>
  )
}

export default DetailCardCollection
