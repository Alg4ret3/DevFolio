'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { loadSlim } from "tsparticles-slim"; // ✅ versión ligera de partículas
import { useCallback } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="relative py-12 px-4 border-t border-cyan-500/20 overflow-hidden">
  
      {/* Glow dinámico arriba */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400"
      />

      {/* Gradiente oscuro encima de partículas */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60 to-transparent" />

      {/* Contenido */}
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="inline-flex items-center mb-6">
            <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-400/30">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="font-orbitron text-lg font-bold text-white">{'<SM/>'}</span>
              <Zap className="w-5 h-5 text-magenta-400" />
            </div>
          </motion.div>

          {/* Links rápidos */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-400 text-sm font-poppins">
            <a href="#about" className="hover:text-cyan-400 transition">Sobre mí</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Proyectos</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contacto</a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Alg4ret3" target="_blank">
              <FaGithub className="text-2xl text-gray-300 hover:text-white transition" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sergio-mu%C3%B1oz-b75bba208/" target="_blank">
              <FaLinkedin className="text-2xl text-cyan-600 hover:text-cyan-400 transition" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href= "https://wa.me/573170098770" target="_blank">
              <FaWhatsapp className="text-2xl text-green-600 hover:text-green-400 transition" />
            </motion.a>
          </div>


          {/* Derechos */}
          <p className="mt-4 text-sm text-gray-500 font-poppins">
            &copy; {currentYear} Sergio Muñoz Developer. Todos los derechos reservados.
          </p>

          {/* Línea decorativa */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="mt-8 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </footer>
  );
}
