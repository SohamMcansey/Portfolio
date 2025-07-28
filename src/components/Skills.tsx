"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
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

	const technologies = [
		"JavaScript",
		"TypeScript",
		"React",
		"Next.js",
		"Vue.js",
		"Angular",
		"Node.js",
		"Express.js",
		"Python",
		"Django",
		"FastAPI",
		"MongoDB",
		"PostgreSQL",
		"Redis",
		"Docker",
		"AWS",
		"Git",
		"GraphQL",
		"REST API",
		"TailwindCSS",
		"Sass",
		"Webpack",
		"Vite",
		"Jest",
		"Cypress",
	];

	return (
		<section
			id="skills"
			className="py-8"
			ref={ref}>
			<div className="mx-auto px-6 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						My <span className="gradient-text">Skills</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						A comprehensive overview of my technical expertise and proficiency
						levels
					</p>
				</motion.div>

				{/* Technology Tags */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-center">
					<div className="flex flex-wrap justify-center gap-3">
						{technologies.map((tech, index) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={
									isInView
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0.8 }
								}
								transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
								whileHover={{
									scale: 1.1,
									backgroundColor: "rgba(59, 130, 246, 0.2)",
									borderColor: "rgb(59, 130, 246)",
								}}
								className="px-4 py-2 bg-white/5 border border-gray-700 rounded-full text-gray-300 text-sm font-medium hover:text-white transition-all duration-300 cursor-default">
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>

				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
							initial={{
								x: Math.min(
									Math.random() * windowSize.width,
									windowSize.width - 10
								),
								y: Math.min(
									Math.random() * windowSize.height,
									windowSize.height - 10
								),
							}}
							animate={{
								x: Math.min(
									Math.random() * windowSize.width,
									windowSize.width - 10
								),
								y: Math.min(
									Math.random() * windowSize.height,
									windowSize.height - 10
								),
							}}
							transition={{
								duration: Math.random() * 20 + 20,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
