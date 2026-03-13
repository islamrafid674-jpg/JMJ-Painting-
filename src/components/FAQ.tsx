import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Are you licensed and insured for high-value properties?',
    answer: 'Yes, absolutely. JMJ Home Remodeling is fully licensed and carries comprehensive liability insurance specifically tailored for high-value estates and luxury renovations, ensuring complete protection for your property.',
  },
  {
    question: 'What is the timeline for a bespoke bathroom commission?',
    answer: 'A custom master bath commission typically requires 3 to 5 weeks, depending on the complexity of the design, custom tile fabrication, and material sourcing. We provide a precise schedule during our initial consultation to ensure minimal disruption.',
  },
  {
    question: 'Do you source exclusive materials, or do I provide them?',
    answer: 'We offer a full-service curation experience. We source exclusive, premium materials from our global network of trusted artisans and quarries. However, if you have already acquired specific architectural surfaces, our master installers are adept at working with client-provided materials.',
  },
  {
    question: 'How do I initiate a project consultation?',
    answer: 'We invite you to contact us via phone or our secure online form to schedule a private consultation. We will visit your estate, discuss your vision in detail, and present a comprehensive, transparent proposal.',
  },
  {
    question: 'Do you offer a warranty on your craftsmanship?',
    answer: 'Yes. We stand behind the uncompromising quality of our work with the JMJ Guarantee. Our installations are backed by a comprehensive warranty, ensuring your investment endures for generations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#fcfcfc] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
              Inquiries
            </span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4 mb-6"
          >
            Frequently Asked <span className="italic text-gray-400">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
              >
                <span className={`font-serif text-2xl pr-8 transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                  {faq.question}
                </span>
                <div className="flex-shrink-0 text-gray-400 group-hover:text-primary transition-colors duration-300">
                  {openIndex === index ? <Minus strokeWidth={1} size={24} /> : <Plus strokeWidth={1} size={24} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-500 leading-relaxed font-light text-lg pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
