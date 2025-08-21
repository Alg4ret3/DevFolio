"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Mostrar toast en lugar de alert
    setShowToast(true); // suponer que tienes un estado showToast
    setTimeout(() => setShowToast(false), 3000); // desaparecerá después de 3 segundos
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
    <section id="contact" className="py-20 px-4 relative">
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
              Contacto
              <span className="absolute inset-0 -z-10 rounded-lg bg-cyan-500 opacity-20 blur-xl"></span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 cyber-border">
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center">
                    <MessageCircle className="w-6 h-6 text-cyan-400 mr-3 neon-glow" />
                    Hablemos
                  </h3>

                  <p className="text-gray-300 font-poppins leading-relaxed mb-8">
                    ¿Tienes un proyecto en mente? ¿Quieres colaborar en algo
                    increíble? ¡Me encantaría escuchar tus ideas y trabajar
                    juntos para hacer realidad tu visión digital!
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "tuplacore@gmail.com",
                        color: "text-cyan-400",
                        href: "mailto:alex@developer.com",
                      },
                      {
                        icon: Phone,
                        label: "Teléfono",
                        value: "+57 317 009 87 70",
                        color: "text-magenta-400",
                        href: "tel:+15551234567",
                      },
                      {
                        icon: MapPin,
                        label: "Ubicación",
                        value: "San juan de Pasto, Colombia",
                        color: "text-green-400",
                        href: "#",
                      },
                    ].map((contact, index) => (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-black/30 border border-gray-700 hover:border-current transition-all duration-300 group"
                      >
                        <contact.icon
                          className={`w-5 h-5 ${contact.color} neon-glow`}
                        />
                        <div>
                          <p className="text-sm font-poppins text-gray-400">
                            {contact.label}
                          </p>
                          <p
                            className={`font-poppins ${contact.color} group-hover:glow-text transition-all duration-300`}
                          >
                            {contact.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-400/30">
                    <p className="text-sm font-poppins text-gray-300 italic">
                      "La innovación distingue a un líder de un seguidor." -
                      Steve Jobs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-poppins text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 font-poppins text-white cyber-border"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-poppins text-gray-300 mb-2">
                      Email *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-magenta-400 focus:outline-none transition-all duration-300 font-poppins text-white cyber-border"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-poppins text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-green-400 focus:outline-none transition-all duration-300 font-poppins text-white cyber-border"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-poppins text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none transition-all duration-300 font-poppins text-white resize-none cyber-border"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-800 to-magenta-300 rounded-lg font-poppins font-semibold text-gray-200 cyber-border hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-gray-200/30 border-t-gray-200 rounded-full"
                    />
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </motion.button>
                {showToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 right-4 bg-cyan-700 text-white px-4 py-2 rounded-lg shadow-lg font-poppins"
                  >
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
