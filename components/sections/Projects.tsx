"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import Image from "next/image";
import { title } from "node:process";

export default function Projects() {
  const projects = [
    {
      title: "Systock",
      description:
        "Sistema de ventas tipo POS diseñado para locales comerciales. Incluye gestión de inventario, control de facturación y reportes en tiempo real. Compatible con Windows 10 y 11.",
      image:
        "https://images.pexels.com/photos/6612717/pexels-photo-6612717.jpeg?auto=compress&cs=tinysrgb&dpr=1&?w=662&h=372",

      tech: ["Python", "Qt Designer", "SQL", "SQLite", "Windows 10/11"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alg4ret3/SystemSystock.git",
      featured: true,
    },

    {
      title: "Fundación Campaes",
      description:
        "Sitio web tipo landing page para una fundación dedicada a brindar apoyo y recursos a comunidades vulnerables. Presenta información sobre sus programas, eventos y formas de colaborar.",
      image:
        "https://images.pexels.com/photos/35360297/pexels-photo-35360297.jpeg?auto=compress&cs=tinysrgb&dpr=1&?w=662&h=372",
      tech: ["Vite", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
      liveUrl: "#https://www.funpazyesperanza.org/",
      githubUrl: "https://github.com/Alg4ret3/FundacionCampaes.git",
      featured: true,
    },

    {
      title: "VisionTreePasto AI" ,
      description:
        "Plataforma web de inteligencia artificial para la identificación de especies de árboles a partir de imágenes, Integra un modelo entrenado con Detectron2 y desplegado en FastAPI, con frontend en Next.js/React y base de datos en Supabase.",
      image:
        "https://images.pexels.com/photos/17484901/pexels-photo-17484901.png?auto=compress&cs=tinysrgb&dpr=1&?w=662&h=372",

      tech: [
        "Python",
        "Machine Learning",
        "Detectron2",
        "FastAPI",
        "Next.js",
        "React",
        "TypeScript",
        "Supabase (PostgreSQL)",
      ],
      liveUrl: "https://www.visiontreepasto.com",
      githubUrl: "https://github.com/Alg4ret3/VisionTreeSystem.git",
      featured: true,
    },
    {
      title: "TuplaCore Web",
      description:
        "Página principal de nuestro emprendimiento de desarrollo web, funciona como punto de contacto para clientes y colaboradores, mostrando nuestra visión, servicios y la forma en que trabajamos como equipo. Integra consumo de APIs de Gmail para la comunicación y está construida con tecnologías modernas del ecosistema web.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=1&?w=662&h=372",
      tech: ["Next.js", "React", "TypeScript", "JavaScript", "Gmail API"],
      liveUrl: "https://tuplacore.vercel.app",
      githubUrl: "https://github.com/Alg4ret3/TuplaCoreWeb.git",
      featured: true,
    },

    {
      title: "FitManage",
      description:
        "Plataforma web para la gestión de gimnasios que permite a los usuarios registrarse, iniciar sesión, consultar el estado de sus membresías y acceder a planes de entrenamiento personalizados, incluye un panel administrativo para el control de suscripciones y rutinas.",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=1&?w=662&h=372",
      tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://powergym-gamma.vercel.app/",
      githubUrl: "https://github.com/Alg4ret3/FitManage.git",
      featured: false,
    },
    {
      title: "FarmaSystem",
      description:
        "Landing page para una droguería con un asistente virtual integrado basado en IA, el sistema permite a los usuarios realizar consultas sobre salud a través de un agente conversacional conectado a la API de ChatGPT, ofreciendo respuestas en tiempo real de manera confiable y accesible.",
      image:
        "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=1&?w=662&h=372",
      tech: ["React", "JavaScript", "Python", "FastAPI", "OpenAI API"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alg4ret3/FarmaSystem.git",
      featured: false,
    },

    {
      title: "System Corponariño",
      description:
        "Sistema corporativo desarrollado para unificar y digitalizar cuatro módulos relacionados con la concesión de aguas, anteriormente, los procesos se manejaban de forma física, por lo que este sistema buscó automatizar la gestión y centralizar la información, mejorando la eficiencia administrativa.",
      image:
        "https://images.pexels.com/photos/7876051/pexels-photo-7876051.jpeg?auto=compress&cs=tinysrgb&dpr=2&?w=662&h=372",
      tech: ["Python 3", "QtDesigner", "SQLite3", "Anaconda", "Event"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alg4ret3/CorponarinoSys.git",
      featured: false,
    },
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
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
              Proyectos
              <span className="absolute inset-0 -z-10 rounded-lg bg-cyan-500 opacity-20 blur-xl"></span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg transition-shadow duration-300"
              >
                {/* Gradiente de overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Imagen */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                  {/* Botones de acción */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-cyan-400 hover:text-white hover:bg-cyan-662 transition-all duration-300 neon-glow"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-magenta-400 hover:text-white hover:bg-magenta-500/50 transition-all duration-300 neon-glow"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Destacado */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg"
                      >
                        <Zap className="w-4 h-4 text-black" />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col justify-between min-h-[220px]">
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 font-poppins mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="relative overflow-hidden w-full py-4">
                    {/* Carrusel infinito */}
                    <motion.div
                      className="flex gap-2 w-max"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                      }}
                    >
                      {[...project.tech, ...project.tech].map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 
                   rounded-full text-xs sm:text-sm font-poppins text-cyan-300 
                   border border-cyan-400/30 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/Alg4ret3"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-662 to-magenta-300 rounded-lg font-poppins font-semibold text-gray-200 cyber-border hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Ver Más Proyectos
              <ExternalLink className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
