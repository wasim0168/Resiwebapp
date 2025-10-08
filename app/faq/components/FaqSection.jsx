// components/FAQAccordion.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQAccordion () {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestions, setOpenQuestions] = useState({});

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: '🤔',
      description: 'Common questions about Resicode and our services',
      questions: [
        {
          id: 'gen-1',
          question: 'What is Resicode and what do you do?',
          answer: 'Resicode is a web development company specializing in creating modern, scalable websites and web applications. We help businesses establish their online presence with custom solutions including web development, e-commerce, UI/UX design, and ongoing maintenance.'
        },
        {
          id: 'gen-2',
          question: 'How long has Resicode been in business?',
          answer: 'We have been serving clients for over 3 years, successfully delivering 50+ projects with a 98% client satisfaction rate. Our experience spans across various industries and business sizes.'
        },
        {
          id: 'gen-3',
          question: 'What makes Resicode different from other web development companies?',
          answer: 'We focus on building long-term partnerships rather than one-off projects. Our approach combines technical expertise with business understanding, ensuring that every solution we build contributes directly to your business growth and success.'
        },
        {
          id: 'gen-4',
          question: 'Do you work with startups and small businesses?',
          answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. We offer scalable solutions that grow with your business and provide flexible engagement models to suit different budgets and requirements.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Projects',
      icon: '🛠️',
      description: 'Questions about our services and project process',
      questions: [
        {
          id: 'serv-1',
          question: 'What web development services do you offer?',
          answer: 'We offer comprehensive web development services including: custom website development, e-commerce solutions, web applications, UI/UX design, SEO optimization, website maintenance, and custom software solutions tailored to your specific needs.'
        },
        {
          id: 'serv-2',
          question: 'How long does a typical web development project take?',
          answer: 'Project timelines vary based on complexity. A basic website typically takes 2-4 weeks, e-commerce sites 4-8 weeks, and custom web applications 6-12 weeks. We provide detailed timelines during the planning phase after understanding your requirements.'
        },
        {
          id: 'serv-3',
          question: 'Do you provide website maintenance after launch?',
          answer: 'Yes, we offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, backups, and technical support. We believe in building long-term relationships with our clients.'
        },
        {
          id: 'serv-4',
          question: 'Can you work with our existing design or do you create new designs?',
          answer: 'We can work with both! If you have existing designs, we can implement them. If you need new designs, our UI/UX team will create custom designs that align with your brand and business goals.'
        },
        {
          id: 'serv-5',
          question: 'What technologies do you use for development?',
          answer: 'We use modern technologies including React, Next.js, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best stack for each project based on requirements and scalability needs.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Payment',
      icon: '💰',
      description: 'Information about pricing, packages, and payment options',
      questions: [
        {
          id: 'price-1',
          question: 'How much does a website cost?',
          answer: 'Website costs vary based on complexity: Basic websites start at ₹25,000, e-commerce sites from ₹50,000, and custom web applications from ₹1,00,000. We provide detailed quotes after understanding your specific requirements.'
        },
        {
          id: 'price-2',
          question: 'What payment options do you accept?',
          answer: 'We accept bank transfers, UPI payments, and online payment gateways. We offer flexible payment plans with 50% upfront and 50% upon completion for most projects. Enterprise projects may have customized payment schedules.'
        },
        {
          id: 'price-3',
          question: 'Do you offer any discounts or packages?',
          answer: 'Yes, we offer package deals for combined services (web development + SEO + maintenance) and special rates for startups and non-profit organizations. We also provide seasonal promotions throughout the year.'
        },
        {
          id: 'price-4',
          question: 'Is there any hidden cost involved?',
          answer: 'No hidden costs. We provide transparent pricing with detailed breakdowns. Any additional costs for third-party services (domain, hosting, premium plugins) are discussed and approved upfront before implementation.'
        },
        {
          id: 'price-5',
          question: 'What is your refund policy?',
          answer: 'We offer a satisfaction guarantee. If you\'re not happy with our work during the development phase, we\'ll make it right. Once the project is completed and delivered, refunds are evaluated on a case-by-case basis.'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      icon: '🔧',
      description: 'Questions about ongoing support and maintenance services',
      questions: [
        {
          id: 'sup-1',
          question: 'What kind of support do you provide after project completion?',
          answer: 'We provide 30 days of free support after project launch. After that, we offer various support packages including bug fixes, updates, security monitoring, and technical assistance. Our support team is available via email, phone, and chat.'
        },
        {
          id: 'sup-2',
          question: 'How quickly do you respond to support requests?',
          answer: 'We typically respond within 2 hours during business hours (9 AM - 6 PM, Mon-Fri). For critical issues, we provide emergency support with faster response times. Our SLA guarantees response within specified timeframes based on issue priority.'
        },
        {
          id: 'sup-3',
          question: 'Do you provide training on how to use the website?',
          answer: 'Yes, we provide comprehensive training sessions for your team. This includes content management system training, basic website maintenance, and analytics understanding. We also provide detailed documentation and video tutorials.'
        },
        {
          id: 'sup-4',
          question: 'What is included in your maintenance packages?',
          answer: 'Our maintenance packages include: regular backups, security updates, performance optimization, content updates, SEO monitoring, and technical support. We offer different tiers to match your business needs and budget.'
        },
        {
          id: 'sup-5',
          question: 'Can we update the website content ourselves?',
          answer: 'Absolutely! We build websites with user-friendly content management systems (like WordPress or custom admin panels) that allow you to easily update content, add blog posts, upload images, and manage products without technical knowledge.'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const questionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions organized by categories for easy navigation
          </p>
        </motion.div>

        {/* FAQ Categories Accordion */}
        <div className="space-y-6">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Category Header */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  openCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl text-white"
                    >
                      {category.icon}
                    </motion.div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 mt-1">{category.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {category.questions.length} questions
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Category Questions */}
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 space-y-4">
                      {category.questions.map((qa, questionIndex) => (
                        <motion.div
                          key={qa.id}
                          variants={questionVariants}
                          transition={{ delay: questionIndex * 0.1 }}
                          className="bg-gray-50 rounded-xl hover:bg-white transition-all duration-300 border border-gray-200"
                        >
                          {/* Question */}
                          <div
                            className="p-4 cursor-pointer flex items-center justify-between"
                            onClick={() => toggleQuestion(qa.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"
                              >
                                <span className="text-sm font-bold">Q</span>
                              </motion.div>
                              <h4 className="font-semibold text-gray-900 text-lg pr-4">
                                {qa.question}
                              </h4>
                            </div>
                            <motion.div
                              animate={{ rotate: openQuestions[qa.id] ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-gray-400 flex-shrink-0"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>

                          {/* Answer */}
                          <AnimatePresence>
                            {openQuestions[qa.id] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-4">
                                  <div className="flex items-start space-x-3">
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.2 }}
                                      className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mt-1 flex-shrink-0"
                                    >
                                      <span className="text-sm font-bold">A</span>
                                    </motion.div>
                                    <p className="text-gray-700 leading-relaxed pt-1">
                                      {qa.answer}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>

                    {/* Category Footer */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border-t border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-blue-700">
                          <span>💡</span>
                          <span className="text-sm font-medium">Still have questions about {category.title}?</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                        >
                          Ask Now
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Can't Find Your Answer?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Our support team is here to help you with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Support
              </motion.button>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

