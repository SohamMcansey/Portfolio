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
      title: 'Mern Stack Developer',
      company: 'Mcansey IT Services Pvt Ltd',
      location: 'Mumbai, India',
      period: 'June 2025 - Present',
      description: 'Leading development of scalable web applications using Next.js, Node.js, and AWS.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Migrated legacy systems to modern tech stack'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript', 'PostgreSQL']
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      school: 'Aditya Institute of Management Studies and Research, Borivali',
      location: 'Mumbai, India',
      period: '2024-2026',
      details: 'Currently pursuing MCA with focus on Software Development and Advanced Computing'
    },
    {
      id: 2,
      degree: 'Bachelor of Commerce (BCom)',
      school: 'Shankar Narayan College, Bhayandar',
      location: 'Mumbai, India',
      period: '2021-2024',
      details: 'Completed Bachelor of Commerce with excellent academic performance'
    },
    {
      id: 3,
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Shankar Narayan College, Bhayandar',
      location: 'Mumbai, India',
      period: '2019-2021',
      details: 'Completed Higher Secondary education with strong academic foundation'
    },
    {
      id: 4,
      degree: 'Secondary School Certificate (SSC)',
      school: 'St. Xavier\'s High School, Mira Road',
      location: 'Mumbai, India',
      period: '2018-2019',
      details: 'Completed Secondary education with good academic performance'
    }
  ];

  const certifications = [
    'Full Stack Web Development with AWS - IT Vedant',
    'Python for Web Developers - IBM CEP',
    'Computer Technology - Raj Software',
    'Spring Framework - LearnQuest, Coursera'
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
