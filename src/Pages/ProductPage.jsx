import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";

const categories = [
  "All Products",
  "Almirah",
  "Accessories",
  "Bed Side",
  "SideBoard",
  "Box",
  "Drawer Chest",
  "Sofa",
  "One of a kind",
  "Bookshelf",
  "Table",
];

const ProductPage = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Load JSON from public folder
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

  // Handle add to cart functionality
  const handleAddToCart = useCallback((product, quantity) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity = quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  }, []);

  // Apply filters + sorting + search
  const filteredProducts = allProducts
    .filter(
      (product) =>
        selectedCategory === "All Products" ||
        product.category === selectedCategory
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .filter(product => 
      searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.id - b.id; // Default sort
    });

  return (


    <div className="min-h-screen bg-gray-50 relative top-16">
     
     <div className="container mx-auto px-4 py-4 flex relative">
        {/* Mobile Sidebar Blur Overlay - Only blurs content below header */}
        {isSidebarOpen && (
          <div 
            className="fixed top-20 left-0 right-0 bottom-0 backdrop-blur-sm bg-white/30 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        
        {/* Sidebar - Fixed position for desktop */}
        <aside className={`bg-white rounded-lg shadow p-6 w-64 fixed md:sticky top-20 md:top-16 left-0 z-30 md:z-0 transform transition-transform duration-300 ease-in-out md:translate-x-0 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="h-full">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 mb-6">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-100 text-blue-800"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            {/* Price Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Price Range</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="flex space-x-2 items-center">
                    <input
                      type="range"
                      min="0"
                      max="1500"
                      step="50"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([parseInt(e.target.value), priceRange[1]])
                      }
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="1500"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Main Content - Adjusted margin for fixed sidebar on desktop */}
        <main className="flex-1 ml-0 md:ml-10 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <button 
              className="md:hidden flex items-center text-gray-600"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
            <div className="flex justify-between items-center w-full">
              <div>
            <p className="text-gray-600 text-sm">{filteredProducts.length} products found</p></div>
            
            <div className="hidden md:flex items-center">
              <label className="mr-2 text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            </div>
          </div>
          

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (

       
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}

                />



              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-gray-600">No products found. Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductPage;