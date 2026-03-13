import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Private Consultation',
    description: 'We begin with an in-depth discussion to understand your architectural vision, lifestyle requirements, and design preferences.',
  },
  {
    number: '02',
    title: 'Bespoke Design & Curation',
    description: 'Our team curates a selection of premium materials and presents a detailed, transparent proposal tailored to your estate.',
  },
  {
    number: '03',
    title: 'Master Installation',
    description: 'Our master artisans execute the installation with uncompromising precision, ensuring minimal disruption to your daily life.',
  },
  {
    number: '04',
    title: 'The Final Reveal',
    description: 'A meticulous walkthrough to ensure every grout line and surface meets the rigorous JMJ standard of perfection.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
              The Commission Process
            </span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6"
          >
            From Vision To <span className="italic text-gray-500">Reality</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] flex items-center justify-center mb-8 border border-white/20 group-hover:border-primary transition-colors duration-500">
                <span className="font-serif text-2xl text-primary">{step.number}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <a
            href="tel:9089066199"
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white px-10 py-5 font-medium tracking-widest uppercase text-sm transition-all duration-300 border border-white/30"
          >
            Initiate A Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
