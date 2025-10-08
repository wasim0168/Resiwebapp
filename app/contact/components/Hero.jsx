// app/contact/page.jsx
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

const bounceVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  bounce: {
    scale: [1, 1.1, 1],
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

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-800 ">
        
         {/* Animated Grid Lines Pasttern For Hero section  */}
     <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}>
        </div>
      </div>
        
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
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
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-300 rounded-full"
          ></motion.div>
        </div>

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
              Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Resicode</span>
            </motion.h1>
            
            {/* Animated Underline */}
            <motion.div 
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"
            ></motion.div>
            
            {/* Introduction Text */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              <em>" We would love to hear from you! Whether you have a question, want to start a project, or simply say hello, our team is ready to help. "</em>
            </motion.p>

            {/* Quick Contact Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
            >
              {[
                {
                  icon: "📧",
                  title: "Email Us",
                  info: "support@resicode.com",
                  description: "Send us an email anytime"
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  info: " 95294 68439 ,97646 87625",
                  description: "Mon-Fri from 10 am to 7 pm"
                },
                {
                  icon: "💬📲",
                  title: "Live Chat",
                  info: "Start Chat",
                  description: "Instant help available"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl mb-4"
                  >
                    {contact.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-lg mb-2">{contact.title}</h3>
                  <p className="text-cyan-200 font-semibold mb-1">{contact.info}</p>
                  <p className="text-blue-100 text-sm">{contact.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </section>

    
    </div>
  );
}