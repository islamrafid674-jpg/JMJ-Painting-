import { motion } from 'motion/react';
import { Phone, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#fcfcfc]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.bankrate.com/brp/2025/03/17162426/Whats-the-difference-between-a-home-renovation-and-a-remodel.jpeg?auto=webp&optimize=high&crop=16:9"
          alt="Luxury home renovation"
          className="w-full h-full object-cover opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 text-primary mb-8"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary">Est. 2018</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl text-black leading-[1.05] mb-8 tracking-tight"
          >
            Bespoke Painting & <br className="hidden md:block" />
            <span className="text-primary italic pr-4">Architectural Finishes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-800 mb-12 max-w-2xl leading-relaxed font-normal"
          >
            Elevating estates with master craftsmanship. We provide premium interior and exterior painting services for the most discerning homeowners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-6 mb-16"
          >
            <a
              href="tel:9089066199"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-none font-medium tracking-widest uppercase text-sm transition-all duration-300 border border-primary hover:border-primary-dark"
            >
              <span>Request Consultation</span>
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-gray-900 hover:text-white text-gray-900 border border-gray-900 px-10 py-5 rounded-none font-medium tracking-widest uppercase text-sm transition-all duration-300"
            >
              <span>View Portfolio</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Featured In Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white/80 backdrop-blur-xl py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.3em] whitespace-nowrap">Recognized For Excellence</p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-serif text-xl md:text-2xl text-gray-900">Architectural Digest</span>
              <span className="font-serif text-xl md:text-2xl text-gray-900 italic">Dwell</span>
              <span className="font-serif text-xl md:text-2xl text-gray-900 tracking-widest">ELLE DECOR</span>
              <span className="font-serif text-xl md:text-2xl text-gray-900">HOUZZ</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
