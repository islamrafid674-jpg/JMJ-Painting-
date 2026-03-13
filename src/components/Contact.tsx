import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#111] text-white relative overflow-hidden">
      {/* Subtle Luxury Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Content - Contact Info */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
                Private Consultation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-8 leading-tight"
            >
              Commission Your <span className="italic text-gray-500">Masterpiece</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-12 leading-relaxed font-light"
            >
              We invite discerning clients to discuss their architectural visions. Contact JMJ Home Remodeling to schedule a private consultation and explore the possibilities for your estate.
            </motion.p>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors duration-500">
                  <Phone className="text-primary" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-white">Direct Line</h4>
                  <p className="text-gray-500 mb-2 font-light text-sm">Available Mon-Sat, 8am - 6pm</p>
                  <a href="tel:9089066199" className="text-primary hover:text-white text-lg tracking-wider transition-colors duration-300">
                    (908) 906-6199
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors duration-500">
                  <Mail className="text-primary" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-white">Electronic Mail</h4>
                  <p className="text-gray-500 mb-2 font-light text-sm">Expect a response within 24 hours</p>
                  <a href="mailto:jmjhomeremodelingllc@gmail.com" className="text-primary hover:text-white text-lg transition-colors duration-300 break-all">
                    jmjhomeremodelingllc@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors duration-500">
                  <Instagram className="text-primary" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-white">Portfolio</h4>
                  <p className="text-gray-500 mb-2 font-light text-sm">View our latest commissions</p>
                  <a href="https://www.instagram.com/jmjhomeremodeling/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white text-lg transition-colors duration-300">
                    @jmjhomeremodeling
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0a] border border-white/5 p-10 md:p-14 relative"
            >
              <h3 className="font-serif text-3xl text-white mb-8">Submit An Inquiry</h3>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-primary outline-none transition-colors text-white font-light"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-primary outline-none transition-colors text-white font-light"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-primary outline-none transition-colors text-white font-light"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">Service of Interest</label>
                  <select
                    id="service"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-primary outline-none transition-colors text-white font-light appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0a] text-gray-500">Select a service...</option>
                    <option value="bathroom" className="bg-[#0a0a0a]">Bespoke Bathrooms</option>
                    <option value="kitchen" className="bg-[#0a0a0a]">Culinary Spaces</option>
                    <option value="floor" className="bg-[#0a0a0a]">Architectural Flooring</option>
                    <option value="wall" className="bg-[#0a0a0a]">Custom Mosaics</option>
                    <option value="other" className="bg-[#0a0a0a]">Other Commission</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-primary outline-none transition-colors text-white font-light resize-none"
                    placeholder="Describe your vision..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-transparent hover:bg-white/5 border border-white/30 text-white py-5 transition-all duration-300 flex items-center justify-center gap-3 mt-4 group"
                >
                  <span className="font-medium tracking-widest uppercase text-sm">Request Consultation</span>
                  <Send size={16} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-center text-xs text-gray-600 mt-6 font-light">
                  Your information is held in strict confidence.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
