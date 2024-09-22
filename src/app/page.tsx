"use client";
import Image from "next/image";
import { useState } from "react";
import Card from "./components/card";
import Socials from "./components/socials";

export default function Home() {
	const [showAllProjects, setShowAllProjects] = useState(false);

	const projects = [
		{
			title: "zeldalevelcraft.com",
			image: "zelda/zeldaintro.png",
			link: "/projects/zelda/",
			tags: ["AI", "ITU", "2023"],
		},
		{
			title: "aitu.group",
			image: "aitu/aitu.webp",
			link: "/projects/aitu/",
			tags: ["AI", "ITU"],
		},
		{
			title: "Predicting tire assembly",
			image: "tire-assembly/intro.jpg",
			link: "/projects/tire-assembly/",
			tags: ["ML", "MLOps", "DTU", "2024"],
		},
		{
			title: "Job skill identification",
			image: "job-clustering/briefcase.png",
			link: "/projects/job-clustering/",
			tags: ["AI", "DTU", "2023"],
		},
		{
			title: "Everyday Ed",
			image: "everydayed/knotmess.jpg",
			link: "/projects/everydayed/",
			tags: ["Mental health", "UX", "Visualization", "DTU", "2024"],
		},
		{
			title: "Civillians at crossroads",
			image: "ukraine-russia-conflict/ukraine-russia-conflict-intro.png",
			link: "https://cost-of-war-in-the-black-sea-region-771755230276.europe-west1.run.app/",
			tags: ["Data Visualization", "2024", "DTU"],
		},
		{
			title: "Repommend",
			image: "repommend/repommend_intro.png",
			link: "/projects/repommend/",
			tags: ["Network Analysis", "ITU", "2021"],
		},
		{
			title: "Digital Tourist Guide",
			image: "chatbot/chatbot_intro.jpeg",
			link: "/projects/chatbot/",
			tags: ["NLP", "Chatbot", "2018"],
		},
		{
			title: "pathfinding-visualizer",
			image: "pathfinding/pathfinding.png",
			link: "/projects/pathfinding/",
			tags: ["Algorithms & Data Structures", "2020"],
		},
	];

	const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24">
			{/* Header Section */}
			{/* 
		  - Increased container width on medium screens to 80% (w-4/5)
		  - Maintains full width on smaller screens and switches to row layout on large screens
		*/}
			<div className="mx-auto mt-10 flex flex-col items-center justify-center w-full md:w-4/5 lg:flex-row">
				{/* Text Content */}
				{/* 
			- Sets width to full on medium screens to utilize the container's 80%
			- Remains half width on large screens for side-by-side layout with the image
		  */}
				<div className="w-full lg:w-1/2">
					<h1 className="text-3xl sm:text-4xl font-bold">hey! 👋</h1>
					<p className="pt-2 font-mono text-sm sm:text-base md:text-lg">
						My name is Lukas. I'm Czech 🇨🇿 and Canadian 🇨🇦 living in
						the beautiful city of Copenhagen 🇩🇰. Previously I
						studied Data Science at the{" "}
						<a
							className="text-purple-500 hover:underline"
							href="https://www.itu.dk/"
							target="_blank"
							rel="noopener noreferrer"
						>
							IT University of Copenhagen
						</a>{" "}
						🎓 and currently I am pursuing my master's in the same
						field at the{" "}
						<a
							className="text-purple-500 hover:underline"
							href="https://www.dtu.dk/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Technical University of Denmark
						</a>
						. 🤖
						<br />
						<br />
						👨‍💻 Outside of school I work as a Data Engineer at{" "}
						<a
							className="text-purple-500 hover:underline"
							href="https://www.lego.com/en-de"
							target="_blank"
							rel="noopener noreferrer"
						>
							the LEGO Group
						</a>{" "}
						🧱, where I am a part of a team developing a
						self-service Data Platform.
						<br />
						<br />♜ In my downtime, I love playing{" "}
						<a
							className="text-purple-500 hover:underline"
							href="https://www.chess.com/member/spagetal"
							target="_blank"
							rel="noopener noreferrer"
						>
							chess
						</a>{" "}
						or basketball, drinking coffee, going for a run or
						attending{" "}
						<a
							className="text-purple-500 hover:underline"
							href="https://aitu.group"
							target="_blank"
							rel="noopener noreferrer"
						>
							AITU
						</a>
						, a student community around the field of AI that I
						co-started with a couple of friends. Always happy to
						chat about movies of any and all genres or recent AI
						developments. Reach out if you want to connect!
					</p>
					<Socials />
				</div>
				{/* Image */}
				<div className="flex w-full lg:w-1/2 justify-center mt-8 lg:mt-0">
					<div className="overflow-hidden rounded-lg shadow-lg max-w-full h-auto">
						<Image
							src="/me3.jpg"
							alt="Lukas Rasocha"
							width={350}
							height={400}
							className="w-full h-auto"
							priority
						/>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="divider pt-12"></div>

			{/* Projects Section */}
			<section className="mt-10 flex w-full flex-col items-center p-0">
				<h2 className="mb-10 text-3xl sm:text-4xl font-bold">
					Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{visibleProjects.map((project, index) => (
						<Card
							key={index}
							title={project.title}
							image={project.image}
							link={project.link}
							tags={project.tags}
						/>
					))}
				</div>
				{!showAllProjects && (
					<button
						className="font-mono btn bg-base-200 btn-primary mt-5"
						onClick={() => setShowAllProjects(true)}
					>
						More projects ➕
					</button>
				)}
			</section>
		</main>
	);
}
