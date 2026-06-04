import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";



const SOCIAL_LINKS = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/mr.chevrolet_46",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
    label: "YouTube",
    color: "hover:text-red-600",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com",
    label: "Twitter",
    color: "hover:text-sky-500",
  },
  {
    icon: FaThreads,
    href: "https://threads.net",
    label: "Threads",
    color: "hover:text-black",
  },
  {
    icon: MdEmail,
    href: "mailto:your@email.com",
    label: "Email",
    color: "hover:text-amber-500",
  },
];

const MENU_ITEMS = [
  { label: "Shop", href: "/new" },
  { label: "Hot Sales", href: "/sale" },
  { label: "Our Meat", href: "/trends" },
  { label: "Order Online", href: "#videos" },
  { label: "Contact", href: "#equipment" },

];

export default function MobileMenu({ onClose }) {
  const containerRef = useRef(null);
  const menuItemRefs = useRef([]);
  const socialRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, { opacity: 1, duration: 0.1 });

      gsap.from(menuItemRefs.current, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.08,
        delay: 0.1,
      });

      gsap.from(socialRefs.current, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.05,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:hidden p-1 z-50 tracking-widest  w-full"
    >
      {/* Menu Items */}
      <div className="px-4 py-5 space-y-2">
        {MENU_ITEMS.map((item, index) => (
          <a
            key={item.label}
            ref={(el) => (menuItemRefs.current[index] = el)}
            href={item.href}
            onClick={onClose}
            className="block py-3 text-lg font-semibold text-black relative group overflow-hidden"
          >
            {item.label}

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-amber-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      <div className="h-px bg-gray-300 dark:bg-gray-700" />

      {/* Social Links */}
      <div className="px-4 py-6 flex justify-center gap-4 flex-wrap">
      {SOCIAL_LINKS.map((social, index) => {
  const Icon = social.icon;

  return (
    <a
      key={social.label}
      ref={(el) => (socialRefs.current[index] = el)}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-3 rounded-full
        bg-white
        shadow-md
        hover:scale-110
        transition-all duration-300
        ${social.color}
      `}
    >
      <Icon size={18} />
    </a>
  );
})}
      </div>
    </div>
  );
}
