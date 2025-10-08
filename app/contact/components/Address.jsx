// components/ContactLocation.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactLocation () {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const officeInfo = {
    address: "Momon Colony, Old Kampthee Road, Kalamna , Nagpur, Maharashtra - 440026",
    phone: "+91-9529468439",
    email: "office@resicode.com",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    landline: "+91-9764687625"
  };

  return (
    <>
      {/* Office Address Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            
            {/* Left Content - Office Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className=''>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 ">Office</span>
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 "></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                 <em>" Come meet us at our headquarters in Raipur. We'd love to discuss your project in person and show you around our creative space. "</em>
                </p>
              </div>

              {/* Office Details */}
               <div className="space-y-6">
                {/* Address */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-xl text-white">📍</span>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Office Address</h3>
                    <p className="text-gray-700 leading-relaxed">{officeInfo.address}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>Get Directions</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-lg">📞</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-700">{officeInfo.phone}</p>
                      <p className="text-gray-500 text-sm">Landline: {officeInfo.landline}</p>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-lg">📧</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-700">{officeInfo.email}</p>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-lg">🕒</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-700">{officeInfo.hours}</p>
                      <p className="text-gray-500 text-sm">Sunday: Closed</p>
                    </div>
                  </motion.div>

                  {/* Parking */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-lg">🅿️</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Parking</h4>
                      <p className="text-gray-700">Free parking available</p>
                      <p className="text-gray-500 text-sm">Secure premises</p>
                    </div>
                  </motion.div>
                </div>
  
              </div>
            </motion.div>

            {/* Right Content - Map Preview */}
            <motion.div variants={mapVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6 text-center h-96 flex items-center justify-center">
                  <div className="space-y-4">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      🗺️
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">Interactive Map</h3>
                    <p className="text-gray-600">Google Maps integration will be displayed here</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mt-4"
                    >
                      View Full Map
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-sm">⭐</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xs">🚗</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

