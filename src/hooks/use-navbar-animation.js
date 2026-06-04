// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function useNavbarAnimation() {
//   const navRef = useRef(null);

//   useEffect(() => {
//     if (navRef.current) {
//       // Slide down animation on mount
//       gsap.from(navRef.current, {
//         y: -80,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       });

//       // Hide on scroll down, show on scroll up
//       let lastScrollTop = 0;

//       const handleScroll = () => {
//         const scrollTop = window.scrollY;

//         if (scrollTop > lastScrollTop && scrollTop > 100) {
//           gsap.to(navRef.current, {
//             y: -80,
//             opacity: 0,
//             duration: 0.3,
//             pointerEvents: "none",
//           });
//         } else {
//           gsap.to(navRef.current, {
//             y: 0,
//             opacity: 1,
//             duration: 0.3,
//             pointerEvents: "auto",
//           });
//         }

//         lastScrollTop = scrollTop;
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return navRef;
// }


import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useNavbarAnimation() {
  const navRef = useRef(null);
  const lastScrollTop = useRef(0);
  const ticking = useRef(false);
  const isHidden = useRef(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Initial slide-down animation
    gsap.fromTo(
      nav,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    const handleScroll = () => {
      // Use requestAnimationFrame for better performance
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;

          if (scrollTop > lastScrollTop.current && scrollTop > 100) {
            // Scrolling down → hide navbar
            if (!isHidden.current) {
              gsap.to(nav, {
                y: -80,
                opacity: 0,
                duration: 0.35,
                ease: "power2.out",
                pointerEvents: "none",
              });
              isHidden.current = true;
            }
          } else {
            // Scrolling up → show navbar
            if (isHidden.current) {
              gsap.to(nav, {
                y: 0,
                opacity: 1,
                duration: 0.35,
                ease: "power2.out",
                pointerEvents: "auto",
              });
              isHidden.current = false;
            }
          }

          lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    // Use passive listener for scroll to improve performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return navRef;
}
