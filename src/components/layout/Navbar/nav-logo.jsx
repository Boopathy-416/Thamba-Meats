
import { useEffect, useRef } from "react";
import gsap from "gsap";
import navlogo from "../../../../public/up.svg";
import logo from "../../../../public/redc.svg";
export default function NavLogo() {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        opacity: 1,
        // x: -30,
        duration: 0.6,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div ref={logoRef} className="shrink-1 flex items-center">

      {/* <a
        style={{ fontFamily: "LOK" }}
        href="/"
        className="text-xl md:text-2xl momo transition-all duration-500"
      >
        thumbameats
      </a> */}
      <img
        src={logo}
        alt="Thamba Meats Logo"
        className="w-50 md:w-60 h-auto  md:h-20 object-cover  "
      />

    </div>
  );
}
