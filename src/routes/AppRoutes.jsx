import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";

import HomeJunction from "../HomeJunction.jsx";
import OrderSection from "../OrderSection.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/new" element={<HomeJunction />} />
          <Route path="/order" element={<OrderSection />} />
            {/* <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/sale" element={<HotSale />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />  */}
        </Routes>
    );
}
