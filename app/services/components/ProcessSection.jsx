// components/ProcessSection.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Consultation",
      icon: "💬",
      shortDescription: "We begin by understanding your vision, goals, and specific requirements.",
      fullDescription: "During our initial consultation, we dive deep into your business objectives, target audience, and project requirements. This phase involves detailed discussions, requirement analysis, and understanding your brand identity to ensure we're aligned with your vision.",
      activities: [
        "Initial discovery meeting",
        "Requirement analysis",
        "Goal setting",
        "Timeline discussion",
        "Budget planning",
        "Project scope definition"
      ],
      duration: "1-2 Days",
      deliverables: ["Project Brief", "Requirements Document", "Initial Proposal"]
    },
    {
      id: 2,
      number: "02",
      title: "Planning & Strategy",
      icon: "📊",
      shortDescription: "We create a comprehensive roadmap and strategy for your project.",
      fullDescription: "Our team develops a detailed project plan including technology stack, architecture, user flows, and content strategy. We create wireframes and prototypes to visualize the final product and ensure every aspect is carefully planned.",
      activities: [
        "Technology stack selection",
        "Architecture planning",
        "User flow mapping",
        "Content strategy",
        "Wireframing",
        "Project timeline creation"
      ],
      duration: "3-5 Days",
      deliverables: ["Project Plan", "Wireframes", "Technical Specification", "Content Strategy"]
    },
    {
      id: 3,
      number: "03",
      title: "Design & Development",
      icon: "🎨",
      shortDescription: "Our team brings your vision to life with creative design and robust development.",
      fullDescription: "This phase involves UI/UX design, frontend and backend development. We create responsive designs, implement features, and ensure the product is built with best practices and modern technologies.",
      activities: [
        "UI/UX design creation",
        "Frontend development",
        "Backend development",
        "Database design",
        "API integration",
        "Responsive implementation"
      ],
      duration: "2-4 Weeks",
      deliverables: ["Design Mockups", "Development Version", "Regular Progress Updates"]
    },
    {
      id: 4,
      number: "04",
      title: "Testing & Quality Check",
      icon: "🔍",
      shortDescription: "Rigorous testing to ensure flawless performance and user experience.",
      fullDescription: "We conduct comprehensive testing including functionality testing, performance testing, security audits, and cross-browser compatibility checks to ensure your product meets the highest quality standards.",
      activities: [
        "Functionality testing",
        "Performance optimization",
        "Security testing",
        "Cross-browser testing",
        "User acceptance testing",
        "Bug fixing and refinement"
      ],
      duration: "5-7 Days",
      deliverables: ["Test Reports", "Quality Assurance Certificate", "Performance Metrics"]
    },
    {
      id: 5,
      number: "05",
      title: "Launch & Support",
      icon: "🚀",
      shortDescription: "Deployment and ongoing support to ensure long-term success.",
      fullDescription: "We handle the deployment process, domain setup, and go-live activities. Post-launch, we provide ongoing maintenance, updates, and support to ensure your digital product continues to perform optimally.",
      activities: [
        "Production deployment",
        "Domain and hosting setup",
        "Final quality check",
        "Client training",
        "Post-launch monitoring",
        "Ongoing maintenance"
      ],
      duration: "Ongoing",
      deliverables: ["Live Website/App", "Documentation", "Support Plan", "Analytics Setup"]
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

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="our-process" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Process</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, step-by-step approach to delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300 hidden lg:block"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-8 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 rounded-full border-4 ${
                      activeStep === step.id
                        ? 'bg-blue-500 border-blue-500 scale-125'
                        : 'bg-white border-blue-300'
                    } transition-all duration-300`}
                  ></motion.div>
                </div>

                {/* Process Card */}
                <motion.div
                  className={`ml-12 lg:ml-24 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    activeStep === step.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {/* Step Header */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white"
                        >
                          {step.icon}
                        </motion.div>
                        <div className="text-left">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.shortDescription}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                              ⏱️ {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Step Details */}
                  <AnimatePresence>
                    {activeStep === step.id && (
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="border-t border-gray-200"
                      >
                        <div className="p-6">
                          {/* Full Description */}
                          <motion.p
                            variants={itemVariants}
                            className="text-gray-700 mb-6 leading-relaxed"
                          >
                            {step.fullDescription}
                          </motion.p>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Activities */}
                            <motion.div variants={itemVariants}>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Key Activities
                              </h4>
                              <ul className="space-y-2">
                                {step.activities.map((activity, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    {activity}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Deliverables */}
                            <motion.div variants={itemVariants}>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Deliverables
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {step.deliverables.map((deliverable, index) => (
                                  <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                                  >
                                    {deliverable}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          </div>

                          {/* Progress Navigation */}
                          <motion.div
                            variants={itemVariants}
                            className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200"
                          >
                            <button
                              onClick={() => setActiveStep(Math.max(1, step.id - 1))}
                              disabled={step.id === 1}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                step.id === 1
                                  ? 'text-gray-400 cursor-not-allowed'
                                  : 'text-blue-600 hover:bg-blue-50'
                              }`}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                              <span>Previous Step</span>
                            </button>

                            <div className="flex items-center space-x-2">
                              {processSteps.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setActiveStep(idx + 1)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    activeStep === idx + 1 ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>

                            <button
                              onClick={() => setActiveStep(Math.min(processSteps.length, step.id + 1))}
                              disabled={step.id === processSteps.length}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                step.id === processSteps.length
                                  ? 'text-gray-400 cursor-not-allowed'
                                  : 'text-blue-600 hover:bg-blue-50'
                              }`}
                            >
                              <span>Next Step</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;