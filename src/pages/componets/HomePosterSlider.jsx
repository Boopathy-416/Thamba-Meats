// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";




// export default function PosterSlider() {
//   const [current, setCurrent] = useState(0);
//   const containerRef = useRef(null);
//   const intervalRef = useRef(null);

//   // GSAP slide animation
//   const goToSlide = (index) => {
//     const slides = containerRef.current.children;
//     const total = slides.length;
//     const next = (index + total) % total;

//     gsap.to(slides, {
//       xPercent: -100 * next,
//       duration: 2.2,
//       ease: "power3.inOut",
//     });

//     setCurrent(next);
//   };

//   // Auto-play every 3s
//   useEffect(() => {
//     intervalRef.current = setInterval(() => goToSlide(current + 1), 3000);
//     return () => clearInterval(intervalRef.current);
//   }, [current]);

//   // Hover zones
//   const handleHover = (direction) => {
//     clearInterval(intervalRef.current);
//     goToSlide(current + direction);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden rounded-2xl shadow-lg">
//       {/* Slides */}
//       <div ref={containerRef} className="flex w-full h-full">

//       </div>
//       {/* Center Overlay Content */}
//       <div className="absolute inset-0 flex flex-col pointer-events-none items-center justify-center text-center text-white px-4 bg-black/40 backdrop-blur-[1px]">
//         <h1 className="text-6xl md:w-1/2 md:text-7xl font-semibold mb-4 bebas  leading-tighter tracking-tight">
//           We give women the confidence to live life fully.
//         </h1>
//         <p className="text-lg md:text-xl leading-tighter font-thin mb-6">
//           We create <span className="mask-l-from-neutral-900 text-pink-300">makeup</span> that
//           inspires.
//         </p>
//         <button className="border bg-[#ff9531] border-white border-b-4 px-7 py-1.5 rounded-full text-lg bebas tracking-widest text-black transition-all duration-300">
//           Shop Now
//         </button>

//         {/* Arrow */}
//         {/* <div className="mt-8 animate-bounce text-2xl">⬇️</div> */}
//       </div>
//       {/* Hover Controls */}
//       <div
//         className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-10"
//         onMouseEnter={() => handleHover(-1)}
//       />
//       <div
//         className="absolute top-0 right-0 w-1/2 h-full cursor-pointer z-10"
//         onMouseEnter={() => handleHover(1)}
//       />

//       {/* Dots */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
       
//       </div>
//     </div>
//   );
// }




import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://ik.imagekit.io/bpycreations/main%201.svg?updatedAt=1780547598042",
    // gradient: "from-red-600/40 to-orange-500/40",
    
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/bpycreations/main%202.svg?updatedAt=1780547626466",
    // gradient: "from-amber-600/40 to-yellow-500/40",
    
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/bpycreations/main%203.svg?updatedAt=1780547634022",
    // gradient: "from-rose-600/40 to-pink-500/40",
    
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/bpycreations/main%204.svg?updatedAt=1780547607208",
    // gradient: "from-orange-600/40 to-red-500/40",
    
  },
//   {
//     id: 5,
//     image:
//       "/public/main 1.svg",
//     // gradient: "from-yellow-600/40 to-amber-500/40",
    
//   },
];

export default function PosterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlay || isDragging) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, isDragging]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    pauseAutoPlay();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    pauseAutoPlay();
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  // Drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(x);
    setCurrentX(x);
    setIsAutoPlay(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setCurrentX(x);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    const diff = startX - currentX;
    const threshold = 40;

    if (Math.abs(diff) > threshold) {
      diff > 0 ? handleNext() : handlePrev();
    }

    setCurrentX(0);
    pauseAutoPlay();
  };

  return (
    <div className="relative md:mt-6  md:px-5 px-2.5 z-20 w-full h-30 md:h-100 ">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full md:object-cover object-contain rounded-lg  "
              draggable={false}
            />

            {/* Gradient */}
            {/* <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
            /> */}

            {/* Content */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                {slide.title}
              </h2>
            </div> */}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute md:bottom-8 bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8 h-2"
                : "bg-white/50 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute md:top-6 md:right-6 top-3 right-3 md:text-xs text-[4px] text-white bg-black/30 md:px-4 md:py-2 px-1.5 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}