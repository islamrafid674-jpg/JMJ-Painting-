import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-500 py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-8">
              <img src="https://i.imgur.com/4Zdi81z.png" alt="JMJ Home Remodeling Logo" className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <p className="font-light text-sm leading-relaxed max-w-sm mb-10">
              Purveyors of fine architectural surfaces and bespoke tile installations. Elevating estates with uncompromising craftsmanship and white-glove service.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jmjhomeremodeling/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:jmjhomeremodelingllc@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300" aria-label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a href="tel:9089066199" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300" aria-label="Phone">
                <Phone size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-white text-xl mb-8 tracking-wide">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Expertise</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors duration-300">The JMJ Standard</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors duration-300">Curated Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors duration-300">Endorsements</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Private Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white text-xl mb-8 tracking-wide">Commissions</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>Bespoke Bathrooms</li>
              <li>Culinary Spaces</li>
              <li>Architectural Flooring</li>
              <li>Custom Mosaics</li>
              <li>Large Format Surfaces</li>
              <li>Restoration & Repair</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wider uppercase">
          <p>&copy; {currentYear} JMJ Home Remodeling LLC. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
