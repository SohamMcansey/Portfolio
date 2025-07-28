"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const services = [
		{
			icon: Code,
			title: "Frontend Development",
			description:
				"Crafting clean and responsive UIs using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.",
		},
		{
			icon: Database,
			title: "Backend Development",
			description:
				"Building secure and efficient server-side applications using Python (Django), Java (Spring Boot), and MySQL.",
		},
		{
			icon: Globe,
			title: "Full Stack Solutions",
			description:
				"Developing complete end-to-end applications with integrated frontend, backend, database, and API layers.",
		},
		{
			icon: Server,
			title: "Cloud & DevOps",
			description:
				"Deploying and managing scalable applications using platforms like AWS, Vercel, and GitHub Actions.",
		},
	];

	return (
		<section
			id="about"
			className="py-8 bg-black/20"
			ref={ref}>
			<div className="mx-auto px-6 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
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
						transition={{ duration: 0.8, delay: 0.2 }}>
						<h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
							Hello, I&apos;m Soham – A Full Stack Developer
						</h3>
						<div className="space-y-6 text-gray-300 leading-relaxed">
							<p>
								I&apos;m currently pursuing my MCA and working as a Full Stack
								Developer. I love creating end-to-end web applications — from
								designing intuitive interfaces to building powerful backend
								systems.
							</p>
							<p>
								I have hands-on experience with technologies like Python,
								Django, Java, Spring Boot, React, MySQL, and AWS. My focus is
								always on writing clean code, building scalable systems, and
								continuously learning better ways to solve problems.
							</p>
							<p>
								I enjoy turning ideas into real-world applications. Some of my
								notable projects include an eCommerce platform (GENX), a college
								management system, and a RESTful API for AutoShop — all of which
								reflect my passion for software engineering.
							</p>
							<p>
								When I&apos;m not coding, I enjoy riding my Hornet, hitting the
								gym, or learning new tools and frameworks to stay updated in
								this ever-evolving tech world.
							</p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="mt-8 grid grid-cols-2 gap-6">
							<div className="text-center p-4 glass rounded-lg">
								<h4 className="text-2xl font-bold text-blue-400 mb-2">
									MCA Student
								</h4>
								<p className="text-gray-400">
									Pursuing Masters in Computer Applications
								</p>
							</div>
							<div className="text-center p-4 glass rounded-lg">
								<h4 className="text-2xl font-bold text-blue-400 mb-2">
									Open to Work
								</h4>
								<p className="text-gray-400">
									Looking for Internships &amp; Entry-level Roles
								</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Right side - Services */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="space-y-6">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
								}
								transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
								whileHover={{ scale: 1.02, x: 10 }}
								className="flex items-start space-x-4 p-6 glass rounded-xl hover:bg-white/10 transition-all duration-300 group">
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
