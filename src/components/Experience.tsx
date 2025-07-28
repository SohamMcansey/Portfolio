'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Migrated legacy systems to modern tech stack'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateLab',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern JavaScript frameworks and cloud technologies.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced bug reports by 35% through comprehensive testing',
        'Collaborated with UX/UI team to improve user experience',
        'Integrated third-party APIs and payment systems'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe', 'GraphQL']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Focused on creating engaging user interfaces and optimizing frontend performance for e-commerce platforms.',
      achievements: [
        'Improved page load speed by 50%',
        'Implemented responsive design across all platforms',
        'Increased conversion rate by 25% through UX improvements',
        'Developed component library used across multiple projects'
      ],
      technologies: ['React', 'Redux', 'SCSS', 'Webpack', 'Jest', 'Cypress']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      details: 'Graduated Magna Cum Laude with focus on Software Engineering and Web Development',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      school: 'CodeAcademy Pro',
      location: 'Online',
      period: '2018',
      details: 'Intensive 6-month program covering modern web development technologies',
      gpa: 'Certificate of Completion'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'React Developer Certification',
    'Node.js Certified Developer'
  ];

  return (
    <section id="experience" className="py-8" ref={ref}>
      <div className="mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional journey and educational background
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 flex items-center"
          >
            <Building className="w-8 h-8 mr-3 text-blue-400" />
            Work Experience
          </motion.h3>

          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Content */}
                <div className="glass p-8 rounded-xl w-full group hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <p className="text-blue-400 text-lg font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 mt-2 lg:mt-0 lg:text-right">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl font-bold text-white mb-8 flex items-center"
            >
              <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 font-semibold">{edu.school}</p>
                    </div>
                    <div className="text-gray-400 mt-2 sm:mt-0 sm:text-right">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.details}</p>
                  <p className="text-blue-400 font-medium">{edu.gpa}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl font-bold text-white mb-8 flex items-center"
            >
              <Award className="w-8 h-8 mr-3 text-blue-400" />
              Certifications
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-6 rounded-xl"
            >
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Award className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {cert}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
