import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
// import ProductPage from "../pages/ProductPage.jsx";
// import WhatsNew from "../pages/componets/WhatsNew.jsx";
// import HotSale from "../pages/componets/HotSale.jsx";
// import Trends from "../pages/Trends.jsx";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import ProductPage from "../pages/ProductPage";
// import Cart from "../pages/Cart";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/new" element={<WhatsNew />} />
       <Route path="/product/:id" element={<ProductPage />} />
     <Route path="/sale" element={<HotSale />} />
     <Route path="/trends" element={<Trends />} /> */}
            {/*    <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />  */}
        </Routes>
    );
}
