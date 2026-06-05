import React from 'react';
import { CartProvider } from './itemSegments/Context/CartContext';
import { CategoriesSection } from './itemSegments/components/CategoriesSection';
import { CartSidebar } from './itemSegments/components/CartSidebar';



function HomeJunction() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
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
        </header>

        {/* Main Content */}
        <main>
          <CategoriesSection />
          {/* <BlogSection /> */}
        </main>

        {/* Cart Sidebar */}
        <CartSidebar />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">About Us</h3>
                <p className="text-gray-400 text-sm">
                  Premium farm-fresh meats delivered to your doorstep in 90 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Services</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Fast Delivery</li>
                  <li>Wholesale Pricing</li>
                  <li>Quality Guaranteed</li>
                  <li>24/7 Support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Contact</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>📞 1-800-MEAT</li>
                  <li>📧 info@freshmeats.com</li>
                  <li>📍 All Cities</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Fresh Meats Shop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default HomeJunction;
