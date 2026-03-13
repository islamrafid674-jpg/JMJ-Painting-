import { motion } from 'motion/react';
import { ShieldCheck, Award, ThumbsUp, Clock } from 'lucide-react';

const benefits = [
  {
    title: 'Fully Licensed & Insured',
    description: 'Complete peace of mind knowing your estate is protected and our work exceeds all local building codes.',
    icon: ShieldCheck,
  },
  {
    title: 'Heritage of Excellence',
    description: 'Since 2018, we have dedicated ourselves to the mastery of flawless tile installations and architectural remodels.',
    icon: Award,
  },
  {
    title: 'Master Artisans',
    description: 'Specialized expertise in handling the most delicate and premium materials, from imported ceramics to natural stone.',
    icon: ThumbsUp,
  },
  {
    title: 'White-Glove Service',
    description: 'We respect your time and property, communicating clearly and obsessing over the perfect, immaculate finish.',
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
                The JMJ Standard
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-8"
            >
              Uncompromising Quality & <span className="italic text-gray-500">Precision</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 mb-12 leading-relaxed font-light"
            >
              Discerning homeowners trust JMJ Home Remodeling because we treat every commission as a work of art. We combine the world's finest materials with meticulous, time-honored installation techniques to ensure your surfaces remain flawless for generations.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-none border border-primary/30 flex items-center justify-center bg-gray-50">
                    <benefit.icon className="text-primary" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="tel:9089066199"
                className="inline-flex items-center justify-center bg-[#0a0a0a] hover:bg-primary text-white px-10 py-5 font-medium tracking-widest uppercase text-sm transition-all duration-300"
              >
                Schedule A Consultation
              </a>
            </motion.div>
          </div>

          {/* Right Image & Testimonial Snippet */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-none overflow-hidden"
            >
              <img
                src="https://www.houseloanblog.net/wp-content/uploads/2018/02/How-to-find-a-qualified-contractor-that%E2%80%99s-worth-the-price.jpg"
                alt="JMJ Home Remodeling Craftsmanship"
                className="w-full h-auto object-cover aspect-[4/5] filter contrast-[1.05] brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-black/10 z-10 pointer-events-none"></div>
              
              {/* Floating Testimonial Snippet */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-8 -left-8 md:left-8 right-8 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 z-20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-gray-400">Verified Client</span>
                </div>
                <p className="font-serif text-gray-800 italic text-lg md:text-xl leading-relaxed">
                  "JMJ transformed our outdated space into a modern architectural oasis. Their attention to detail with the tile work was nothing short of extraordinary."
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-primary/20 -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
