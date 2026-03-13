import { motion } from 'motion/react';
import { Bath, ChefHat, Grid, LayoutGrid, Palette, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Bespoke Bathrooms',
    description: 'Complete transformations featuring waterproof, durable, and stunning large-format or mosaic shower installations.',
    icon: Bath,
  },
  {
    title: 'Culinary Spaces',
    description: 'Elevate your kitchen design with precision-cut backsplashes that protect and serve as a focal point.',
    icon: ChefHat,
  },
  {
    title: 'Architectural Flooring',
    description: 'Durable and beautiful floor tiling for any room, ensuring a perfect level and long-lasting, seamless finish.',
    icon: Grid,
  },
  {
    title: 'Feature Walls',
    description: 'Accent walls and full-room tiling to add texture, color, and unparalleled sophistication to your estate.',
    icon: LayoutGrid,
  },
  {
    title: 'Custom Mosaics',
    description: 'Unique layouts including herringbone, chevron, and intricate custom patterns tailored to your exact style.',
    icon: Palette,
  },
  {
    title: 'Restoration',
    description: 'Restore the beauty of your existing luxury tile with professional regrouting, sealing, and repair services.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
                Our Disciplines
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight"
            >
              Mastery In Every <br className="hidden md:block" />
              <span className="italic text-gray-500">Detail & Surface</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-md font-light leading-relaxed"
          >
            We specialize in high-end tile installation and architectural remodeling, delivering flawless, museum-quality results for every commission.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] -z-10"></div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 border border-gray-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
              <div className="w-0 h-[1px] bg-primary mt-6 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-32 bg-[#0a0a0a] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">The JMJ Guarantee</h3>
            <p className="text-gray-400 text-lg max-w-2xl font-light">We stand behind our craftsmanship. If the final result does not meet our rigorous standards of perfection, we will refine it until it does. Your absolute satisfaction is our signature.</p>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <a
              href="tel:9089066199"
              className="inline-flex items-center justify-center bg-transparent hover:bg-primary text-white px-10 py-5 font-medium tracking-widest uppercase text-sm transition-all duration-300 border border-primary"
            >
              Request A Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
