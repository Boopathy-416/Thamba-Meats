import React from 'react';
import { CartProvider } from './itemSegments/Context/CartContext';
import { CategoriesSection } from './itemSegments/components/CategoriesSection';
import { CartSidebar } from './itemSegments/components/CartSidebar';
import { motion } from "framer-motion";


function HomeJunction() {
  return (
    <CartProvider>
      <div className="min-h-screen md:py-16 py-8 bg-[#f3dfd4]">
        {/* Header */}
       
        {/* <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🥩</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Fresh Meats Shop
                  </h1>
                  <p className="text-sm text-gray-600">Premium Quality Meats</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">24/7 Customer Support</p>
                <p className="text-lg font-semibold text-red-600">📞 1-800-MEAT</p>
              </div>
            </div>
          </div>
        </header> */}

        {/* Main Content */}
        <main>
          <CategoriesSection />
          {/* <BlogSection /> */}
        </main>

        {/* Cart Sidebar */}
        <CartSidebar />

        {/* Footer */}
      
      </div>
    </CartProvider>
  );
}

export default HomeJunction;
