// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export const useGSAPAnimation = () => {
//   // Hover effect for category cards
//   const animateCardHover = (element) => {
//     if (!element) return;

//     element.addEventListener('mouseenter', () => {
//       gsap.to(element, {
//         scale: 1.05,
//         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//     });

//     element.addEventListener('mouseleave', () => {
//       gsap.to(element, {
//         scale: 1,
//         boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//     });
//   };

//   // Modal entry animation
//   const animateModalEntry = (modalElement, backdropElement) => {
//     if (!modalElement || !backdropElement) return;

//     gsap.fromTo(
//       backdropElement,
//       { opacity: 0 },
//       { opacity: 1, duration: 0.3, ease: 'power2.out' }
//     );

//     gsap.fromTo(
//       modalElement,
//       {
//         opacity: 0,
//         y: 30,
//         scale: 0.95,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.4,
//         ease: 'back.out(1.2)',
//       }
//     );
//   };

//   // Modal exit animation
//   const animateModalExit = (modalElement, backdropElement) => {
//     if (!modalElement || !backdropElement) return;

//     return new Promise((resolve) => {
//       gsap.to(backdropElement, {
//         opacity: 0,
//         duration: 0.3,
//         ease: 'power2.in',
//       });

//       gsap.to(
//         modalElement,
//         {
//           opacity: 0,
//           y: 30,
//           scale: 0.95,
//           duration: 0.3,
//           ease: 'power2.in',
//           onComplete: resolve,
//         }
//       );
//     });
//   };

//   // Stagger animation for product list
//   const animateProductStagger = (productElements) => {
//     if (!productElements || productElements.length === 0) return;

//     gsap.fromTo(
//       productElements,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.4,
//         stagger: 0.1,
//         ease: 'power2.out',
//       }
//     );
//   };

//   // Add to cart pop animation
//   const animateAddToCart = (element) => {
//     if (!element) return;

//     gsap.fromTo(
//       element,
//       {
//         scale: 0.8,
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: 'back.out(1.5)',
//       }
//     );

//     // Pop effect after a delay
//     setTimeout(() => {
//       gsap.to(element, {
//         scale: 1.05,
//         duration: 0.2,
//         yoyo: true,
//         repeat: 1,
//         ease: 'power2.inOut',
//       });
//     }, 100);
//   };

//   // Cart item fade out
//   const animateRemoveItem = (element) => {
//     if (!element) return;

//     return new Promise((resolve) => {
//       gsap.to(element, {
//         opacity: 0,
//         x: 20,
//         duration: 0.3,
//         ease: 'power2.in',
//         onComplete: resolve,
//       });
//     });
//   };

//   // Number counter animation
//   const animateNumberChange = (element, from, to, duration = 0.5) => {
//     if (!element) return;

//     const obj = { value: from };
//     gsap.to(obj, {
//       value: to,
//       duration,
//       ease: 'power1.out',
//       onUpdate: () => {
//         element.textContent = Math.round(obj.value);
//       },
//     });
//   };

//   return {
//     animateCardHover,
//     animateModalEntry,
//     animateModalExit,
//     animateProductStagger,
//     animateAddToCart,
//     animateRemoveItem,
//     animateNumberChange,
//   };
// };


// successfully without any errors.




import { useCallback } from "react";
import gsap from "gsap";

export const useGSAPAnimation = () => {
  const animateCardHover = useCallback((element) => {
    if (!element) return;

    const enter = () => {
      gsap.killTweensOf(element);

      gsap.to(element, {
        scale: 1.03,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const leave = () => {
      gsap.killTweensOf(element);

      gsap.to(element, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", enter);
    element.addEventListener("mouseleave", leave);

    return () => {
      element.removeEventListener("mouseenter", enter);
      element.removeEventListener("mouseleave", leave);
    };
  }, []);

  const animateModalEntry = useCallback(
    (modalElement, backdropElement) => {
      if (!modalElement || !backdropElement) return;

      gsap.killTweensOf([modalElement, backdropElement]);

      const tl = gsap.timeline();

      tl.fromTo(
        backdropElement,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        }
      ).fromTo(
        modalElement,
        {
          opacity: 0,
          y: 20,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.1"
      );
    },
    []
  );

  const animateModalExit = useCallback(
    (modalElement, backdropElement) => {
      if (!modalElement || !backdropElement) {
        return Promise.resolve();
      }

      gsap.killTweensOf([modalElement, backdropElement]);

      return new Promise((resolve) => {
        const tl = gsap.timeline({
          onComplete: resolve,
        });

        tl.to(modalElement, {
          opacity: 0,
          y: 20,
          scale: 0.98,
          duration: 0.2,
          ease: "power2.in",
        }).to(
          backdropElement,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          "-=0.15"
        );
      });
    },
    []
  );

  const animateProductStagger = useCallback((elements) => {
    if (!elements?.length) return;

    gsap.killTweensOf(elements);

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, []);

  const animateAddToCart = useCallback((element) => {
    if (!element) return;

    gsap.killTweensOf(element);

    gsap.fromTo(
      element,
      {
        scale: 0.95,
      },
      {
        scale: 1.05,
        duration: 0.15,
        repeat: 1,
        yoyo: true,
        ease: "power2.out",
      }
    );
  }, []);

  const animateRemoveItem = useCallback((element) => {
    if (!element) return Promise.resolve();

    gsap.killTweensOf(element);

    return new Promise((resolve) => {
      gsap.to(element, {
        opacity: 0,
        x: 20,
        duration: 0.2,
        ease: "power2.in",
        onComplete: resolve,
      });
    });
  }, []);

  const animateNumberChange = useCallback(
    (element, from, to, duration = 0.3) => {
      if (!element) return;

      const counter = { value: from };

      gsap.to(counter, {
        value: to,
        duration,
        ease: "power1.out",
        onUpdate: () => {
          element.textContent = Math.round(counter.value);
        },
      });
    },
    []
  );

  return {
    animateCardHover,
    animateModalEntry,
    animateModalExit,
    animateProductStagger,
    animateAddToCart,
    animateRemoveItem,
    animateNumberChange,
  };
};