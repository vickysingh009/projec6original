import React, { useState } from "react";
import { Star, Heart, Plus, Minus } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity === 0) {
      setQuantity(1);
      if (onAddToCart) {
        onAddToCart(product, 1);
      }
    }
  };

  const increaseQuantity = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onAddToCart) {
      onAddToCart(product, newQuantity);
    }
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onAddToCart) {
        onAddToCart(product, newQuantity);
      }
    } else {
      setQuantity(0);
      // Optionally notify parent component that item was removed
    }
  };

  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white border hover-lift transition-all duration-300 hover:shadow-lg w-full max-w-xs">
      <div className="relative overflow-hidden bg-[#e1e7ef]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:h-52 object-contain transition-transform duration-500 hover:scale-105 h-40"
        />
        <button 
          className={`absolute top-2 right-2 p-1.5 rounded-full transition-all duration-200 ${
            isFavorite 
              ? "bg-red-100 text-red-500 shadow-sm" 
              : "bg-white text-gray-400 shadow"
          } hover:scale-110`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={18} 
            fill={isFavorite ? "currentColor" : "none"} 
          />
        </button>
      </div>

      <div className="p-2">
        <h3 className="text-sm font-semibold transition-colors hover:text-blue-600 text-left truncate" title={product.name}>
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-1 text-left">
          <span className="text-lg font-bold text-gray-900 text-left">
            ${product.price}
          </span>
        </div>

        {/* Button or Quantity Controls */}
        {quantity === 0 ? (
          <button 
            className="w-full mt-3 bg-gray-100 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-500 hover:text-white"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between mt-3 bg-blue-100 rounded-lg p-2">
            <button 
              className="p-1 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            
            <span className="font-semibold text-blue-700">{quantity}</span>
            
            <button 
              className="p-1 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;