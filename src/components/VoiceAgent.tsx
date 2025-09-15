"use client";

import React, { useState, useEffect } from "react";

// TypeScript declarations for Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
import { motion } from "framer-motion";
import { 
  Bot, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Brain, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Play, 
  Pause, 
  Settings, 
  Headphones, 
  MessageCircle,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Crown,
  Send,
  X,
  User
} from "lucide-react";

export default function VoiceAgent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isBot: boolean, timestamp: Date}>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize voice recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = 'en-US';
        
        recognitionInstance.onstart = () => {
          console.log('Voice recognition started');
        };
        
        recognitionInstance.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          console.log('Voice input:', transcript);
          
          // Add user voice message
          const voiceMessage = {
            id: Date.now(),
            text: `🎤 ${transcript}`,
            isBot: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, voiceMessage]);
          
          // Process voice input and get bot response
          processVoiceInput(transcript);
        };
        
        recognitionInstance.onerror = (event: any) => {
          console.error('Voice recognition error:', event.error);
        };
        
        recognitionInstance.onend = () => {
          setIsListening(false);
        };
        
        setRecognition(recognitionInstance);
        setIsVoiceEnabled(true);
      } else {
        console.log('Speech recognition not supported');
        setIsVoiceEnabled(false);
      }
    }
  }, []);

  // Text-to-Speech function
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      // Try to use a robotic voice if available
      const voices = speechSynthesis.getVoices();
      const roboticVoice = voices.find(voice => 
        voice.name.includes('Google') || 
        voice.name.includes('Microsoft') ||
        voice.name.includes('Samantha')
      );
      
      if (roboticVoice) {
        utterance.voice = roboticVoice;
      }
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  // Process voice input and generate response
  const processVoiceInput = (input: string) => {
    setIsTyping(true);
    
    // Simple keyword-based responses for voice
    let response = '';
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      response = "Hello! I'm Professor Bot. How can I assist you today?";
    } else if (lowerInput.includes('how are you')) {
      response = "I'm functioning at optimal capacity. My neural networks are running smoothly!";
    } else if (lowerInput.includes('what can you do')) {
      response = "I can help with automation, analysis, voice recognition, and AI-powered tasks. What would you like me to do?";
    } else if (lowerInput.includes('thank you')) {
      response = "You're welcome! I'm here to help whenever you need assistance.";
    } else if (lowerInput.includes('goodbye') || lowerInput.includes('bye')) {
      response = "Goodbye! It was great talking with you. Feel free to return anytime!";
    } else if (lowerInput.includes('time')) {
      response = `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (lowerInput.includes('date')) {
      response = `Today's date is ${new Date().toLocaleDateString()}.`;
    } else {
      response = getRandomBotResponse();
    }
    
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: `🤖 ${response}`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Speak the response
      speakText(response);
    }, 1500);
  };

  // Bot responses
  const botResponses = [
    "Hello! I'm Professor Bot, your AI assistant. How can I help you today?",
    "I'm processing your request with my neural networks. Please wait a moment.",
    "That's an interesting question! Let me analyze that for you.",
    "I understand. Let me provide you with the best solution.",
    "My systems are running optimally. Is there anything specific you'd like to know?",
    "I'm here to assist you with any task. What would you like me to do?",
    "My voice recognition systems are active. I can hear you clearly.",
    "I'm constantly learning and improving. Thank you for interacting with me!",
    "I can help you with automation, analysis, or any other AI-powered tasks.",
    "My processors are working at maximum efficiency. Ready for your next command!"
  ];

  const getRandomBotResponse = () => {
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleStartListening = () => {
    if (isVoiceEnabled && recognition) {
      setIsListening(true);
      setShowChat(true);
      
      // Add welcome message
      const welcomeMessage = {
        id: Date.now(),
        text: "Hello! I'm Professor Bot. I'm now listening to you. Speak clearly and I'll respond with voice!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      
      // Start voice recognition
      recognition.start();
    } else {
      // Fallback to text chat if voice not available
      setIsListening(true);
      setShowChat(true);
      
      const welcomeMessage = {
        id: Date.now(),
        text: "Hello! I'm Professor Bot. Voice recognition is not available, but you can type messages to chat with me!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleStopListening = () => {
    if (recognition) {
      recognition.stop();
    }
    setIsListening(false);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const response = getRandomBotResponse();
      const botMessage = {
        id: Date.now() + 1,
        text: `🤖 ${response}`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Speak the response
      speakText(response);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const voiceFeatures = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Recognition",
      description: "Advanced speech recognition with 99.9% accuracy",
      color: "from-blue-400 to-cyan-400",
      delay: 0.1
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Understanding",
      description: "Natural language processing and context awareness",
      color: "from-purple-400 to-pink-400",
      delay: 0.2
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language",
      description: "Support for 50+ languages and dialects",
      color: "from-green-400 to-emerald-400",
      delay: 0.3
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "End-to-end encryption and data protection",
      color: "from-red-400 to-orange-400",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 gradient-bg overflow-hidden">
      {/* Enhanced Galaxy Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Interactive Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
          }}
        />
        
        {/* Purple Galaxy Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-900/10 to-transparent" />
        
        {/* Galaxy Nebula Effects */}
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
        
        {/* Floating Galaxy Particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Galaxy Stars */}
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(147, 51, 234, 0.8)' : 
                             i % 3 === 1 ? 'rgba(236, 72, 153, 0.6)' : 'rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Professor Bot
            </span>
            <span className="text-white ml-4">AI Assistant</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet Professor Bot, your advanced robotic AI assistant with voice recognition, natural language processing, and intelligent automation capabilities
          </p>
        </motion.div>

        {/* Two Column Layout - Agent Visual Left, Features Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Agent Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Main Bot Body */}
              <motion.div
                className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border-2 border-purple-400/50 shadow-2xl flex flex-col items-center justify-center p-8"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.6)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                  ],
                }}
              >
                {/* Bot Head */}
                <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-purple-400/30 flex items-center justify-center mb-4">
                  <Bot className="w-16 h-16 text-purple-400" />
                  
                  {/* Animated LED Eyes */}
                  <motion.div
                    className="absolute top-4 left-6 w-3 h-3 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-4 right-6 w-3 h-3 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                  
                  {/* Bot Antenna */}
                  <motion.div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-purple-400"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Bot Body */}
                <div className="relative w-40 h-24 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 border border-purple-400/20 flex items-center justify-center">
                  {/* Chest Panel */}
                  <div className="w-32 h-16 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 border border-purple-400/30 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-cyan-400 rounded-sm"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Side Panels */}
                  <div className="absolute -left-2 top-2 w-4 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-l-lg border-l-2 border-purple-400/30" />
                  <div className="absolute -right-2 top-2 w-4 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-r-lg border-r-2 border-purple-400/30" />
                </div>

                {/* Bot Arms */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-l-lg border-l-2 border-purple-400/30" />
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-r-lg border-r-2 border-purple-400/30" />
                
                {/* Bot Legs */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                  <div className="w-8 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-t-lg border-t-2 border-purple-400/30" />
                  <div className="w-8 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-t-lg border-t-2 border-purple-400/30" />
                </div>

                {/* Bot Status Lights */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      isActive ? 'bg-green-400' : 'bg-red-400'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-blue-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>

                {/* Bot Power Button */}
                <motion.button
                  className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-white' : 'bg-gray-300'}`} />
                </motion.button>

                {/* Floating AI Icons */}
                {[
                  <Brain className="w-6 h-6" />,
                  <Mic className="w-6 h-6" />,
                  <Sparkles className="w-6 h-6" />,
                  <Zap className="w-6 h-6" />
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-cyan-400"
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${15 + (i % 2) * 35}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}

                {/* Bot Scanning Lines */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Data Stream Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '-2rem',
                      }}
                      animate={{
                        y: ['-2rem', '26rem'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professor Bot
                </span>
                <span className="text-white ml-2">Specifications</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Advanced robotic AI system with voice processing, neural networks, and autonomous decision-making capabilities
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {voiceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={isListening ? handleStopListening : handleStartListening}
                className={`group relative px-8 py-4 font-semibold rounded-full shadow-2xl overflow-hidden flex items-center gap-3 ${
                  isListening 
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  {isListening ? 'Stop Listening' : 'Start Listening'}
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5" />
                  Configure
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Voice Commands Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative p-12 bg-gradient-to-br from-gray-900/90 to-purple-900/50 rounded-3xl shadow-2xl backdrop-blur-lg text-center border border-purple-400/30">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-4">
                Bot Voice Commands
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-8 h-8 text-purple-400" />
                </motion.div>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Professor Bot processes voice commands with advanced neural networks and responds with robotic precision
              </p>
              
              {/* Voice Commands Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  "Professor Bot, analyze system status",
                  "Execute task automation protocol",
                  "Initiate neural network scan",
                  "Process data and generate report",
                  "Activate security protocols",
                  "Perform system diagnostics"
                ].map((command, index) => (
                  <motion.div
                    key={command}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                  >
                    <p className="text-gray-300 text-sm">{command}</p>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Activate Professor Bot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </div>
            
            {/* Floating Sparkles */}
            {[...Array(12)].map((_, i) => (
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
        </motion.div>
      </div>

      {/* Chat Modal */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowChat(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-purple-400/30 overflow-hidden"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Professor Bot</h3>
                  <p className="text-gray-300 text-sm">
                    {isListening ? '🎤 Listening...' : isSpeaking ? '🔊 Speaking...' : isVoiceEnabled ? '🎙️ Voice Ready' : '💬 Text Only'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-3 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                        : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                    }`}>
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-white" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-gray-700/50 text-white' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-3 rounded-2xl bg-gray-700/50">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700/50">
              {/* Voice Controls */}
              {isVoiceEnabled && (
                <div className="flex gap-2 mb-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isListening ? handleStopListening : handleStartListening}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isListening 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    {isListening ? 'Stop Voice' : 'Start Voice'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (isSpeaking) {
                        speechSynthesis.cancel();
                        setIsSpeaking(false);
                      }
                    }}
                    disabled={!isSpeaking}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                  >
                    <VolumeX className="w-4 h-4" />
                    Stop Speaking
                  </motion.button>
                </div>
              )}
              
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isVoiceEnabled ? "Type a message or use voice..." : "Type your message to Professor Bot..."}
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!inputMessage.trim()}
                  className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
