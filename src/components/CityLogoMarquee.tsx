import { motion } from "framer-motion";

const cities = [
  { name: "Berlin", file: "berlin" },
  { name: "Hamburg", file: "hamburg" },
  { name: "Frankfurt", file: "frankfurt" },
  { name: "Köln", file: "koeln" },
  { name: "Bonn", file: "bonn" },
  { name: "Düsseldorf", file: "duesseldorf" },
  { name: "Ruhrgebiet", file: "ruhrgebiet" },
  { name: "Karlsruhe", file: "karlsruhe" },
  { name: "München", file: "muenchen" },
  { name: "Stuttgart", file: "stuttgart" },
];

const CityLogo = ({ name, file }: { name: string; file: string }) => (
  <div className="flex flex-col items-center justify-center mx-8 md:mx-12 shrink-0">
    <img
      src={`/logos/city-${file}.svg`}
      alt={`Wedding Nettwork ${name} – Logo`}
      className="h-10 md:h-14 w-auto object-contain"
      style={{ filter: "grayscale(100%) brightness(0.3)" }}
    />
    <span className="mt-2 text-xs font-body text-primary/60 tracking-widest uppercase">
      {name}
    </span>
  </div>
);

const CityLogoMarquee = () => {
  const items = [...cities, ...cities];

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div
        className="overflow-hidden relative group"
        aria-label="Aktuelle Standorte des Wedding Nettworks"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex items-center py-6 animate-marquee group-hover:[animation-duration:60s]"
        >
          {items.map((city, i) => (
            <CityLogo key={`${city.file}-${i}`} name={city.name} file={city.file} />
          ))}
        </div>
      </div>

      <p className="text-center text-sm italic text-muted-foreground/60 font-body mt-2">
        Und bald auch in Nürnberg, Sylt &amp; Mallorca
      </p>
    </motion.div>
  );
};

export default CityLogoMarquee;
