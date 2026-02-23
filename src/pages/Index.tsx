import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "@/assets/wedding-nettwork-logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setPrivacyAccepted(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-gold-light opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>

        <Heart size={40} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-16 text-gold-light opacity-15"
        animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>

        <Heart size={28} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 text-gold opacity-10"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>

        <Heart size={20} fill="currentColor" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-2xl mx-auto text-center">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="WeddingNettwork Logo"
          className="w-56 md:w-72 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} />


        {/* Divider */}
        <motion.div
          className="w-24 h-px bg-gold mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }} />


        {/* Heading */}
        <motion.h1
          className="font-display text-3xl font-semibold text-foreground mb-4 leading-tight md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>

          Hochzeitsplanung. Neu gedacht.
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground mb-3 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}>

          Wir beenden die komplizierte Suche. WeddingNettwork vernetzt die besten Köpfe der Branche direkt mit den glücklichsten Paaren – einfacher, schneller und inspirierender als je zuvor.
        </motion.p>

        <motion.p
          className="font-display italic text-secondary text-base md:text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}>

          ​Sei als Erster dabei, wenn wir live gehen!
        </motion.p>

        {/* Email signup */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}>

          {submitted ?
          <motion.div
            className="flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}>

              <Heart size={18} className="text-gold" fill="currentColor" />
              <span className="font-body text-foreground">
                Vielen Dank! Wir melden uns bei dir.
              </span>
            </motion.div> :

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all" />

                <button
                type="submit"
                disabled={!privacyAccepted}
                className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-body font-bold tracking-wide hover:bg-plum-light transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">

                  Benachrichtige mich
                </button>
              </div>
              <label className="flex items-start gap-2 cursor-pointer text-left">
                <Checkbox
                checked={privacyAccepted}
                onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                className="mt-0.5" />

                <span className="text-sm text-muted-foreground font-body">
                  Ich stimme der{" "}
                  <Link to="/datenschutz" className="text-gold underline hover:text-gold-light transition-colors">
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </span>
              </label>
            </form>
          }
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="mt-16 text-xs text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}>

          © {new Date().getFullYear()} WeddingNettwork. Alle Rechte vorbehalten.
        </motion.p>
      </div>
    </div>);

};

export default Index;