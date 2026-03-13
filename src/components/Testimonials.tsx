import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Edison, NJ',
    feedback: 'JMJ executed a master bathroom renovation that exceeded our highest expectations. The custom marble mosaic work is nothing short of breathtaking. Their artisans are true masters of their craft.',
  },
  {
    name: 'David R.',
    location: 'Bridgewater, NJ',
    feedback: 'We commissioned JMJ for a complete architectural flooring overhaul in our estate. The precision, the material curation, and the white-glove service were impeccable from concept to completion.',
  },
  {
    name: 'Emily T.',
    location: 'Princeton, NJ',
    feedback: 'An absolute pleasure to work with. They transformed our culinary space with a bespoke backsplash that serves as the centerpiece of the room. Uncompromising quality and professionalism.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle Luxury Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
              Client Endorsements
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
            Words From Our <span className="italic text-gray-500">Clients</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="bg-[#111] p-10 border border-white/10 relative group hover:border-primary/50 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors duration-500" size={64} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={16} />
                ))}
              </div>
              
              <p className="font-serif text-xl text-gray-300 italic mb-10 relative z-10 leading-relaxed">
                "{testimonial.feedback}"
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary font-serif text-xl border border-white/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white tracking-wide">{testimonial.name}</h4>
                  <p className="text-xs text-primary uppercase tracking-widest mt-1">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
