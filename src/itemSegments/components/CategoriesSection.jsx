import React, { useRef, useEffect, useState } from 'react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import { categories } from '../data/products';
import { ProductModal } from '../components/ProductModal';

export const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoryRefs = useRef({});
  const { animateCardHover } = useGSAPAnimation();

  useEffect(() => {
    // Apply hover animations to all category cards
    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) {
        animateCardHover(ref);
      }
    });
  }, [animateCardHover]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="py-12 px-4  sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="md:text-start text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Explore by Category
            </h1>
            <p className="text-lg text-gray-600">
              Premium farm-fresh meats and seafood
            </p>
          </div>
          {/* Delivery Info */}
          <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-6 py-3 rounded-lg">
              <span className="text-3xl">🚚</span>
              <div>
                <p className="text-sm text-gray-600">Delivery in</p>
                <p className="text-xl font-bold text-red-600">90 Minutes</p>
              </div>
            </div>
          </div>


          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                ref={(el) => {
                  categoryRefs.current[category.id] = el;
                }}
                onClick={() => handleCategoryClick(category)}
                className="bg-[#467434]  rounded-lg  overflow-hidden cursor-pointer  hover:shadow-lg shadow-[20_4px_6px_-1px_rgba(0,0,0,0.1)] transition-shadow p-0 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain rounded-xl    transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 bg-[#467434] text-white text-center">
                  <h3 className="text-xl font-bold  mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <ProductModal
          categoryId={selectedCategory.id}
          categoryName={selectedCategory.name}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCategory(null);
          }}
        />
      )}
    </>
  );
};
