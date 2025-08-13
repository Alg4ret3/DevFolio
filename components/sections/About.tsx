"use client";

import { motion, Variants } from "framer-motion";
import { Code, Zap, Rocket, Brain } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend", level: 95, color: "from-cyan-400 to-cyan-600" },
    { name: "Backend", level: 90, color: "from-red-400 to-red-600" },
    { name: "Mobile", level: 85, color: "from-green-400 to-green-600" },
    { name: "DevOps", level: 80, color: "from-yellow-400 to-yellow-600" },
  ];

  const technologies = [
    "React/Next.js",
    "React Native",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "UX / UI",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyan-400 font-semibold text-4xl tracking-wide relative">
              Sobre Mi
              <span className="absolute inset-0 -z-10 rounded-lg bg-cyan-500 opacity-20 blur-xl"></span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 cyber-border">
                  <div className="flex items-center mb-6">
                    <Brain className="w-8 h-8 text-cyan-400 mr-4 neon-glow" />
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      Mi Historia
                    </h3>
                  </div>

                  <p className="text-gray-300 font-poppins leading-relaxed mb-6">
                    Soy un desarrollador apasionado por crear soluciones
                    tecnológicas innovadoras, con más de 1 año de experiencia,
                    me especializo en el desarrollo de aplicaciones web y
                    móviles que combinan funcionalidad excepcional con diseños
                    futuristas.
                  </p>

                  <p className="text-gray-300 font-poppins leading-relaxed">
                    Mi enfoque se centra en la experiencia del usuario, la
                    performance y la implementación de las últimas tecnologías,
                    cada proyecto es una oportunidad para innovar y superar
                    expectativas.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      {
                        icon: Code,
                        label: "Codigo limpio",
                        color: "text-cyan-400",
                      },
                      {
                        icon: Zap,
                        label: "Performance",
                        color: "text-magenta-400",
                      },
                      {
                        icon: Rocket,
                        label: "Innovación",
                        color: "text-green-400",
                      },
                      {
                        icon: Brain,
                        label: "Analisis y solución",
                        color: "text-yellow-400",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-black/30 border border-gray-700 hover:border-current transition-colors"
                      >
                        <item.icon
                          className={`w-5 h-5 ${item.color} neon-glow`}
                        />
                        <span className="text-sm font-poppins text-gray-300">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-magenta-400 mr-3 neon-glow" />
                  Habilidades
                </h3>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-poppins text-gray-300">
                          {skill.name}
                        </span>
                        <span className="font-poppins text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotateZ: 2 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full border border-cyan-400/30 text-sm font-poppins text-cyan-300 hover:border-cyan-400 transition-colors neon-glow cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
