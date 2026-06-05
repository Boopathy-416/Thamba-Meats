import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../Context/CartContext';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import { QuantitySelector } from './QuantitySelector';
import { products } from '../data/products';

export const ProductModal = ({ categoryId, categoryName, isOpen, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const productListRef = useRef(null);
  const { addToCart } = useCart();
  const { animateModalEntry, animateModalExit, animateProductStagger, animateAddToCart } =
    useGSAPAnimation();

  const categoryProducts = products[categoryId] || [];

  useEffect(() => {
    if (isOpen && modalRef.current && backdropRef.current) {
      animateModalEntry(modalRef.current, backdropRef.current);

      // Animate product list items
      if (productListRef.current) {
        const productElements = productListRef.current.querySelectorAll('.product-item');
        animateProductStagger(Array.from(productElements));
      }
    }
  }, [isOpen, animateModalEntry, animateProductStagger]);

  const handleClose = async () => {
    if (modalRef.current && backdropRef.current) {
      await animateModalExit(modalRef.current, backdropRef.current);
    }
    setSelectedProduct(null);
    setQuantity(1);
    onClose();
  };

  const handleAddToCart = (qty) => {
    if (selectedProduct) {
      addToCart(selectedProduct, qty);
      
      // Animate the product item
      const productElement = productListRef.current?.querySelector(
        `[data-product-id="${selectedProduct.id}"]`
      );
      if (productElement) {
        animateAddToCart(productElement);
      }

      // Reset and close modal
      setTimeout(() => {
        setSelectedProduct(null);
        setQuantity(1);
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black opacity-0"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl shadow-2xl max-h-[90vh] w-full max-w-2xl overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-red-600 text-white p-6 flex justify-between items-center rounded-t-xl">
          <h2 className="text-2xl font-bold">{categoryName}</h2>
          <button
            onClick={handleClose}
            className="text-2xl hover:text-gray-200 transition"
          >
            ×
          </button>
        </div>

        {/* Content */}
        {!selectedProduct ? (
          <div ref={productListRef} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryProducts.map((product) => (
                <div
                  key={product.id}
                  data-product-id={product.id}
                  className="product-item border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-bold">
                        ₹{product.retail.price}/{product.retail.unit}
                      </span>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Product Detail View
          <div className="p-6">
            <button
              onClick={() => {
                setSelectedProduct(null);
                setQuantity(1);
              }}
              className="text-red-600 hover:text-red-700 mb-4 font-medium"
            >
              ← Back to Products
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 mb-2">Retail Price</p>
                  <p className="text-2xl font-bold text-red-600">
                    ₹{selectedProduct.retail.price}
                    <span className="text-sm text-gray-600">
                      /{selectedProduct.retail.unit}
                    </span>
                  </p>
                </div>

                {selectedProduct.wholesale && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-2">Wholesale Price</p>
                    <p className="text-xl font-bold text-blue-600">
                      ₹{selectedProduct.wholesale.price}
                      <span className="text-sm text-gray-600">
                        /{selectedProduct.wholesale.unit}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      (Minimum {selectedProduct.wholesale.minQty}{' '}
                      {selectedProduct.wholesale.unit})
                    </p>
                  </div>
                )}

                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
