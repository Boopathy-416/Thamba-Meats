import { useEffect, useRef } from "react";
import gsap from "gsap";

const MENU_ITEMS = [
  { label: "Shop", href: "/new" },
  { label: "Hot Sales", href: "/sale" },
  { label: "Our Meat", href: "/trends" },
  { label: "Order Online", href: "#videos" },
  { label: "Contact", href: "#equipment" },

];

export default function NavMenu() {
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (menuRef.current) {
      gsap.from(itemRefs.current, {
        opacity: 1,
        // y: -10,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
      });
    }
  }, []);

  return (
    <div ref={menuRef} className="hidden  md:flex items-center gap-8">
      {MENU_ITEMS.map((item, index) => (
        <a
          key={item.label}
          ref={(el) => (itemRefs.current[index] = el)}
          href={item.href}
          className="text-gray-200 text-gray-800 hover:text-red-600 transition-colors duration-300 text-md font-medium relative group"
        >
          {item.label}
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      ))}
    </div>
  );
}
 