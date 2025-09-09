import React, { useState } from "react";
import { Star, Heart, Plus, Minus } from "lucide-react";

const ProductCard = ({ product, onAddToCart,objectFit }) => {
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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={14} fill="currentColor" className="text-yellow-500" />
        ))}
        {halfStar && (
          <Star size={14} fill="url(#half)" className="text-yellow-500" />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={14} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white border hover-lift transition-all duration-300 hover:shadow-lg w-full max-w-xs">
      <div className="relative overflow-hidden bg-[#e1e7ef]">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-52 transition-transform duration-500 hover:scale-105 ${objectFit}`}
        />
        {product.popular && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Popular
          </span>
        )}
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

      <div className="p-4">
        <h3 className="text-sm font-semibold transition-colors hover:text-blue-600 text-left truncate" title={product.title}>
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm mt-1">
          {renderStars(product.ratingValue)}
          <span className="ml-1 text-gray-500 text-xs">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 text-left">
          <span className="text-lg font-bold text-gray-900 text-left">
            ${product.price}
          </span>
          <span className="text-sm line-through text-gray-400 ml-2 text-left">
            ${product.oldPrice}
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