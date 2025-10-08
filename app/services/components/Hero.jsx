// app/services/page.jsx
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
    y: [-10, 10, -10],
    transition: {
      duration: 4,
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
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-browser Compatible"]
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment gateways and inventory management systems.",
      features: ["Payment Integration", "Product Management", "Order Tracking", "Mobile Commerce"]
    },
    {
      icon: "📱",
      title: "Web Applications",
      description: "Scalable web applications with robust backend systems and real-time features.",
      features: ["Real-time Updates", "User Authentication", "API Integration", "Progressive Web Apps"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered designs that create intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: "🔍",
      title: "SEO & Maintenance",
      description: "Continuous optimization and maintenance to keep your website performing at its best.",
      features: ["SEO Optimization", "Security Updates", "Performance Monitoring", "Regular Backups"]
    },
    {
      icon: "⚡",
      title: "Custom Solutions",
      description: "Tailored software solutions designed to meet your unique business requirements.",
      features: ["Custom Software", "API Development", "System Integration", "Technical Consulting"]
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-20 mt-20 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
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
         
     {/* Animated Grid Lines Pasttern */}
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Services</span>
            </motion.h1>
            
            {/* Animated Underline */}
            <motion.div 
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"
            ></motion.div>
            
            {/* Introduction Text */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              <em>" At Resicode, we provide a full range of web development and digital solutions tailored to meet the unique needs of your business. Our goal is to help you grow online with modern, scalable, and user-friendly solutions. "</em>
            </motion.p>

          </motion.div>
        </div>

        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-8 h-8 bg-cyan-300/30 rounded-lg"
        ></motion.div>
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-white/20 rounded-full"
        ></motion.div>
      </section> 
    </div>
  );
}