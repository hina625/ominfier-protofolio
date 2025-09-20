'use client';

import { useState, useEffect } from 'react';
import BackgroundParticles from '../../components/BackgroundParticles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock, 
  Globe,
  User,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as LocationIcon,
  Send as SendIcon,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get API URL from environment variable
      // API Base URL - Auto-detect environment
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 
        (typeof window !== 'undefined' && window.location.hostname === 'ominfier-protofolio.vercel.app' 
          ? 'https://backend-protofolio.vercel.app/api'  // Vercel backend URL
          : 'http://localhost:5000/api');  // Local development URL
      
      // Send data to API
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
      } else {
        throw new Error(result.error || 'Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setIsSubmitting(false);
      alert('Failed to submit contact form. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@omnifier.com",
      description: "Send us an email anytime",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Call Us",
      details: "+92 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <LocationIcon className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 AI Street, Tech City",
      description: "Come say hello at our office",
      color: "from-green-400 to-emerald-400"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Support",
      description: "Get instant help with our intelligent assistant",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Response",
      description: "We typically respond within 24 hours",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Communication",
      description: "Your data is protected with end-to-end encryption",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 gradient-bg overflow-hidden">
        {/* Shared BackgroundParticles component for consistent background */}
        <BackgroundParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your workflow with AI? Let's discuss how Omnifier can optimize your business processes and boost productivity.
          </p>
        </motion.div>

        {/* Contact Form and Contact Information - Vertical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/50 rounded-3xl p-8 shadow-2xl backdrop-blur-lg border border-purple-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {info.title}
                  </h4>
                  <p className="text-purple-300 font-medium mb-1">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/20 backdrop-blur-sm border border-purple-400/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="text-lg font-bold text-white">Business Hours</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-purple-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                  <span className="font-medium">Saturday</span>
                  <span className="text-purple-300">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                  <span className="font-medium">Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us Section - Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We provide exceptional service with cutting-edge technology and dedicated support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>

    {/* Footer */}
    <Footer />
    </div>
  );
}
