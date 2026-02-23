import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-body"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist
                WeddingNettwork. Kontaktdaten werden nach dem Launch ergänzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p>
                Wenn Sie sich für unseren Newsletter anmelden, erheben wir Ihre
                E-Mail-Adresse. Diese wird ausschließlich dazu verwendet, Sie
                über den Launch von WeddingNettwork zu informieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Zweck der Datenverarbeitung
              </h2>
              <p>
                Ihre E-Mail-Adresse wird verwendet, um Ihnen Informationen zum
                Start unserer Plattform zuzusenden. Eine Weitergabe an Dritte
                erfolgt nicht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Rechtsgrundlage
              </h2>
              <p>
                Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                Einschränkung der Verarbeitung Ihrer Daten. Sie können Ihre
                Einwilligung jederzeit widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Kontakt
              </h2>
              <p>
                Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren.
                Kontaktdaten werden nach dem Launch ergänzt.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;
