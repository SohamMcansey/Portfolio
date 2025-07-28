'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks like React, Next.js, and Vue.js.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and various databases.',
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development from concept to deployment.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and Flutter.',
    },
  ];

  return (
    <section id="about" className="py-8 bg-black/20" ref={ref}>
      <div className="mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Passionate Full Stack Developer
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                With over 5 years of experience in web development, I specialize in creating 
                modern, scalable applications that deliver exceptional user experiences. My 
                journey began with a curiosity for how things work on the web, and it has 
                evolved into a passion for crafting elegant solutions to complex problems.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies and best practices. Whether it&apos;s building a responsive 
                frontend or architecting a robust backend, I approach each project with 
                attention to detail and a commitment to excellence.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community 
                through blog posts and mentoring.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-6"
            >
              <div className="text-center p-4 glass rounded-lg">
                <h4 className="text-3xl font-bold text-blue-400 mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <h4 className="text-3xl font-bold text-blue-400 mb-2">5+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-6 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
