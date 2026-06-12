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
    <div className="relative bg-[#f3dfd4] md:mt-6  md:px-20 px-2.5 z-20 w-full h-30 md:h-100 ">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative shadow-2xl shadow-black/90 rounded-lg w-full h-full cursor-grab active:cursor-grabbing"
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
              className="w-full h-full md:object-cover rounded-lg object-contain   "
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
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-white/50 hover:text-black  p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 " />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-white/50 hover:text-black  p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-3 h-3 md:w-6 md:h-6 " />
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

 
    </div>
  );
}