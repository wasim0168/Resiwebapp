// app/terms/page.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(null);

  const termsSections = [
    {
      id: 'definitions',
      title: 'Definitions',
      icon: '📖',
      content: {
        items: [
          {
            term: 'Company',
            definition: 'Refers to Resicode, the service provider offering web development and digital solutions.',
            icon: '🏢'
          },
          {
            term: 'Client',
            definition: 'Any individual or entity using Resicode services, including website visitors and project clients.',
            icon: '👥'
          },
          {
            term: 'Services',
            definition: 'Web development, e-commerce solutions, UI/UX design, SEO optimization, maintenance, and related digital services.',
            icon: '🛠️'
          },
          {
            term: 'Deliverables',
            definition: 'Final products, code, designs, and materials provided to the client upon project completion.',
            icon: '📦'
          }
        ]
      }
    },
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: '✅',
      content: {
        description: 'By accessing our website, using our services, or engaging with Resicode, you automatically agree to be bound by these Terms & Conditions.',
        points: [
          'Use of website constitutes acceptance',
          'Service engagement implies agreement',
          'Continued use indicates ongoing acceptance',
          'If you disagree, please discontinue use immediately'
        ]
      }
    },
    {
      id: 'services',
      title: 'Services Provided',
      icon: '🎯',
      content: {
        services: [
          'Custom Website Development',
          'E-commerce Solutions & Online Stores',
          'UI/UX Design & Prototyping',
          'Search Engine Optimization (SEO)',
          'Website Maintenance & Support',
          'Web Application Development',
          'Digital Strategy Consulting'
        ],
        note: 'We reserve the right to modify, update, or discontinue any service at any time without prior notice.'
      }
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: '💰',
      content: {
        structure: [
          '50% advance payment to initiate projects',
          '40% upon milestone completion',
          '10% upon final delivery and acceptance',
          'Custom payment plans available for large projects'
        ],
        methods: ['Bank Transfer', 'UPI Payments', 'PayPal', 'Credit/Debit Cards'],
        refunds: 'Refunds are evaluated case-by-case. No refunds after project completion and delivery.'
      }
    },
    {
      id: 'client-responsibilities',
      title: 'Client Responsibilities',
      icon: '📋',
      content: {
        responsibilities: [
          'Provide accurate project requirements and specifications',
          'Submit content, images, and materials in timely manner',
          'Respond to queries and provide approvals promptly',
          'Ensure all provided materials are legally owned or licensed',
          'Not use services for illegal or prohibited activities',
          'Maintain confidentiality of project details'
        ]
      }
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: '💡',
      content: {
        clientRights: 'Full ownership of final deliverables transfers to client upon complete payment.',
        companyRights: 'Resicode retains rights to showcase completed work in our portfolio and marketing materials, unless otherwise agreed in writing.',
        exceptions: 'Third-party assets, frameworks, and licensed materials remain subject to their respective licenses.'
      }
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: '🤫',
      content: {
        agreement: 'Both parties agree to maintain confidentiality of sensitive information shared during project engagement.',
        scope: 'Includes business strategies, proprietary information, technical details, and project specifications.',
        duration: 'Confidentiality obligations continue even after project completion.'
      }
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: '⚖️',
      content: {
        disclaimer: 'Resicode shall not be held liable for:',
        exclusions: [
          'Third-party service issues (hosting, plugins, APIs)',
          'Data loss due to client-side errors or negligence',
          'Misuse of delivered website or application by client',
          'Delays caused by client-side factors',
          'Force majeure events beyond our control'
        ],
        maximum: 'Maximum liability limited to project fees paid.'
      }
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: '🚪',
      content: {
        companyRights: 'We may suspend or terminate services for:',
        terminationReasons: [
          'Breach of these terms and conditions',
          'Non-payment or delayed payments',
          'Illegal or prohibited use of services',
          'Failure to provide required information'
        ],
        clientRights: 'Clients may terminate with written notice. Refund eligibility depends on project stage.',
        notice: '30-day written notice required for project termination by client.'
      }
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: '🔗',
      content: {
        disclaimer: 'Our services may integrate with or link to third-party tools, platforms, and services.',
        liability: 'Resicode is not responsible for the content, functionality, or issues with third-party services.',
        recommendation: 'Review third-party terms and privacy policies when using integrated services.'
      }
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: '🔄',
      content: {
        rights: 'We reserve the right to modify these terms at any time without prior notice.',
        notification: 'Significant changes will be communicated via email or website announcements.',
        continuedUse: 'Continued use of services after changes constitutes acceptance of modified terms.',
        lastUpdated: 'Octomber 2025'
      }
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: '🌍',
      content: {
        jurisdiction: 'These terms are governed by and construed in accordance with the laws of India.',
        venue: 'Any disputes shall be subject to the exclusive jurisdiction of courts in Nagpur, Maharashtra.',
        compliance: 'Both parties agree to comply with applicable Indian laws and regulations.'
      }
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: '📞',
      content: {
        description: 'For any questions regarding these Terms & Conditions, please contact us:',
        methods: [
          'Email: legal@resicode.com',
          'Phone: +91 95294 68439',
          'Address: Memon Colony, kalamna , Nagpur, Maharashtra - 440026',
          'Website: www.resicode.com/contact'
        ],
        response: 'We typically respond to legal inquiries within 2 business days.'
      }
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
 
      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Agreement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive terms governing your use of Resicode services and website.
            </p>
          </AnimatedSection>

          {/* Terms Sections Accordion */}
          <div className="space-y-6">
            {termsSections.map((section, index) => (
              <AnimatedSection key={section.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  {/* Section Header */}
                  <motion.div
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-xl text-white"
                        >
                          {section.icon}
                        </motion.div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Section {index + 1} of {termsSections.length}
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
                  <AnimatePresence>
                    {activeSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6">
                          {/* Definitions */}
                          {section.id === 'definitions' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {section.content.items.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                                >
                                  <div className="flex items-center space-x-3 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="font-bold text-gray-900">{item.term}</h4>
                                  </div>
                                  <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.definition}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Acceptance of Terms */}
                          {section.id === 'acceptance' && (
                            <div className="space-y-4">
                              <p className="text-gray-700 leading-relaxed">
                                {section.content.description}
                              </p>
                              <ul className="space-y-3">
                                {section.content.points.map((point, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start text-gray-700"
                                  >
                                    <span className="text-green-500 mr-3 mt-1">✓</span>
                                    {point}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Services Provided */}
                          {section.id === 'services' && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {section.content.services.map((service, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                                  >
                                    <span className="text-blue-500">🛠️</span>
                                    <span className="text-gray-700">{service}</span>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                                <p className="text-yellow-800 text-sm">
                                  <span className="font-semibold">Note:</span> {section.content.note}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Payment Terms */}
                          {section.id === 'payment' && (
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Payment Structure</h4>
                                <ul className="space-y-2">
                                  {section.content.structure.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Accepted Payment Methods</h4>
                                <div className="flex flex-wrap gap-2">
                                  {section.content.methods.map((method, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                      {method}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-800 text-sm">
                                  <span className="font-semibold">Refund Policy:</span> {section.content.refunds}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Client Responsibilities */}
                          {section.id === 'client-responsibilities' && (
                            <div className="space-y-4">
                              <ul className="space-y-3">
                                {section.content.responsibilities.map((responsibility, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start text-gray-700"
                                  >
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    {responsibility}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Intellectual Property */}
                          {section.id === 'intellectual-property' && (
                            <div className="space-y-4">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h4 className="font-semibold text-green-900 mb-2">Client Rights</h4>
                                <p className="text-green-800">{section.content.clientRights}</p>
                              </div>
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-900 mb-2">Company Rights</h4>
                                <p className="text-blue-800">{section.content.companyRights}</p>
                              </div>
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <p className="text-yellow-800 text-sm">
                                  <span className="font-semibold">Note:</span> {section.content.exceptions}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Contact Information */}
                          {section.id === 'contact' && (
                            <div className="space-y-4">
                              <p className="text-gray-700 leading-relaxed">
                                {section.content.description}
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.content.methods.map((method, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                                  >
                                    <span className="text-blue-500 text-lg">📧</span>
                                    <span className="text-gray-700">{method}</span>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <p className="text-green-800">
                                  <span className="font-semibold">Response Time:</span> {section.content.response}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Other Sections */}
                          {!['definitions', 'acceptance', 'services', 'payment', 'client-responsibilities', 'intellectual-property', 'contact'].includes(section.id) && (
                            <div className="space-y-4">
                              {section.content.disclaimer && (
                                <p className="text-gray-700 leading-relaxed font-semibold">
                                  {section.content.disclaimer}
                                </p>
                              )}
                              {section.content.agreement && (
                                <p className="text-gray-700 leading-relaxed">
                                  {section.content.agreement}
                                </p>
                              )}
                              {section.content.rights && (
                                <p className="text-gray-700 leading-relaxed">
                                  {section.content.rights}
                                </p>
                              )}
                              {section.content.jurisdiction && (
                                <p className="text-gray-700 leading-relaxed">
                                  {section.content.jurisdiction}
                                </p>
                              )}

                              {/* Lists */}
                              {section.content.points && (
                                <ul className="space-y-2">
                                  {section.content.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {section.content.exclusions && (
                                <ul className="space-y-2">
                                  {section.content.exclusions.map((exclusion, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                      {exclusion}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {section.content.terminationReasons && (
                                <ul className="space-y-2">
                                  {section.content.terminationReasons.map((reason, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                      {reason}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {/* Additional Information */}
                              {section.content.scope && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                  <p className="text-blue-800 text-sm">
                                    <span className="font-semibold">Scope:</span> {section.content.scope}
                                  </p>
                                </div>
                              )}

                              {section.content.duration && (
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                  <p className="text-purple-800 text-sm">
                                    <span className="font-semibold">Duration:</span> {section.content.duration}
                                  </p>
                                </div>
                              )}

                              {section.content.maximum && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                  <p className="text-red-800 text-sm">
                                    <span className="font-semibold">Liability Limit:</span> {section.content.maximum}
                                  </p>
                                </div>
                              )}

                              {section.content.clientRights && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <p className="text-green-800">
                                    <span className="font-semibold">Client Rights:</span> {section.content.clientRights}
                                  </p>
                                </div>
                              )}

                              {section.content.notice && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                  <p className="text-yellow-800">
                                    <span className="font-semibold">Notice Period:</span> {section.content.notice}
                                  </p>
                                </div>
                              )}

                              {section.content.liability && (
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                  <p className="text-orange-800">
                                    <span className="font-semibold">Liability:</span> {section.content.liability}
                                  </p>
                                </div>
                              )}

                              {section.content.recommendation && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                  <p className="text-blue-800">
                                    <span className="font-semibold">Recommendation:</span> {section.content.recommendation}
                                  </p>
                                </div>
                              )}

                              {section.content.notification && (
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                  <p className="text-purple-800">
                                    <span className="font-semibold">Notification:</span> {section.content.notification}
                                  </p>
                                </div>
                              )}

                              {section.content.continuedUse && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <p className="text-green-800">
                                    <span className="font-semibold">Continued Use:</span> {section.content.continuedUse}
                                  </p>
                                </div>
                              )}

                              {section.content.venue && (
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                  <p className="text-gray-800">
                                    <span className="font-semibold">Legal Venue:</span> {section.content.venue}
                                  </p>
                                </div>
                              )}

                              {section.content.compliance && (
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                  <p className="text-indigo-800">
                                    <span className="font-semibold">Compliance:</span> {section.content.compliance}
                                  </p>
                                </div>
                              )}

                              {section.content.lastUpdated && (
                                <div className="flex items-center space-x-3 text-gray-700 mt-4">
                                  <span className="text-lg">📅</span>
                                  <span>Current version last updated: <strong>{section.content.lastUpdated}</strong></span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Agreement Confirmation */}
          <AnimatedSection className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Agreement Confirmation</h3>
              <p className="text-blue-100 mb-6">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-green-300"
                >
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">I Understand & Agree</span>
                </motion.div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  💬 Questions? Contact Us
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}