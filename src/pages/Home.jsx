import React from "react";
import PosterSlider from "./componets/HomePosterSlider";
import MeatInfoAccordion from "./componets/MeatInfoAccordion";
import OrderSection from "../OrderSection";
// import WhatsNew from "./componets/WhatsNew";
// import HotSale from "./componets/HotSale";
// import Footer from "../components/layout/footer/Footer"
function Home() {


  return (
    <>
      <div className="offer-bar bg-yellow-800 text-black text-sm  md:py-2 md:mt-25 mt-20 overflow-hidden">
        <div className="offer-track">
          🔥 FRESH CHICKEN DAILY • 🐔 FARM FRESH CHICKEN • 🥩 PREMIUM MUTTON • 🐟 FRESH FISH ARRIVALS • 🚚 QUICK DELIVERY IN TIRUPUR • 📞 ORDER NOW +91 70944 29166 • 💥 SPECIAL OFFERS AVAILABLE • 🔥 FRESH CHICKEN DAILY • 🐔 FARM FRESH CHICKEN • 🥩 PREMIUM MUTTON • 🐟 FRESH FISH ARRIVALS • 🚚 QUICK DELIVERY IN TIRUPUR • 📞 ORDER NOW +91 70944 29166 •
        </div>
      </div>
      <PosterSlider />
      <OrderSection />
      <MeatInfoAccordion />














      {/* <section className="w-full h-full  bg-[#fcf5eb] flex items-start justify-center">

      </section> */}
      
      {/*   <WhatsNew />
      <HotSale /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;