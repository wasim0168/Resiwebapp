// components/FeaturedProjects.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = [
    {
      id: 1,
      title: "A Trading Website For Ather Trading",
      client: "Ather Traders",
      industry: "Wholeseller of Solar Panel",
      image: "/ather.png",
      features: [
        "HTML & CSS",
        "Swiper.js",
        "Tailwind CSS",
        "HSTS Security",
        "Google Maps ",
        "CDN Links"
      ],
      liveLink: "https://athertrading.netlify.app/",
      githubLink: "#",
      status: "Completed",
      duration: "2 months",
      teamSize: "2 developers"
    },
    {
      id: 2,
      title: "Healthcare Management System for MedCare",
      client: "MedCare Hospitals",
      industry: "Healthcare",
      image: "/api/placeholder/600/400",
      features: [
        "React & TypeScript",
        "Python Django",
        "PostgreSQL",
        "WebRTC Video Calls",
        "HIPAA Compliance",
        "Real-time Updates"
      ],
      liveLink: "#",
      githubLink: "#",
      status: "Completed",
      duration: "5 months",
      teamSize: "6 developers"
    },
    {
      id: 3,
      title: "Learning Management System for EduTech Pro",
      client: "EduTech Pro",
      industry: "Education",
      image: "/api/placeholder/600/400",
      features: [
        "Next.js & Tailwind",
        "Firebase Backend",
        "Video Streaming",
        "Progress Analytics",
        "Mobile App",
        "Certificate Generation"
      ],
      liveLink: "https://edutech-pro.com",
      githubLink: "#",
      status: "Completed",
      duration: "4 months",
      teamSize: "5 developers"
    },
    {
      id: 4,
      title: "Real Estate Portal for PrimeProperties",
      client: "PrimeProperties",
      industry: "Real Estate",
      image: "/api/placeholder/600/400",
      features: [
        "Vue.js Frontend",
        "Laravel Backend",
        "Google Maps API",
        "Virtual Tours",
        "CRM Integration",
        "Mobile Responsive"
      ],
      liveLink: "https://primeproperties.com",
      githubLink: "#",
      status: "Completed",
      duration: "3 months",
      teamSize: "4 developers"
    },
    {
      id: 5,
      title: "Food Delivery App for QuickBites",
      client: "QuickBites",
      industry: "Food & Beverage",
      image: "/api/placeholder/600/400",
      features: [
        "React Native",
        "Node.js & Express",
        "MongoDB Atlas",
        "Real-time Tracking",
        "Push Notifications",
        "AI Recommendations"
      ],
      liveLink: "#",
      githubLink: "#",
      status: "Completed",
      duration: "6 months",
      teamSize: "8 developers"
    },
    {
      id: 6,
      title: "Corporate Website for TechInnovate",
      client: "TechInnovate Solutions",
      industry: "Technology",
      image: "/api/placeholder/600/400",
        features: [
        "Next.js & Tailwind",
        "Headless CMS",
        "Google Analytics",
        "A/B Testing",
        "SEO Optimized",
        "Fast Loading"
      ],
      liveLink: "https://techinnovate.com",
      githubLink: "#",
      status: "Completed",
      duration: "2 months",
      teamSize: "3 developers"
    }
  ];

  const industryIcons = {
    "Retail & E-commerce": "🛍️",
    "Healthcare": "🏥",
    "Education": "🎓",
    "Real Estate": "🏠",
    "Food & Beverage": "🍕",
    "Technology": "💻"
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <em> " Explore our recent work across various industries. Each project tells a story of innovation, collaboration, and success. "</em>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  variants={imageVariants}
                  className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
                >
                 <Image 
                  src={project.image}   // 👈 yaha variable use ho raha hai
                  alt={project.title}
                  width={500}
                  height={400}
                  className="rounded-lg"
                /> 
                </motion.div>
                
                {/* Project Status Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                >
                  {project.status}
                </motion.div>

                {/* Industry Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                >
                  <span className="mr-1">{industryIcons[project.industry]}</span>
                  {project.industry}
                </motion.div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                      >
                        🌐 Live Demo
                      </motion.a>
                    )}
                    
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title & Client */}
                <div className="mb-4">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 text-sm flex items-center"
                  >
                    <span className="mr-2">👤</span>
                    Client: {project.client}
                  </motion.p>
                </div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-4"
                >
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
                    <span className="mr-2">🛠️</span>
                    Tech Stack & Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium hover:bg-blue-200 transition-colors"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Meta */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-4"
                >
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {project.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">👥</span>
                      {project.teamSize}
                    </span>
                  </div>
                  
                </motion.div>
              </div>

              {/* Hover Effect Line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;