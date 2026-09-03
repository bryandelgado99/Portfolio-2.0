import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/useLanguage";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {t.testimonials.heading} <span className="text-gradient-primary">{t.testimonials.headingAccent}</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t.testimonials.subtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
