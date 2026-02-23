import { motion } from "framer-motion";

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
];

const CityLogo = ({ name, file }: { name: string; file: string }) => (
  <div className="flex items-center justify-center shrink-0 px-6 md:px-10">
    <img
      src={`/logos/city-${file}.jpeg`}
      alt={`Wedding Nettwork ${name} – Logo`}
      className="h-16 md:h-20 w-auto object-contain"
      loading="lazy"
    />
  </div>
);

const CityLogoMarquee = () => {
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

        {/* Two identical tracks side by side for seamless loop */}
        <div className="flex w-max animate-marquee group-hover:[animation-duration:60s] py-6">
          {cities.map((city) => (
            <CityLogo key={`a-${city.file}`} name={city.name} file={city.file} />
          ))}
          {cities.map((city) => (
            <CityLogo key={`b-${city.file}`} name={city.name} file={city.file} />
          ))}
        </div>
      </div>

      <p className="text-center text-sm italic text-muted-foreground/60 font-body mt-2">
        Und bald auch in Sylt &amp; Mallorca
      </p>
    </motion.div>
  );
};

export default CityLogoMarquee;
