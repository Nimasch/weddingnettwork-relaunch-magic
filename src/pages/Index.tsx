import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/wedding-nettwork-logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

type UserRole = "couple" | "vendor";

const Index = () => {
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState<UserRole>("couple");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    const { error } = await supabase
      .from("waitlist")
      .insert({ email, role: userRole });

    if (error) {
      toast({
        title: "Fehler",
        description: error.code === "23505"
          ? "Diese E-Mail ist bereits registriert."
          : "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
        variant: "destructive",
      });
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setEmail("");
    setUserRole("couple");
    setPrivacyAccepted(false);
    setSubmitting(false);
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
            className="flex flex-col items-center justify-center gap-3 py-6 px-6 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}>

              <Heart size={24} className="text-gold" fill="currentColor" />
              <span className="font-body text-foreground text-center leading-relaxed">
                Danke! Wir haben dich auf die Liste gesetzt und melden uns bald bei dir.
              </span>
            </motion.div> :

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Role pills */}
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setUserRole("couple")}
                  className={`px-6 py-2 rounded-full text-sm font-body font-bold transition-all duration-300 border ${
                    userRole === "couple"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  Ich bin ein Paar
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole("vendor")}
                  className={`px-6 py-2 rounded-full text-sm font-body font-bold transition-all duration-300 border ${
                    userRole === "vendor"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  Ich bin ein Dienstleister
                </button>
              </div>

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
                disabled={!privacyAccepted || submitting}
                className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-body font-bold tracking-wide hover:bg-plum-light transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? "Wird gesendet..." : "Benachrichtige mich"}
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
                  zu und möchte über den Launch informiert werden.
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