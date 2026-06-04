import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ✅ Import payment icons
import visa from "../../../../public/visa.svg";
import applelogo from "../../../../public/applelogo.svg";
import gp from "../../../../public/gp.svg";
import mastercard from "../../../../public/master card.svg"; // rename file if space exists
import paypal from "../../../../public/paypal.svg";

export default function Footer() {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // GSAP animation for entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-section", {
        y: 40,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });
      gsap.from(".footer-icons", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.8,
        stagger: 0.1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#fbe2a1] text-gray-900 py-12 opacity-95 px-8 md:px-20 font-sans"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="font-bold text-2xl text-black/60 mb-3 bebas">COMPANY INFO</h3>
          <ul className="space-y-2 text-xs momo">
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="footer-section">
          <h3 className="font-bold text-2xl text-black/60 bebas mb-3">HELP & SUPPORT</h3>
          <ul className="space-y-2 text-xs momo">
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              Shipping Policy
            </li>
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              Return Policy
            </li>
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-yellow-700 transition-all duration-200 cursor-pointer">
              Track Your Order
            </li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-section">
          <h3 className="font-bold text-2xl text-black/60 bebas mb-3">ABOUT CAPIVITY</h3>
          <p className="leading-relaxed text-xs momo">
            Discover the looks you want, from the brands you love, in the colors
            and sizes you need. We’re here to make fashion accessible and
            enjoyable for everyone. Join us on this stylish journey!
          </p>
        </div>

        {/* Sign Up */}
        <div className="footer-section">
          <h3 className="font-bold text-2xl text-black/60 bebas mb-3">SIGN UP</h3>
          <p className="text-xs momo mb-3">
            Subscribe to get exclusive offers and new arrivals first!
          </p>
          <div className="flex border border-gray-900 rounded-md overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 bebas outline-none bg-transparent"
            />
            <button className="bg-black text-white px-4 hover:bg-yellow-600 transition-all duration-300">
              →
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Payment Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 mb-4 footer-icons">
        <img src={visa} alt="Visa" className="h-6 p-1" />
        <img src={applelogo} alt="Apple Pay" className="h-7.5 p-1" />
        <img src={gp} alt="Google Pay" className="h-8 p-1" />
        <img src={mastercard} alt="MasterCard" className="h-8 p-1" />
        <img src={paypal} alt="PayPal" className="h-9 p-1" />
      </div>

      {/* Bottom Line */}
      <p className="opacity-80 mt-2 bebas tracking-widest text-center text-sm">
        &copy; {currentYear} Bpy creation. All rights reserved.
      </p>
    </footer>
  );
}
