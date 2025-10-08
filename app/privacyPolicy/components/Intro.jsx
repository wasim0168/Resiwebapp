// app/privacy/page.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  float: {
    y: [-15, 15, -15],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const shieldVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1
    }
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const lockVariants = {
  hidden: { scale: 0, y: 50 },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 8,
      delay: 0.5
    }
  },
  lock: {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function AnimatedSection({ children, className = "" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function IntroPage() {
  const privacyPrinciples = [
    {
      icon: "🔒",
      title: "Data Protection",
      description: "Your information is securely encrypted and protected"
    },
    {
      icon: "👁️",
      title: "Transparency",
      description: "Clear communication about how we use your data"
    },
    {
      icon: "⚖️",
      title: "Compliance",
      description: "Adherence to global privacy regulations"
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building relationships based on privacy and respect"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-300 rounded-full"
          ></motion.div>
        </div>

        {/* Animated Security Rings */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-blue-400/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-purple-400/30 rounded-full"
        ></motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Policy</span>
            </motion.h1>
            
            {/* Animated Underline */}
            <motion.div 
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"
            ></motion.div>
            
            {/* Introduction Text */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12"
            >
            <em> " At Resicode, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard the data you share with us. "</em>
            </motion.p>

            {/* Privacy Principles */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
            >
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl mb-4 group-hover:scale-110 transition-transform"
                  >
                    {principle.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Last Updated & Quick Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-white font-semibold">Last Updated</div>
                  <div className="text-blue-200 text-sm">Octomber 2025</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-white font-semibold">Applicable To</div>
                  <div className="text-blue-200 text-sm">All Users</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="text-white font-semibold">Compliance</div>
                  <div className="text-blue-200 text-sm"> Ready</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {['Data Collection', 'Usage', 'Protection', 'Rights', 'Contact'].map((section, index) => (
                <motion.a
                  key={index}
                  href={`#${section.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  {section}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        
      </section>

      
    </div>
  );
}