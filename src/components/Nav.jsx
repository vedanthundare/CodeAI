import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "/Group.png";
import { useLocation } from "react-router-dom";

const menuItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/teams", label: "TEAM" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const glowEffectStyle = {
    boxShadow: "0px 0px 10px 2px rgba(236, 39, 213, 0.5)",
  };

  const handleJoinUsClick = () => {
    window.location.href = "https://forms.gle/F21W6DfNRv4ULwRL6";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-90 bg-[#04021a] text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="h-12 w-20 py-5">
              <img src={logo} alt="Logo" className="h-8" />
            </div>
          </motion.div>
          <div className="hidden md:block">
            <ul className="flex space-x-8 uppercase text-sm">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 2 }}
                >
                  <motion.a
                    href={item.href}
                    className={`font-custom px-4 py-2 border-2 
                      ${item.href === currentPath ? 'border-[#EC27D5]' : 'border-transparent'} 
                      text-xs hover:border-white rounded-full transition-all cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.button
            className="hidden md:block font-custom border border-[#EC27D5] px-6 py-2 rounded-full hover:bg-[#EC27D5] transition text-xs"
            style={glowEffectStyle}
            whileHover={{ scale: 1.05, backgroundColor: "#EC27D5" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menuItems.length * 0.01, duration: [0.2] }}
            onClick={handleJoinUsClick}
          >
            Join Us
          </motion.button>
          <div className="h-12 py-1 md:hidden">
            <motion.button
              className="md:hidden text-white p-5 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-24 bg-[#04021a] bg-opacity-95 backdrop-blur-lg md:hidden font-custom"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col bg-[#04021a] h-screen items-center space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`text-gray-300 hover:text-white text-[0.9rem] px-4 py-2 
                    ${item.href === currentPath ? 'text-white border border-[#EC27D5]' : ''}
                    rounded-full w-[80%] z-1000 text-center`}
                  variants={menuItemVariants}
                  custom={index}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                className="bg-purple-600 text-white px-8 py-3 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
                whileTap={{ scale: 0.95 }}
                variants={menuItemVariants}
                custom={4}
                transition={{ delay: menuItems.length * 0.01, duration: 1 }}
                style={glowEffectStyle}
                onClick={handleJoinUsClick}
              >
                Join Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
