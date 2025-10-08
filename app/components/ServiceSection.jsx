// components/ServicesSection.jsx
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "Custom static and dynamic websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "E-commerce Development",
      description: "Complete online store solutions with secure payment gateways, inventory management, and seamless user journey.",
      features: ["Payment Integration", "Inventory Management", "Mobile Friendly"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "User-centered designs that create intuitive, engaging experiences and drive conversions for your business.",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Web App Development",
      description: "Scalable web applications with robust backend systems, real-time features, and cross-platform compatibility.",
      features: ["Real-time Features", "API Integration", "Progressive Web Apps"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "SEO & Website Maintenance",
      description: "Continuous optimization, security updates, and performance monitoring to keep your website at peak performance.",
      features: ["SEO Optimization", "Security Updates", "Performance Monitoring"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Tailored software solutions designed to meet your unique business requirements and workflow needs.",
      features: ["Custom Software", "API Development", "System Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-500  to-purple-700 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <em>" Comprehensive web solutions tailored to drive your business growth and digital success "</em>
          </p>
        </div>

        {/* Services Grid */}
        <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                flex overflow-x-auto space-x-4 md:flex-none md:overflow-x-visible scrollbar-hide">
            {services.map((service, index) => (
                <div 
                key={index}
                className="min-w-[310px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group p-6"
                >
                {/* Icon Container */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                    {service.icon}
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                    ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </button>
                </div>
                </div>
            ))}
            </div>


        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div> */}

        {/* Process Overview */}
        <div className="mt-16 text-center">
          <h3 className=" text-2xl  md:text-4xl font-bold   mb-8 bg-gradient-to-r from-blue-600  to-cyan-700 bg-clip-text text-transparent">Our Development Process</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900">Discovery</h4>
              <p className="text-sm text-gray-600">Understand your requirements</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900">Design</h4>
              <p className="text-sm text-gray-600">Create user-centric designs</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900">Development</h4>
              <p className="text-sm text-gray-600">Build with modern technologies</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900">Delivery</h4>
              <p className="text-sm text-gray-600">Launch and support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;