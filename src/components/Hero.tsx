"use client";

import { motion } from "framer-motion";
import {
	ChevronDown,
	Github,
	Linkedin,
	Mail,
	Download,
	Eye,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
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

	const scrollToNext = () => {
		const aboutSection = document.querySelector("#about");
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToContact = () => {
		const contactSection = document.querySelector("#contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-20 md:pt-0">
			{/* Background particles animation */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(50)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-blue-500 rounded-full"
						initial={{
							x: Math.min(
								Math.random() * windowSize.width,
								windowSize.width - 10
							),
							y: Math.min(
								Math.random() * windowSize.height,
								windowSize.height - 10
							),
							opacity: Math.random(),
						}}
						animate={{
							y: [
								null,
								Math.min(
									Math.random() * windowSize.height,
									windowSize.height - 10
								),
							],
							opacity: [null, Math.random()],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto">
					{/* Profile Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1, duration: 0.8 }}
						className="mb-8 flex justify-center">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
								<div className="w-full h-full rounded-full overflow-hidden">
									<Image
										src="/Soham.jpg"
										alt="Soham Das Profile Picture"
										width={192}
										height={192}
										className="w-full h-full object-cover"
										priority
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
						Hi, I&apos;m <span className="gradient-text">Soham Das</span>
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
						Full Stack Developer
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="text-base sm:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
						I craft exceptional digital experiences through clean code and
						innovative design. Passionate about creating scalable applications
						that make a difference.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-16 px-4 sm:px-0">
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="/Soham%20Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
							<Eye className="w-5 h-5" />
							<span>View Resume</span>
						</motion.a>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => scrollToContact()}
							className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 text-white font-semibold rounded-full hover:border-gray-400 transition-all duration-300 flex items-center justify-center space-x-2">
							<Mail className="w-5 h-5" />
							<span>Get In Touch</span>
						</motion.button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.8 }}
						className="flex items-center justify-center space-x-6">
						{[
							{
								icon: Github,
								href: "https://github.com/SohamDas2003",
								label: "GitHub",
							},
							{
								icon: Linkedin,
								href: "https://www.linkedin.com/in/soham2003/",
								label: "LinkedIn",
							},
						].map((social, index) => (
							<motion.a
								key={index}
								href={social.href}
								whileHover={{ scale: 1.2, y: -5 }}
								whileTap={{ scale: 0.9 }}
								className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
								aria-label={social.label}>
								<social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
							</motion.a>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.8 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<motion.button
					onClick={scrollToNext}
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
					<ChevronDown className="w-8 h-8" />
				</motion.button>
			</motion.div>
		</section>
	);
};

export default Hero;
