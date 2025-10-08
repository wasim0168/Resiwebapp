// components/ServiceCategories.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const serviceCategories = [
    {
      id: 1,
      name: "Web Development",
      icon: "💻",
      shortDescription: "Custom websites built with modern technologies for optimal performance and user experience.",
      fullDescription: "We create responsive, fast-loading websites using the latest technologies like Next.js, React, and Tailwind CSS. Our development process ensures SEO optimization, cross-browser compatibility, and excellent user experience.",
      features: [
        "Responsive Design",
        "Fast Loading Speed",
        "SEO Optimized",
        "Cross-browser Compatible",
        "Mobile First Approach",
        "Performance Optimized"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      name: "E-commerce Solutions",
      icon: "🛒",
      shortDescription: "Complete online stores with secure payment gateways and inventory management systems.",
      fullDescription: "Build powerful e-commerce platforms with secure payment processing, inventory management, and seamless shopping experiences. We integrate popular payment gateways and ensure your store is optimized for conversions.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking",
        "Mobile Commerce",
        "Security Features",
        "Analytics Dashboard"
      ],
      technologies: ["React Native", "Node js", "JWT", "RazorPay", "MongoDB"]
    },
    {
      id: 3,
      name: "Web Applications",
      icon: "📱",
      shortDescription: "Scalable web applications with robust backend systems and real-time features.",
      fullDescription: "Develop custom web applications with advanced functionality, real-time features, and scalable architecture. Perfect for businesses needing complex workflows and data processing.",
      features: [
        "Real-time Updates",
        "User Authentication",
        "API Integration",
        "Database Management",
        "Cloud Deployment",
        "Progressive Web Apps"
      ],
      technologies: ["React", "WebSockets", "JWT /NextAuth.js", "REST APIs", "PostgreSQL"]
    },
    {
      id: 4,
      name: "UI/UX Design",
      icon: "🎨",
      shortDescription: "User-centered designs that create intuitive and engaging digital experiences.",
      fullDescription: "Our design team creates beautiful, intuitive interfaces that enhance user engagement and drive conversions. We focus on user research, wireframing, and prototyping to deliver exceptional experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Design Systems",
        "Interactive Mockups"
      ],
      technologies: ["Figma", "Canva", "Sketch", "UserTesting", "Framer"]
    },
    {
      id: 5,
      name: "SEO & Maintenance",
      icon: "🔍",
      shortDescription: "Continuous optimization and maintenance to keep your website performing at its best.",
      fullDescription: "Keep your website running smoothly with our comprehensive maintenance and SEO services. We handle security updates, performance optimization, and search engine ranking improvements.",
      features: [
        "SEO Optimization",
        "Security Updates",
        "Performance Monitoring",
        "Regular Backups",
        "Content Updates",
        "Technical Support"
      ],
      technologies: ["Google Analytics", "Search Console", "Ahrefs", "HTTPS/SSL", "CDN"]
    },
    {
      id: 6,
      name: "Custom Solutions",
      icon: "⚡",
      shortDescription: "Tailored software solutions designed to meet your unique business requirements.",
      fullDescription: "Get bespoke software solutions perfectly tailored to your specific business needs. From custom CRM systems to complex enterprise applications, we build exactly what you need.",
      features: [
        "Custom Software Development",
        "API Development",
        "System Integration",
        "Technical Consulting",
        "Legacy System Modernization",
        "Enterprise Solutions"
      ],
      technologies: ["Python", "PostgreSQL", "WebSockets", "Next.js", "Express.js"]
    }
  ];

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="service-categories" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Service Categories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <em>" Explore our comprehensive range of digital services designed to elevate your business . " </em>
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {serviceCategories.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Service Card Header */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeCategory === service.id 
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleCategory(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl"
                    >
                      {service.icon}
                    </motion.div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.shortDescription}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeCategory === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Dropdown Content */}
              <AnimatePresence>
                {activeCategory === service.id && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="border-t border-gray-200"
                  >
                    <div className="p-6">
                      {/* Full Description */}
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {service.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies We Use</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                      >
                        Learn More About {service.name}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;