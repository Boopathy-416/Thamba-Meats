import React from 'react';

export const QuantitySelector = ({ quantity, onQuantityChange, onAddToCart }) => {
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700">Quantity:</label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={handleDecrement}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition"
          >
            −
          </button>
          <span className="px-6 py-2 font-semibold text-center min-w-16">
            {quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => onAddToCart(quantity)}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
};
