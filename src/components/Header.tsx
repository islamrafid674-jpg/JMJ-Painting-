import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'The Standard', href: '#why-us' },
    { name: 'Gallery', href: '#portfolio' },
    { name: 'Endorsements', href: '#testimonials' },
    { name: 'Inquiries', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50">
          <img src="https://i.imgur.com/4Zdi81z.png" alt="JMJ Painting Logo" className={`h-12 w-auto object-contain transition-all duration-500 opacity-100`} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-primary' : 'text-gray-800 hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:9089066199"
            className={`flex items-center gap-3 border px-6 py-3 font-medium tracking-widest uppercase text-xs transition-all duration-300 ${
              isScrolled 
                ? 'border-gray-200 hover:border-primary text-gray-900 hover:text-primary' 
                : 'border-gray-900 hover:border-primary text-gray-900 hover:text-primary'
            }`}
          >
            <Phone size={14} />
            <span>(908) 906-6199</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 z-50 transition-colors text-gray-900`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 font-serif text-3xl hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-[1px] bg-gray-200 my-8"></div>
              <a
                href="tel:9089066199"
                className="flex items-center justify-center gap-3 border border-gray-900 text-gray-900 px-8 py-4 font-medium tracking-widest uppercase text-sm w-full max-w-xs hover:bg-gray-900 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>Call (908) 906-6199</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
