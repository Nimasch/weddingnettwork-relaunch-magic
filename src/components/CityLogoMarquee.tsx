import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cities = [
  { name: "Berlin", file: "berlin" },
  { name: "Hamburg", file: "hamburg" },
  { name: "Frankfurt", file: "frankfurt" },
  { name: "Köln", file: "koeln" },
  { name: "Düsseldorf", file: "duesseldorf" },
  { name: "Ruhrgebiet", file: "ruhrgebiet" },
  { name: "München", file: "muenchen" },
  { name: "Nürnberg", file: "nuernberg" },
  { name: "Saarbrücken", file: "saarbruecken" },
  { name: "Karlsruhe", file: "karlsruhe" },
];

const SCROLL_AMOUNT = 200;

const CityLogo = ({ name, file }: { name: string; file: string }) => (
  <div className="flex items-center justify-center shrink-0 px-4 sm:px-6 md:px-10">
    <img
      src={`/logos/city-${file}.jpg`}
      alt={`Wedding Nettwork ${name} – Logo`}
      className="h-12 sm:h-16 md:h-20 w-auto object-contain"
      loading="lazy"
    />
  </div>
);

const CityLogoMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPos = useRef(0);

  // Auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5; // px per frame

    const step = () => {
      if (!isPaused && !isHovered) {
        scrollPos.current += speed;
        // Reset seamlessly when half is scrolled
        if (scrollPos.current >= el.scrollWidth / 2) {
          scrollPos.current = 0;
        }
        el.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, isHovered]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    setIsPaused(true);
    const offset = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    el.scrollBy({ left: offset, behavior: "smooth" });
    // Resume auto-scroll after 3s
    setTimeout(() => {
      if (scrollRef.current) {
        scrollPos.current = scrollRef.current.scrollLeft;
      }
      setIsPaused(false);
    }, 3000);
  }, []);

  // Sync scrollPos on touch/manual scroll
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollPos.current = scrollRef.current.scrollLeft;
      }
      setIsPaused(false);
    }, 3000);
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Aktuelle Standorte des Wedding Nettworks"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Arrow buttons – visible on hover */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-plum/20 backdrop-blur-sm flex items-center justify-center text-plum hover:bg-plum/30 cursor-pointer"
          aria-label="Zurück scrollen"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-plum/20 backdrop-blur-sm flex items-center justify-center text-plum hover:bg-plum/30 cursor-pointer"
          aria-label="Weiter scrollen"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide py-3 sm:py-6 touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Duplicate for seamless loop */}
          {cities.map((city) => (
            <CityLogo key={`a-${city.file}`} name={city.name} file={city.file} />
          ))}
          {cities.map((city) => (
            <CityLogo key={`b-${city.file}`} name={city.name} file={city.file} />
          ))}
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm italic text-muted-foreground/60 font-body mt-1 sm:mt-2">
        Und bald auch auf Sylt &amp; Mallorca
      </p>
    </motion.div>
  );
};

export default CityLogoMarquee;
