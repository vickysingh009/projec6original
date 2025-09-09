import React, { useState, useEffect, useRef } from "react";

const ShowCaseCard = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const middleCardRef = useRef(null);

  useEffect(() => {
    fetch("/productsByCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setProductsByCategory(data);
        // Flatten with category
        const flattened = Object.entries(data).flatMap(([category, items]) =>
          items.map((item) => ({ ...item, category }))
        );
        setAllProducts(flattened);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // ✅ After products load, scroll to index 2 card in mobile
  useEffect(() => {
    if (allProducts.length > 0 && window.innerWidth < 768) {
      setTimeout(() => {
        middleCardRef.current?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }, 200); // small delay to ensure rendering
    }
  }, [allProducts]);

  const getCardWidth = (index) => {
    if (index === 2) return "md:w-80"; // Middle card - widest
    if (index === 1 || index === 3) return "md:w-72"; // Cards 1 and 3 - medium
    return "md:w-64"; // Outer cards - narrowest
  };

  const getCardElevation = (index) => {
    if (index === 2) return "shadow-2xl"; // Middle card - highest elevation
    if (index === 1 || index === 3) return "shadow-xl";
    return "shadow-lg";
  };

  const getCardMargin = (index) => {
    if (index === 2) return "md:mt-0"; // Middle card
    if (index === 1 || index === 3) return "md:mt-10";
    return "md:mt-18";
  };

  return (
    <div className="min-w-full mx-auto mt-4">
      <div className="text-center mb-8">
        <p className="text-gray-600">Crafted with excellent material</p>
        <h1 className="text-3xl font-bold mb-2">Furniture Categories</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      {/* ✅ Desktop layout (unchanged) */}
      <div className="hidden md:flex flex-row justify-center gap-4 md:gap-8 items-start">
        {allProducts.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            className={`w-full ${getCardWidth(index)} transform transition-all duration-500 h-72 ${
              activeCard === item.id ? "scale-105 -translate-y-4" : ""
            } ${getCardMargin(index)}`}
            onMouseEnter={() => setActiveCard(item.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className={`rounded-2xl ${getCardElevation(
                index
              )} overflow-hidden border border-gray-100 h-full`}
            >
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                  <h3 className="font-bold text-white text-xl mb-1 truncate">
                    {index === 2 ? item.category : ""}
                  </h3>
                  <p className="text-amber-100 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Mobile layout with auto-scroll to middle card */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory px-6 space-x-6 scrollbar-hide">
        {allProducts.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            ref={index === 2 ? middleCardRef : null} // 👈 reference middle card
            className="snap-center shrink-0 w-64 h-72 rounded-2xl shadow-lg border border-gray-100 relative"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <div className="absolute top-4 left-4">
              <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center px-4">
              <h3 className="font-bold text-white text-lg truncate">
                {item.category}
              </h3>
              <p className="text-amber-100 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition-colors duration-300">
          View All Collections
        </button>
      </div>
    </div>
  );
};

export default ShowCaseCard;
