"use client";

import { motion } from "framer-motion";
import {
	Github,
	Linkedin,
	Twitter,
	Mail,
	Heart,
	ArrowUp,
	Globe,
	Code,
	Server,
	Database,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
	const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: Github, href: "https://github.com/SohamDas2003", label: "GitHub" },
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/in/soham2003/",
			label: "LinkedIn",
		},
		{ icon: Mail, href: "mailto:sohamdas704@gmail.com", label: "Email" },
	];

	const quickLinks = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Experience", href: "#experience" },
		{ name: "Contact", href: "#contact" },
	];

	const techStack = [
		{ name: "Python", icon: Code },
		{ name: "Django", icon: Server },
		{ name: "Java", icon: Code },
		{ name: "Spring Boot", icon: Server },
		{ name: "MySQL", icon: Database },
		{ name: "AWS", icon: Globe },
	];

	return (
		<footer className="bg-black/40 border-t border-white/10 relative overflow-hidden">
			<div className="mx-auto px-6 py-16 max-w-7xl">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Brand Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						{/* Profile Image */}
						<div className="flex items-center space-x-4 mb-4">
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg flex-shrink-0">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-0.5">
									<div className="w-full h-full rounded-full overflow-hidden">
										<Image
											src="/Soham.jpg"
											alt="Soham Das Profile Picture"
											width={64}
											height={64}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</motion.div>
							<h2 className="text-3xl font-bold gradient-text">Soham Das</h2>
						</div>

						<p className="text-gray-400 mb-4 leading-relaxed">
							Full Stack Developer from Bhayandar, Mumbai. Passionate about
							building scalable digital experiences using Python, Java, and
							cloud technologies.
						</p>
						<p className="text-gray-500 text-sm mb-2">📍 Mumbai, India</p>

						<div className="flex space-x-3">
							{socialLinks.map((social, index) => (
								<motion.a
									key={index}
									href={social.href}
									whileHover={{ scale: 1.2, y: -3 }}
									whileTap={{ scale: 0.9 }}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
									aria-label={social.label}>
									<social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<h4 className="text-lg font-semibold text-white mb-4">
							Quick Links
						</h4>
						<ul className="grid grid-cols-2 gap-2">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<button
										onClick={() => {
											const element = document.querySelector(link.href);
											if (element) {
												element.scrollIntoView({ behavior: "smooth" });
											}
										}}
										className="text-gray-400 hover:text-white hover:translate-x-1 transform transition-all duration-300 text-sm">
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Tech Stack */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<h4 className="text-lg font-semibold text-white mb-4">
							Technologies
						</h4>
						<ul className="space-y-2">
							{techStack.map((tech, index) => (
								<li
									key={index}
									className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300">
									<tech.icon className="w-4 h-4 text-blue-400" />
									<span>{tech.name}</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Back to Top & CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-col justify-between">
						<div className="space-y-4">
							<h4 className="text-lg font-semibold text-white">
								Let’s Connect
							</h4>
							<p className="text-sm text-gray-400">
								Open to freelance, internships, or collaborations. Let’s build
								something great together!
							</p>
						</div>

						<motion.button
							onClick={scrollToTop}
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="mt-6 flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
							<ArrowUp className="w-4 h-4" />
							<span>Back to Top</span>
						</motion.button>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6">
					<div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center space-x-2">
						<span>© {currentYear} Soham Das</span>
						<Heart className="w-4 h-4 text-red-500 animate-pulse" />
						<span>All rights reserved.</span>
					</div>
				</motion.div>
			</div>

			{/* Floating Background Particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(10)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
						initial={{
							x: Math.min(
								Math.random() * windowSize.width,
								windowSize.width - 10
							),
							y: Math.random() * 200,
						}}
						animate={{
							x: Math.min(
								Math.random() * windowSize.width,
								windowSize.width - 10
							),
							y: Math.random() * 200,
						}}
						transition={{
							duration: Math.random() * 20 + 20,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				))}
			</div>
		</footer>
	);
};

export default Footer;
