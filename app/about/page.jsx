// app/about/page.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
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
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality",
      description: "Excellence is our standard in every project we deliver."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We work closely with clients to understand their unique needs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Reliability",
      description: "Consistent delivery and ongoing support you can count on."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Resicode</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Resicode is a web development service-based company dedicated to creating 
              <span className="font-semibold text-blue-600"> scalable, modern, and user-friendly </span>
              digital solutions for businesses worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      

<section id="our-story" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
      <div className="space-y-8">
        {/* Section Header */}
        <div className='text-center'>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Story</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 mx-auto"></div>
        </div>

        {/* Main Story Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-justify text-blue-600">Founded with a vision to simplify technology for businesses,</span> Resicode helps brands go digital with innovative and custom web solutions that drive real results.
          </p>

          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            Our journey began when we recognized the growing gap between businesses and technology. Many companies struggled to establish a strong online presence despite having incredible products and services. We set out to bridge this gap by making advanced web technologies accessible and affordable for everyone.
          </p>

          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            What started as a small team of passionate developers has grown into a full-service web development agency, but our core mission remains the same: to empower businesses with technology that works for them, not against them.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 gap-4 pt-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-360 transition-transform duration-300">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">10+ Projects</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-360 transition-transform duration-300">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">3+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-360 transition-transform duration-300">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">98% Satisfaction</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-360 transition-transform duration-300">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="relative">
        {/* Main Illustration Card */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden hover:scale-102 hover:-translate-y-1 transition-transform duration-300">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Our Long Term Vison with Timeline </h3>
            
            {/* Timeline */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <span className="font-bold text-white">2024</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-blue-200 transition-colors duration-300">
                    Foundation
                  </h4>
                  <p className="text-blue-100 text-sm mt-1">
                    Resicode was born with a vision to simplify technology for businesses
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <span className="font-bold text-white">2025</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-blue-200 transition-colors duration-300">
                    First Breakthrough
                  </h4>
                  <p className="text-blue-100 text-sm mt-1">
                    Delivered 5+ successful projects with 100% client satisfaction
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <span className="font-bold text-white">2025</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-blue-200 transition-colors duration-300">
                    Expansion
                  </h4>
                  <p className="text-blue-100 text-sm mt-1">
                   In Future Exploring our team and started serving Indian & International clients
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <span className="font-bold text-white">2026</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-blue-200 transition-colors duration-300">
                    Innovation
                  </h4>
                  <p className="text-blue-100 text-sm mt-1">
                    Introduced AI-powered solutions and advanced web technologies For Businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <span className="text-2xl">🚀</span>
        </div>
        
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
          <span className="text-xl">⭐</span>
        </div>
      </div>
    </div>

    {/* Mission Statement */}
    <div className="mt-16 text-center ">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:scale-102 transition-transform duration-300 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100">
        <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed">
          &quot;Our purpose is simple: to make technology accessible and empower businesses to thrive in the digital world through innovative web solutions.&quot;
        </blockquote>
        <div className="mt-6 text-gray-600 font-medium">
          - Resicode Team
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-20  bg-gradient-to-r from-blue-50 to-purple-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             <em> The principles that guide everything we do at Resicode</em>
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-white">
                    {value.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


{/* What we Do  */}
<section id="what-we-do" className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Do ... ?</span>
      </h2>
      <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        <em>" Comprehensive web solutions tailored to drive your digital transformation and business growth " </em>
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Web Development */}
      <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          Web Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Custom websites built with modern technologies for optimal performance, responsiveness, and user experience.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Responsive</span>
          <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Fast</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">SEO Ready</span>
        </div>
      </div>

      {/* E-commerce Development */}
      <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
          E-commerce Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Payments</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm rounded-full">Inventory</span>
          <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">Secure</span>
        </div>
      </div>

      {/* Web App Development */}
      <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
          Web Applications
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Scalable web applications with robust backend systems, real-time features, and cross-platform compatibility.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">Scalable</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Real-time</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">API Integration</span>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          UI/UX Design
        </h3>
        <p className="text-gray-600 leading-relaxed">
          User-centered designs that create intuitive, engaging experiences and drive conversions for your business.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">User Research</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-600 text-sm rounded-full">Wireframing</span>
          <span className="px-3 py-1 bg-rose-100 text-rose-600 text-sm rounded-full">Prototyping</span>
        </div>
      </div>

      {/* SEO & Maintenance */}
      <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
          SEO & Maintenance
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Continuous optimization, security updates, and performance monitoring to keep your website at peak performance.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-teal-100 text-teal-600 text-sm rounded-full">SEO Optimization</span>
          <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-sm rounded-full">Security</span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-sm rounded-full">Monitoring</span>
        </div>
      </div>

      {/* Custom Solutions */}
      <div className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
          Custom Solutions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Tailored software solutions designed to meet your unique business requirements and workflow needs.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">Custom Software</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">API Development</span>
          <span className="px-3 py-1 bg-violet-100 text-violet-600 text-sm rounded-full">Integration</span>
        </div>
      </div>
    </div> 
  </div>
</section>



{/* Meet Our Team */}
    <section id="meet-our-team" className="py-10 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <em>The passionate professionals behind Resicode's success story</em>
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Chairman */}
            <div className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto overflow-hidden">
                   <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                      <Image src="/wasim.jpg" alt="manoj" width={128} height={128} className="object-cover w-full h-full"/>
                   </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CTO
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Wasim Sheikh (Chairman)</h4>
              <p className="text-gray-600 text-sm mb-4">Strategic Vision & Business Development</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your leadership as a CTO proves that technology with purpose can change the Scenario of Digital Business.
              </p>
            </div>

            {/* CEO */}
            <div className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto overflow-hidden">
                   <div className="w-full  flex items-center justify-center text-4xl text-white">
                      <Image src="/manoj.jpg" alt="manoj" width={128} height={100} className="object-cover w-full h-full"/>
                    </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CEO
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Manoj Nagpure</h4>
              <p className="text-gray-600 text-sm mb-4">Overall Operations & Growth Strategy</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Leader As CEO that Transforming Resicode&#8217;s vision into reality with strategic leadership and advanced technology.
              </p>
            </div>

            {/* CMO */}
            <div className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto overflow-hidden">
                   <div className="w-full  flex items-center justify-center text-4xl text-white">
                      <Image src="/aditya.jpg" alt="aditya" width={128} height={100} className="object-cover w-full h-full"/>
                    </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CMO
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Aditya Rahangadale</h4>
              <p className="text-gray-600 text-sm mb-4">Marketing & Brand Strategy</p>
              <p className="text-gray-500 text-sm leading-relaxed">
              Visionary marketing leader driving brand growth and customer engagement at Resicode through innovative strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technical Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Senior Developer */}
                       <div className="group text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                         <div className="w-20 h-20 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mx-auto mb-3 overflow-hidden">
                           <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                               <Image src="/devesh.jpg" alt="Wasim" width={128} height={128} className="object-cover w-full h-full"/>
                           </div>
                         </div>
                         <h4 className="font-bold text-gray-900 mb-1">Devesh Wadibhasme</h4>
                         <p className="text-gray-600 text-xs mb-2">Full-Stack Developer</p>
                         <p className="text-gray-500 text-xs leading-relaxed">
                           Expert in React, Node.js, and web solutions.
                         </p>
                       </div>
           
                       {/* Frontend Developer */}
                       <div className="group text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                         <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full mx-auto mb-3 overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                               <Image src="/rishabh.jpg" alt="Wasim" width={128} height={128} className="object-cover w-full h-full"/>
                           </div>
                         </div>
                         <h4 className="font-bold text-gray-900 mb-1">Rishabh</h4>
                         <p className="text-gray-600 text-xs mb-2">Frontend Developer</p>
                         <p className="text-gray-500 text-xs leading-relaxed">
                           Specializes in creating beautiful, responsive user interfaces.
                         </p>
                       </div>
           
                       {/* Backend Developer */}
                       <div className="group text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                         <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-3 overflow-hidden">
                           <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                               <Image src="/wasim.jpg" alt="Wasim" width={128} height={128} className="object-cover w-full h-full"/>
                           </div>
                         </div>
                         <h4 className="font-bold text-gray-900 mb-1">Wasim Sheikh</h4>
                         <p className="text-gray-600 text-xs mb-2">MERN Stack Developer</p>
                         <p className="text-gray-500 text-xs leading-relaxed">
                           UI / UX Designs and server-side logic expert.
                         </p>
                       </div>
           
                       {/* DevOps Engineer */}
                       <div className="group text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                         <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-red-300 rounded-full mx-auto mb-3 overflow-hidden">
                           <div className="w-full flex items-center justify-center text-4xl text-white">
                               <Image src="/manoj.jpg" alt="Wasim" width={128} height={100} className="object-cover w-full h-full"/>
                           </div>
                         </div>
                         <h4 className="font-bold text-gray-900 mb-1">Manoj Nagpure </h4>
                         <p className="text-gray-600 text-xs mb-2">FrontEnd Developer</p>
                         <p className="text-gray-500 text-xs leading-relaxed">
                           Creating Beautiful FrontEnd Websites using Frameworks and Liabraries
                         </p>
                       </div>
          </div>
        </div>     
      </div>
    </section>

{/* Why Choose Resicode? */}
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 rounded-full animate-pulse"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Resicode</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites, we build <span className="font-semibold text-white">solutions that help your business grow</span> and succeed in the digital world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1: Experience */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                Proven Experience
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With 3+ years and 50+ successful projects, we bring proven expertise to every engagement.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Feature 2: Quality */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                Quality First
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We never compromise on quality. Every project undergoes rigorous testing and quality assurance.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-blue-400/10 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Feature 3: Support */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Round-the-clock support ensures your business never faces downtime or technical issues alone.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Feature 4: Innovation */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-180 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                Cutting-Edge Innovation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We stay ahead of technology trends to deliver future-proof solutions that give you a competitive edge.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-400/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Feature 5: Custom Solutions */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                Tailored Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every project is customized to your unique business needs, goals, and target audience.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-400/10 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Feature 6: Results-Driven */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:translate-y-2 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                Results-Driven Approach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We focus on delivering measurable results that contribute directly to your business growth and success.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-400/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience the Resicode Difference?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join 10 + satisfied clients who have transformed their digital presence with our expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}