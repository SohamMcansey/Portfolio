'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
      github: '#',
      live: '#',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'Material-UI'],
      github: '#',
      live: '#',
      category: 'Full Stack',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS', 'Netlify'],
      github: '#',
      live: '#',
      category: 'Frontend',
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'A RESTful API for a social media platform with user authentication, post management, and real-time messaging capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'JWT', 'MongoDB', 'Socket.io', 'Cloudinary'],
      github: '#',
      live: '#',
      category: 'Backend',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing creative animations and smooth user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'TypeScript'],
      github: '#',
      live: '#',
      category: 'Frontend',
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course creation, student enrollment, progress tracking, and interactive quizzes.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS S3', 'Stripe'],
      github: '#',
      live: '#',
      category: 'Full Stack',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-8 bg-black/20" ref={ref}>
      <div className="mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentProject(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Project Image */}
              <div className="relative group">
                <motion.div
                  key={filteredProjects[currentProject]?.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Project Screenshot
                  </div>
                </motion.div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center">
                <motion.div
                  key={filteredProjects[currentProject]?.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {filteredProjects[currentProject]?.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {filteredProjects[currentProject]?.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {filteredProjects[currentProject]?.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={filteredProjects[currentProject]?.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={filteredProjects[currentProject]?.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-blue-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setCurrentProject(index)}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                Project Preview
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-400 bg-blue-600/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-300" />
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
