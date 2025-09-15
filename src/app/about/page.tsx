"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Mic, 
  Video, 
  Smartphone, 
  Globe, 
  Bot, 
  Zap, 
  Shield, 
  Users,
  MessageCircle,
  Headphones,
  Camera,
  Wifi,
  Settings,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud
} from "lucide-react";
import BackgroundParticles from "../../components/BackgroundParticles";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
  <Navbar />
  <div className="h-8 md:h-12" />
  <div className="min-h-screen gradient-bg text-white overflow-x-hidden">
        {/* Animated Galaxy Background */}
        <BackgroundParticles variant="galaxy" particleCount={40} starCount={100} />
        <div className="fixed inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033] via-[#0d001a] to-[#000000]" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 80%)"
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-5 relative z-10">
          {/* About Omnifier Section */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-12 text-center"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px #9333ea)",
                  "drop-shadow(0 0 40px #c084fc)",
                  "drop-shadow(0 0 20px #9333ea)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              About Omnifier
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-purple-200 max-w-2xl mx-auto"
            >
              Omnifier is your partner in digital transformation. We empower businesses and individuals to unlock their full potential through innovative technology, creative solutions, and a passion for excellence. Founded with a vision to bridge the gap between imagination and reality, Omnifier specializes in delivering end-to-end digital solutions that are tailored to your unique needs. Our team of experts combines deep technical knowledge with creative thinking to solve complex challenges and drive meaningful results. Whether you are a startup looking to launch your first product, an established business aiming to modernize your operations, or an entrepreneur with a bold idea, Omnifier is here to guide you every step of the way. We believe in building lasting partnerships, fostering innovation, and delivering value that goes beyond technology. Our portfolio spans a wide range of industries, including finance, healthcare, education, retail, and more. We take pride in our ability to adapt, learn, and grow with our clients, ensuring that every project is a success story. At Omnifier, your vision is our mission. Let us help you transform your ideas into digital reality and achieve new heights of success in the digital age.
            </motion.p>
          </motion.header>

          {/* Omnifier Characteristics Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div className="flex flex-col gap-8 justify-center">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Why Choose Omnifier?</h2>
              <ul className="space-y-5 text-lg text-gray-200">
                <li className="flex items-center gap-3"><Zap className="w-6 h-6 text-pink-400" /> Fast, scalable, and secure digital solutions</li>
                <li className="flex items-center gap-3"><Shield className="w-6 h-6 text-purple-400" /> Enterprise-grade security and privacy</li>
                <li className="flex items-center gap-3"><Users className="w-6 h-6 text-blue-400" /> Collaborative, client-focused approach</li>
                <li className="flex items-center gap-3"><Code className="w-6 h-6 text-green-400" /> Modern tech stack: AI, Web, Mobile, Cloud</li>
                <li className="flex items-center gap-3"><Cloud className="w-6 h-6 text-cyan-400" /> Seamless cloud integration & automation</li>
                <li className="flex items-center gap-3"><Headphones className="w-6 h-6 text-indigo-400" /> 24/7 support and maintenance</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl mb-6"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bot className="w-20 h-20 text-white" />
              </motion.div>
              <p className="text-lg text-gray-300 text-center max-w-xs">We blend creativity, technology, and strategy to deliver results that matter.</p>
            </div>
          </motion.section>

          {/* How We Help Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="py-10"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">How Can Omnifier Help You?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-purple-900/30 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col items-center text-center">
                <Globe className="w-10 h-10 text-purple-300 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-purple-200">Digital Strategy</h3>
                <p className="text-gray-300">We craft tailored digital strategies to help you grow, compete, and lead in your industry.</p>
              </div>
              <div className="p-6 bg-pink-900/30 rounded-2xl border border-pink-400/20 shadow-lg flex flex-col items-center text-center">
                <Smartphone className="w-10 h-10 text-pink-300 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-pink-200">App & Web Development</h3>
                <p className="text-gray-300">From idea to launch, we build high-performance apps and websites that delight users.</p>
              </div>
              <div className="p-6 bg-blue-900/30 rounded-2xl border border-blue-400/20 shadow-lg flex flex-col items-center text-center">
                <Database className="w-10 h-10 text-blue-300 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-blue-200">AI & Automation</h3>
                <p className="text-gray-300">Leverage AI, automation, and analytics to streamline operations and boost productivity.</p>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl mt-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-300">Ready to Transform Your Vision?</h2>
            <p className="text-lg mb-8 text-gray-300">Let's embark on a journey through the digital cosmos together. Contact us to get started!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg shadow-2xl"
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Footer */}
          <footer className="text-center py-8 border-t border-purple-400/30 mt-16">
            <p className="text-gray-400">&copy; 2024 Omnifier. Crafting the future, one pixel at a time.</p>
          </footer>
        </div>
      </div>
    </>
  );
}