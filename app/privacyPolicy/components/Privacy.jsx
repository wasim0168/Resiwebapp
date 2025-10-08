// app/privacy/page.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

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

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(null);

  const policySections = [
    {
      id: 'information-collected',
      title: 'Information We Collect',
      icon: '📊',
      content: {
        personal: [
          'Full name and contact details',
          'Email address and phone number',
          'Business information and requirements',
          'Project specifications and preferences',
          'Billing and payment information'
        ],
        nonPersonal: [
          'Browser type and version',
          'IP address and device information',
          'Cookies and usage data',
          'Website interaction patterns',
          'Referral sources and campaign data'
        ]
      }
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: '🎯',
      content: {
        uses: [
          'Provide and improve our web development services',
          'Respond to inquiries and provide customer support',
          'Project communication, updates, and collaboration',
          'Billing, invoicing, and payment processing',
          'Marketing communications (with your explicit consent)',
          'Personalize user experience and service recommendations'
        ]
      }
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking Technologies',
      icon: '🍪',
      content: {
        description: 'Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand user preferences.',
        types: [
          'Essential cookies for website functionality',
          'Analytics cookies for performance monitoring',
          'Preference cookies for user settings',
          'Marketing cookies for relevant content'
        ],
        control: 'You can disable cookies through your browser settings. However, this may affect some website functionalities.'
      }
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Disclosure',
      icon: '🤝',
      content: {
        statement: 'We do not sell, trade, or rent your personal information to third parties. We only share data under the following circumstances:',
        scenarios: [
          'With trusted service providers (payment gateways, hosting providers)',
          'For legal compliance and law enforcement requirements',
          'To protect our rights, property, or safety',
          'With your explicit consent for specific services'
        ],
        tools: [
          'Payment processors (Stripe, PayPal)',
          'Analytics tools (Google Analytics)',
          'Communication platforms (Email services)',
          'Project management tools'
        ]
      }
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: '🔒',
      content: {
        measures: [
          'End-to-end encryption for sensitive data',
          'Secure servers with regular security updates',
          'Restricted access to authorized personnel only',
          'Regular security audits and vulnerability assessments',
          'Data backup and disaster recovery protocols',
          'Employee training on data protection practices'
        ]
      }
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      icon: '🔗',
      content: {
        disclaimer: 'Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites.',
        recommendation: 'We encourage you to review the privacy policies of any external sites you visit through our links.'
      }
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: '⚖️',
      content: {
        rights: [
          'Access your personal data we hold',
          'Request correction of inaccurate information',
          'Delete your personal data (Right to be forgotten)',
          'Object to processing of your data',
          'Data portability to another service',
          'Opt-out of marketing communications',
          'Withdraw consent at any time'
        ],
        contact: 'To exercise any of these rights, please contact us using the information provided below.'
      }
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Policy',
      icon: '🔄',
      content: {
        updates: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
        notification: 'We will notify users of significant changes through email or website announcements.',
        lastUpdated: 'Octomber 2025'
      }
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed information about how we protect and handle your data with transparency and care.
            </p>
          </AnimatedSection>

          {/* Policy Sections Accordion */}
          <div className="space-y-6">
            {policySections.map((section, index) => (
              <AnimatedSection key={section.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  {/* Section Header */}
                  <motion.div
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl text-white"
                        >
                          {section.icon}
                        </motion.div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {index + 1} of {policySections.length} sections
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Section Content */}
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6">
                        {/* Information We Collect */}
                        {section.id === 'information-collected' && (
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                <span className="text-blue-500 mr-2">👤</span>
                                Personal Information
                              </h4>
                              <ul className="space-y-2">
                                {section.content.personal.map((item, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center text-gray-700"
                                  >
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    {item}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                <span className="text-green-500 mr-2">📈</span>
                                Non-Personal Information
                              </h4>
                              <ul className="space-y-2">
                                {section.content.nonPersonal.map((item, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center text-gray-700"
                                  >
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                    {item}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* How We Use Your Information */}
                        {section.id === 'information-use' && (
                          <div className="space-y-4">
                            <ul className="space-y-3">
                              {section.content.uses.map((use, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start text-gray-700"
                                >
                                  <span className="text-green-500 mr-3 mt-1">✓</span>
                                  {use}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Cookies & Tracking */}
                        {section.id === 'cookies' && (
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                              {section.content.description}
                            </p>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h5>
                              <ul className="space-y-2">
                                {section.content.types.map((type, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                    {type}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <p className="text-yellow-800 text-sm">
                                <span className="font-semibold">Note:</span> {section.content.control}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Data Sharing & Disclosure */}
                        {section.id === 'data-sharing' && (
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                              {section.content.statement}
                            </p>
                            <ul className="space-y-2">
                              {section.content.scenarios.map((scenario, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                  {scenario}
                                </li>
                              ))}
                            </ul>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">Third-Party Tools We Use:</h5>
                              <div className="flex flex-wrap gap-2">
                                {section.content.tools.map((tool, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Data Security */}
                        {section.id === 'data-security' && (
                          <div className="space-y-4">
                            <ul className="space-y-3">
                              {section.content.measures.map((measure, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start text-gray-700"
                                >
                                  <span className="text-green-500 mr-3 mt-1">🛡️</span>
                                  {measure}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Third-Party Links */}
                        {section.id === 'third-party-links' && (
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                              {section.content.disclaimer}
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <p className="text-blue-800 text-sm">
                                <span className="font-semibold">Recommendation:</span> {section.content.recommendation}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* User Rights */}
                        {section.id === 'user-rights' && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {section.content.rights.map((right, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                                >
                                  <span className="text-blue-500 text-lg">✓</span>
                                  <span className="text-gray-700 text-sm">{right}</span>
                                </motion.div>
                              ))}
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                              <p className="text-green-800 text-sm">
                                <span className="font-semibold">Contact Us:</span> {section.content.contact}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Policy Changes */}
                        {section.id === 'policy-changes' && (
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                              {section.content.updates}
                            </p>
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <p className="text-purple-800">
                                <span className="font-semibold">Notification:</span> {section.content.notification}
                              </p>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-700">
                              <span className="text-lg">📅</span>
                              <span>Current version last updated: <strong>{section.content.lastUpdated}</strong></span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact Information */}
          <AnimatedSection className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h3>
              <p className="text-blue-100 mb-6">
                Contact our privacy team for any questions or concerns about your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:privacy@resicode.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  📧 Email Privacy Team
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  💬 Contact Form
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}