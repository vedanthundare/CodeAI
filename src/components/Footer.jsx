import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Github, Instagram, MessageCircle, Send } from "lucide-react";
import Logo from "/new logo 1.png";
import Arrow from "/Frame (11).png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id, path) => {
    if (window.location.pathname === path) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
        }
      }, 500);
    }
  };

  const handleSubscribe = () => {
    window.location.href = "mailto:code.ai@somaiya.edu";
  };

  const socialIcons = [
    { Icon: Linkedin, href: "https://www.linkedin.com/company/88065374/admin/dashboard/" },
    { Icon: Youtube, href: "https://www.youtube.com/@CodeAI-e9u" },
    { Icon: Github, href: "https://github.com/CodeAI-KJSIT" },
    { Icon: Instagram, href: "https://www.instagram.com/codeai_kjsit/" },
    { Icon: MessageCircle, href: "https://chat.whatsapp.com/LwqHKOaM3xPL9504WWD1iz" },
  ];

  return (
    <footer className="py-12 relative overflow-hidden before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-[20%] lg:before:h-[50%] before:w-full before:bg-gradient-to-b before:from-transparent before:to-[#40368f] before:opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-default">
        <div className="flex flex-col lg:flex-row items-center w-full justify-center font-custom2">
          <div className="w-1/2 lg:mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}>
              <h3 className="text-white text-center text-xl lg:text-lg font-light mb-5 lg:mb-10 lg:ml-5">Subscribe to our newsletter</h3>
              <div className="relative lg:flex lg:justify-center">
                <div className="flex items-center bg-[#0A0118] rounded-full shadow-[0_0_15px_5px_rgba(186,104,200,0.3)]">
                  <motion.input type="email" placeholder="Enter Email ID" className="w-full text-center lg:w-64 bg-transparent text-white rounded-full py-2 px-4 focus:outline-none" whileFocus={{ scale: 1.02 }} transition={{ duration: 1 }} />
                  <motion.button onClick={handleSubscribe} className="bg-purple-500 hover:bg-purple-700 text-white rounded-full p-2 ml-2 transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Send className="h-5 w-5" />
                  </motion.button>
                </div>
                <motion.div className="hidden lg:block absolute -top-20 right-16 text-pink-500" animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <img src={Arrow} className="h-16 w-28" alt="Arrow" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start items-center text-center mt-10 gap-10 w-1/2 justify-around">
            {[
              { title: "BROWSE", links: [{ name: "Home", id: "home", path: "/" }, { name: "About Us", id: "about", path: "/about" }, { name: "Team", id: "teams", path: "/teams" }] },
              { title: "TEAM", links: [{ name: "Core", id: "core", path: "/teams" }, { name: "Subcore", id: "subcore", path: "/teams" }, { name: "Members", id: "teams", path: "/teams" }] },
            ].map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: i * 0.5 }} viewport={{ once: true }}>
                <h3 className="text-white text-3xl lg:text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <button onClick={() => scrollToSection(link.id, link.path)} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} className="flex flex-col justify-center items-center">
              <h3 className="text-white text-3xl lg:text-lg font-semibold mb-4">SOCIALS</h3>
              <div className="flex lg:flex-col lg:space-x-0 lg:space-y-4 space-x-4">
                {socialIcons.map(({ Icon, href }, index) => (
                  <motion.a key={index} href={href} className="text-gray-400 hover:text-white" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div className="flex justify-center align-center" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}>
          <img src={Logo} className="h-[40vw] w-[80vw] lg:h-[20vw] lg:w-[60vw]" alt="Logo" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
