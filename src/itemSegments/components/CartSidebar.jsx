import React, { useRef, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import gsap from 'gsap';

export const CartSidebar = () => {
  const {
    cartItems,
    isWholesale,
    setIsWholesale,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    showCart,
    setShowCart,
    clearCart,
  } = useCart();

  const sidebarRef = useRef(null);
  const { animateRemoveItem } = useGSAPAnimation();

  useEffect(() => {
    if (sidebarRef.current) {
      if (showCart) {
        gsap.to(sidebarRef.current, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(sidebarRef.current, {
          x: '100%',
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [showCart]);

  const handleRemoveItem = async (productId) => {
    const itemElement = document.querySelector(`[data-cart-item-id="${productId}"]`);
    if (itemElement) {
      await animateRemoveItem(itemElement);
    }
    removeFromCart(productId);
  };

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed bottom-6 right-6 z-40  hover:shadow-lg text-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <img src="public/cart.svg" alt="Cart" width="44" height="auto" />
        {totalItems > 0 && (
          <span className="bg-yellow-400 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto transform translate-x-full"
      >
        {/* Header */}
        <div className="sticky top-0 bg-red-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-2xl hover:text-gray-200 transition"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-6 text-center py-20">
            <p className="text-3xl mb-2">🛒</p>
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <p className="text-gray-500 text-sm mt-2">Add items to get started</p>
          </div>
        ) : (
          <>
            {/* Wholesale Toggle */}
            <div className="p-4 border-b border-gray-200">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isWholesale}
                  onChange={(e) => setIsWholesale(e.target.checked)}
                  className="w-5 h-5 text-red-600 rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  Wholesale Pricing
                </span>
              </label>
            </div>

            {/* Cart Items */}
            <div className="p-4 space-y-4">
              {cartItems.map((item) => {
                const priceData = isWholesale ? item.wholesale : item.retail;
                const itemTotal = priceData.price * item.quantity;

                return (
                  <div
                    key={item.id}
                    data-cart-item-id={item.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      {priceData.unit}
                    </p>

                    {/* Price */}
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">
                        ₹{priceData.price} × {item.quantity} = ₹
                        <span className="font-bold text-red-600">{itemTotal}</span>
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="border-t border-gray-200 p-4 sticky bottom-0 bg-white">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg text-red-600">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Overlay */}
      {showCart && (
        <div
          onClick={() => setShowCart(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  );
};
