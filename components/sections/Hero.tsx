'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0  opacity-20" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4"
      >
        <motion.div
          variants={itemVariants}
          className="relative inline-block mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-magenta-400 to-green-400 animate-spin opacity-75 blur-sm" />
            <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
              <div className="text-6xl md:text-7xl">🚀</div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6"
        >
          <span className="text-white">Hola, soy</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-magenta-600 to-green-600 ">
            Sergio Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl font-poppins text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Desarrollador Full Stack especializado en crear experiencias digitales 
          <span className="text-cyan-400 font-bold"> innovadoras</span> y 
          <span className="text-cyan-400 "> futuristas</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-800 to-magenta-300 rounded-lg font-poppins font-semibold text-gray-200 cyber-border hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-cyan-400 rounded-lg font-poppins font-semibold text-cyan-400 hover:bg-cyan-400/10 neon-border transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contáctame
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: '#', color: 'hover:text-cyan-400' },
            { icon: Linkedin, href: '#', color: 'hover:text-magenta-400' },
            { icon: Mail, href: '#', color: 'hover:text-green-400' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-400 ${social.color} transition-colors duration-300 neon-glow`}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
      >
        <ChevronDown className="w-8 h-8 neon-glow" />
      </motion.div>
    </section>
  );
}