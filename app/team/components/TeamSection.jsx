// components/TeamSection.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      department: "Leadership",
      bio: "Visionary leader with 10+ years in tech industry. Passionate about innovation and team growth.",
      skills: ["Strategy", "Leadership", "Innovation"],
      icon: "👩‍💼",
      gradient: "from-purple-500 to-pink-500",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      department: "Technology",
      bio: "Full-stack developer and architect. Loves solving complex problems with elegant solutions.",
      skills: ["React", "Node.js", "AWS", "Architecture"],
      icon: "👨‍💻",
      gradient: "from-blue-500 to-cyan-500",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead UI/UX Designer",
      department: "Design",
      bio: "Creative designer focused on user-centered design and beautiful, functional interfaces.",
      skills: ["Figma", "UI/UX", "Prototyping", "Research"],
      icon: "🎨",
      gradient: "from-green-500 to-emerald-500",
      social: {
        linkedin: "#",
        dribbble: "#",
        email: "#"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Developer",
      department: "Development",
      bio: "Backend specialist with expertise in scalable systems and database architecture.",
      skills: ["Python", "PostgreSQL", "Docker", "API"],
      icon: "⚙️",
      gradient: "from-orange-500 to-red-500",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Frontend Developer",
      department: "Development",
      bio: "Frontend expert creating responsive and interactive user experiences with modern frameworks.",
      skills: ["React", "TypeScript", "Next.js", "Animation"],
      icon: "💻",
      gradient: "from-indigo-500 to-blue-500",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "DevOps Engineer",
      department: "Operations",
      bio: "Infrastructure specialist ensuring smooth deployments and optimal performance.",
      skills: ["AWS", "Kubernetes", "CI/CD", "Monitoring"],
      icon: "🚀",
      gradient: "from-teal-500 to-cyan-500",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Project Manager",
      department: "Management",
      bio: "Agile project manager ensuring projects are delivered on time and exceed expectations.",
      skills: ["Agile", "Scrum", "Planning", "Communication"],
      icon: "📊",
      gradient: "from-pink-500 to-rose-500",
      social: {
        linkedin: "#",
        email: "#"
      }
    },
    {
      id: 8,
      name: "James Wilson",
      role: "QA Engineer",
      department: "Quality Assurance",
      bio: "Detail-oriented tester ensuring every product meets the highest quality standards.",
      skills: ["Testing", "Automation", "Quality", "Documentation"],
      icon: "🔍",
      gradient: "from-yellow-500 to-amber-500",
      social: {
        linkedin: "#",
        email: "#"
      }
    }
  ];

  const departments = [
    { name: "Leadership", icon: "👑" },
    { name: "Development", icon: "💻" },
    { name: "Design", icon: "🎨" },
    { name: "Operations", icon: "⚙️"},
    { name: "Management", icon: "📊"}
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="py-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Dream Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          <em> " The passionate professionals who turn ideas into exceptional digital experiences "</em>
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {departments.map((dept, index) => (
            <motion.button
              key={dept.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <span className="text-2xl">{dept.icon}</span>
              <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {dept.name}
              </span>
              
            </motion.button>
          ))}
        </motion.div>

        
      </div>
      {/* Meet Our Team */}
    <section id="meet-our-team" className="py-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Chairman */}
            <div className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                    <Image src="/wasim.jpg" alt="Wasim" width={128} height={128} className="object-cover w-full h-full"/>
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
                    <Image src="/manoj.jpg" alt="Wasim" width={128} height={100} className="object-cover w-full h-full"/>
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
                  <div className="w-full h-full flex items-center justify-center text-4xl text-white">
                    <Image src="/aditya.jpg" alt="Wasim" width={128} height={128} className="object-cover w-full h-full"/>
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
    </section>

    
  );
};

export default TeamSection;