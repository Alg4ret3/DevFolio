'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CyberDash',
      description: 'Dashboard futurista para análisis de datos con visualizaciones 3D y tiempo real.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Three.js', 'Node.js', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'NeonCommerce',
      description: 'E-commerce con diseño cyberpunk y experiencia de compra inmersiva.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI Assistant',
      description: 'Asistente virtual con interfaz holográfica y procesamiento de lenguaje natural.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'OpenAI', 'React', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'MetaVerse Hub',
      description: 'Plataforma para experiencias virtuales con realidad aumentada integrada.',
      image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Unity', 'WebXR', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'CryptoTracker Pro',
      description: 'Aplicación de trading con gráficos avanzados y análisis predictivo.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Chart.js', 'Express', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Neural Network Viz',
      description: 'Visualizador interactivo de redes neuronales con simulaciones en tiempo real.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['D3.js', 'TensorFlow.js', 'Python', 'Flask'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400 glow-text">
              Proyectos
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, rotateX: 5 }}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/30 cyber-border ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500/50 transition-all duration-300 neon-glow"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-magenta-400 hover:text-white hover:bg-magenta-500/50 transition-all duration-300 neon-glow"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                      >
                        <Zap className="w-4 h-4 text-black" />
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 font-poppins mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full text-xs font-poppins text-cyan-300 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg font-poppins font-semibold text-black cyber-border hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
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