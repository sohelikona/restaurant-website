
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Backdrop for mobile menu - placed outside nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className="w-full px-4 sm:px-6 py-4 flex justify-between items-center z-50 relative border-b border-white/10">
        {/* Logo */}
        <motion.div 
          className="text-xl font-semibold text-white"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          Kofeo
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium text-sm">
          {["Story", "Reservation", "Gallery", "Blogs", "Contact us"].map((item) => (
            <motion.li key={item}
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#" className="hover:text-gray-300 transition-colors">{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              className="h-0.5 w-full bg-white block"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-full bg-white block"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.span
              className="h-0.5 w-full bg-white block"
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.button>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="w-full md:hidden absolute top-full left-0 z-50 text-white items-center text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col py-4 px-6 bg-white/5">
                {["Story", "Reservation", "Gallery", "Blogs", "Contact us"].map((item) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href="#" 
                      className="block hover:bg-white/10 px-4 py-3 rounded-lg text-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <motion.button 
          className="hidden md:block px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-sm text-sm"
          whileHover={{ y: -2 }}
          whileTap={{ y: 1 }}
          transition={{ duration: 0.2 }}
        >
          Our Menu
        </motion.button>
      </nav>
    </div>
  );
};

export default Navbar;