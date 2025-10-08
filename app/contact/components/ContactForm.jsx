// components/ContactForm.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);

  const serviceTypes = [
    'Web Development',
    'E-commerce Solution',
    'Web Application',
    'UI/UX Design',
    'SEO & Maintenance',
    'Custom Solution',
    'Consultation',
    'Other'
  ];

  const subjectOptions = [
    'General Inquiry',
    'Project Discussion',
    'Partnership',
    'Career Opportunity',
    'Support Request',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! We will get back to you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: ''
      });
    }, 2000);
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
    },
    tap: { scale: 0.95 },
    loading: { 
      scale: [1, 1.02, 1],
      transition: { duration: 1, repeat: Infinity }
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Message</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center space-x-2">
                  <span className="text-blue-600">👤</span>
                  <span>Full Name *</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  placeholder="Enter your full name"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Field */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center space-x-2">
                    <span className="text-blue-600">📧</span>
                    <span>Email Address *</span>
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center space-x-2">
                    <span className="text-blue-600">📞</span>
                    <span>Phone Number</span>
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    placeholder="+1 (555) 123-4567"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Service Type Dropdown */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center space-x-2">
                  <span className="text-blue-600">🛠️</span>
                  <span>Service Type (Optional)</span>
                </span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer"
              >
                <option value="">Select a service type</option>
                {serviceTypes.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>

            {/* Subject Field with Dropdown */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center space-x-2">
                  <span className="text-blue-600">📝</span>
                  <span>Subject (Optional)</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setShowSubjectDropdown(true)}
                  onBlur={() => setTimeout(() => setShowSubjectDropdown(false), 200)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md cursor-pointer"
                  placeholder="Select or type a subject"
                  readOnly
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.div>
                
                {/* Subject Dropdown */}
                <AnimatePresence>
                  {showSubjectDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-2xl z-10 overflow-hidden"
                    >
                      {subjectOptions.map((option, index) => (
                        <motion.button
                          key={index}
                          type="button"
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => {
                            setFormData({ ...formData, subject: option });
                            setShowSubjectDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 flex items-center space-x-3"
                        >
                          <span className="text-blue-500">•</span>
                          <span>{option}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center space-x-2">
                  <span className="text-blue-600">💬</span>
                  <span>Message *</span>
                </span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md resize-none"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-4 top-4 text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={buttonVariants}
                initial="initial"
                whileHover={isSubmitting ? "loading" : "hover"}
                whileTap="tap"
                animate={isSubmitting ? "loading" : "initial"}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.svg
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </motion.svg>
                    </>
                  )}
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-shine opacity-30"></div>
                </div>
              </motion.button>

              {/* Form Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-500 text-sm mt-4"
              >
                💡 We typically respond within 2 hours during business hours
              </motion.p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;