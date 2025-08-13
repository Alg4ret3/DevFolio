'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-cyan-500/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center mb-6"
          >
            <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-400/30 cyber-border">
              <Code className="w-5 h-5 text-cyan-400 neon-glow" />
              <span className="font-orbitron text-lg font-bold text-white">
                {'<Dev/>'}
              </span>
              <Zap className="w-5 h-5 text-magenta-400 neon-glow" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-poppins mb-4 flex items-center justify-center space-x-2"
          >
            <span>Hecho con</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.span>
            <span>y mucho código</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 font-poppins"
          >
            <p>&copy; {currentYear} Alex Developer. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#00FFFF' }}
                className="hover:text-cyan-400 transition-colors"
              >
                Privacidad
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#FF00FF' }}
                className="hover:text-magenta-400 transition-colors"
              >
                Términos
              </motion.a>
            </div>
          </motion.div>
          <p></p>

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