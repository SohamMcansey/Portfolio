'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully! You should receive a confirmation email shortly.');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Failed to send message. Please try again or contact me directly at sohamdas704@gmail.com');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sohamdas704@gmail.com',
      href: 'mailto:sohamdas704@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
    }
  ];

  const socialLinks = [
		{
			icon: Github,
			name: "GitHub",
			href: "https://github.com/SohamDas2003",
			color: "hover:text-gray-300",
		},
		{
			icon: Linkedin,
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/soham2003/",
			color: "hover:text-blue-400",
		},
		{
			icon: Instagram,
			name: "Instagram",
			href: "https://www.instagram.com/_sohamdas_/",
			color: "hover:text-purple-400",
		},
	];

  return (
    <section id="contact" className="py-8 bg-black/20" ref={ref}>
      <div className="mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Let&apos;s Talk</h3>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you&apos;re a company looking to hire, or you&apos;re a fellow developer 
              who wants to collaborate, don&apos;t hesitate to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Component = info.href ? motion.a : motion.div;
                return (
                  <Component
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group ${info.href ? 'cursor-pointer' : ''}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </Component>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
