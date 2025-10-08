// app/portfolio/page.jsx
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
    y: [-20, 20, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const codeVariants = {
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
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const projectVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 8,
      delay: 0.8
    }
  },
  bounce: {
    scale: [1, 1.05, 1],
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

export default function Hero() {
  const portfolioStats = [
    { number: "10+", label: "Projects Completed", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "3+", label: "Years Experience", icon: "📈" },
    { number: "7+", label: "Happy Clients", icon: "😊" }
  ];

  const projectTypes = [
    { icon: "💻", type: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: "🛒", type: "E-commerce", color: "from-green-500 to-emerald-500" },
    { icon: "📱", type: "Web Apps", color: "from-purple-500 to-pink-500" },
    { icon: "🎨", type: "UI/UX Design", color: "from-orange-500 to-red-500" }
  ];

  const industries = [
    { name: "E-commerce", icon: "🛍️" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Technology", icon: "💻" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Food & Beverage", icon: "🍕" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-900">
        
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
              className="text-5xl md:text-6xl sm:mt-10 lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Portfolio</span> & Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Work</span>
            </motion.h1>
            
            {/* Animated Underline */}
            <motion.div 
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"
            ></motion.div>
            
            {/* Introduction Text */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12"
            >
             <em>" At Resicode, we have worked with businesses across industries to deliver powerful, scalable, and user-friendly web solutions. Here are some of our featured projects. "</em>
            </motion.p>

            {/* Portfolio Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              {portfolioStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl mb-3 group-hover:scale-110 transition-transform"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {stat.number}
                  </div>
                  <p className="text-blue-100 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Project Types */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
            >
              {projectTypes.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-3 group-hover:shadow-lg transition-all duration-300`}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {project.type}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            {/* Industries We Serve */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto mb-8"
            >
              <h3 className="text-white font-bold text-lg mb-4 text-center">Industries We Serve</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <span>{industry.icon}</span>
                    <span>{industry.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        
      </section>

      
    </div>
  );
}