// components/AboutSection.jsx
const AboutSection = () => {
  return (
    <section id="about" className="py-20  bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Resicode</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <em> " Transforming ideas into powerful digital solutions that drive business growth and innovation. "</em>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Main About Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-blue-600">
              Who We Are... ?
            </h3>
            <p className="text-lg text-gray-700 text-justify ">
              Resicode is a premier web development company dedicated to crafting modern, 
              scalable digital solutions for businesses of all sizes. Founded with a passion 
              for innovation and excellence, we combine technical expertise with creative 
              vision to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-700 text-justify ">
              Our team of skilled developers, designers, and strategists work collaboratively 
              to transform your ideas into robust web applications that not only look great 
              but also perform flawlessly and drive measurable business outcomes.
            </p>
            <p className="text-lg text-gray-700 text-justify ">
              We believe in building long-term partnerships with our clients, providing 
              ongoing support and guidance to ensure your digital presence evolves with 
              your business needs.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Vision */}
          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transform hover:-translate-y-3 transition duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading web development partner for businesses seeking innovative, 
              scalable, and future-proof digital solutions that drive sustainable growth 
              and competitive advantage.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transform hover:-translate-y-3 transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Empower businesses with cutting-edge web solutions that enhance their digital 
              presence, streamline operations, and create meaningful connections with 
              their audience through technology.
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transform hover:-translate-y-3 transition duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Innovation, Quality, Transparency, Collaboration, and Client Success. 
              We believe in delivering excellence while building trust-based relationships.
            </p>
          </div>
        </div>

        {/* Why Choose Resicode */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Choose Resicode?</h3>
            <p className="text-blue-100 text-lg">
              Discover what sets us apart in the competitive web development landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Trust */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Trust & Reliability</h4>
              <p className="text-blue-100">
                We build trust through transparent communication, reliable delivery, 
                and long-term partnerships. Your success is our priority.
              </p>
            </div>

            {/* Expertise */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Technical Expertise</h4>
              <p className="text-blue-100">
                Our team stays ahead of technology trends, ensuring your projects 
                are built with the latest, most efficient tools and frameworks.
              </p>
            </div>

            {/* Affordability */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Cost-Effective Solutions</h4>
              <p className="text-blue-100">
                Premium quality doesn't have to mean premium prices. We offer 
                competitive pricing without compromising on quality or service.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
            <div>
              <div className="text-2xl font-bold">Fast Delivery</div>
              <div className="text-blue-100">Quick turnaround times</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7 Support</div>
              <div className="text-blue-100">Always available for you</div>
            </div>
            <div>
              <div className="text-2xl font-bold">SEO Friendly</div>
              <div className="text-blue-100">Built for visibility</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Scalable</div>
              <div className="text-blue-100">Grows with your business</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your digital presence?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;