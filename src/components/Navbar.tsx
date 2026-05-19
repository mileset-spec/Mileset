import { motion } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center font-bold text-xs italic text-white">MT</div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">moment<span className="text-cyan-400">tech</span>ai</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors"
            >
              Book a Demo
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-white p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050505] border-b border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/60 hover:text-cyan-400 hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
