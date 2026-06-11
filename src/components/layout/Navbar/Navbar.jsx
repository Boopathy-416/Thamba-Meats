import { useState } from "react";
import {
  User,
  ShoppingCart,
  Menu,
  X,
  MapPin,
  Phone,
} from "lucide-react";


import NavLogo from "./nav-logo";
import NavMenu from "./nav-menu";
import MobileMenu from "./mobile-nav";

import useNavbarAnimation from "../../../hooks/use-navbar-animation";
import { useMediaQuery } from "../../../hooks/use-media-query";

import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import ShoppingCartModal from "./modals/ShoppingCartModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const handleLocationClick = () => {
    window.open("https://share.google/TxmVwvQT9LiwftZcG", "_blank");
  };
  // Auth & Cart Modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);



  const isMobile = useMediaQuery("(max-width: 768px)");
  const navbarRef = useNavbarAnimation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed rounded-b-4xl top-0 left-0 right-0 z-40 bg-[#F58F20] pt-3 border-b border-black/20 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <NavLogo />

            {!isMobile && (
              <>
                <NavMenu />

                <div className="flex items-center gap-4">



                  <a href="tel:+917094429166">
                    <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-medium text-sm hover:scale-105 transition-all duration-300">
                      <Phone className="w-4 h-4 phone-ring" />
                      Call Now
                    </button>
                  </a>
                  {/* LOCATION */}
                  <button
                    onClick={handleLocationClick}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg  border-2 bg-white border-white/10 hover:border-green-500/40 hover:bg-amber-100 duration-300 transition-all"
                  >
                    <MapPin className="w-4 h-4  text-blue-500" />
                    <span className="text-xs font-bold">Tirupur</span>
                  </button>

                  {/* Cart */}
                  <div
                    className="relative cursor-pointer"

                  >

                    <span className="absolute phone-ring  -left-10   md:w-50 md:h-20 flex items-start justify-center ">
                      <img src="https://ik.imagekit.io/bpycreations/sa.svg?updatedAt=1780547588370" width="auto"  alt=" price" />
                    </span>

                  </div>

                </div>
              </>
            )}
{/* ----------------------------------------------------------------------------------------------------------------- */}
            {isMobile && (
              <div className="flex items-center gap-4">
            
               
                  <a href="tel:+917094429166">
                    <button className=" lg:flex items-center gap-2 px-1 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium text-sm hover:scale-105 transition-all duration-300">
                      <Phone className="w-20 h-4  phone-ring" />
                   
                    </button>
                  </a>

                {/* Cart */}
                {/* <div
                  className="relative cursor-pointer"

                >

                  <span className="absolute -top-1 text-white text-xs  w-50  flex items-center justify-center">
                    <img src="public/sa.svg" width="160" height="auto" alt=" price" />
                  </span>

                </div> */}

                {/* Mobile Menu */}
                <button
                  onClick={toggleMenu}
                  className=" text-gray-900 transform-all  transition p-1 "
                >
                  {isOpen ? <X size={32} /> : <Menu size={34} />}
                </button>
              </div>
            )}
          </div>

          {isMobile && isOpen && (
            <MobileMenu onClose={() => setIsOpen(false)} />
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={switchToSignup}
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={switchToLogin}
      />

      {/* Cart Modal */}
      <ShoppingCartModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
      />
    </>
  );
}