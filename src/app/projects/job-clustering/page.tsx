import Image from "next/image";

export default function Page() {
	return (
		<div className="w-full md:w-1/2">
			<div className="text-sm breadcrumbs text-gray-400">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>Projects</li>
					<li>Job Market Skill Identification</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Job Market Skill Identification through Clustering Analysis 💼{" "}
			</h1>
			<p className="pt-5 text-gray-400">Dec, 2023</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Machine Learning
				</div>
				<div className="badge badge-primary mr-2 mb-2">
					Data Science
				</div>
				<div className="badge badge-primary mr-2 mb-2">2024</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				In today’s rapidly evolving job market, identifying key skills
				that align with industry demands is crucial for job seekers
				aiming to remain competitive. This project focuses on uncovering
				these essential skills by leveraging{" "}
				<span className="text-white">NLP</span> and{" "}
				<span className="text-white">clustering analysis</span> methods.
				<br />
				<br />
				<span className="text-white">Objective:</span> The primary goal
				of this project is to empower job seekers with insights into the
				most prominent skills within various{" "}
				<span className="text-white">job clusters</span>. By analyzing a
				vast array of job descriptions (scraped from LinkedIn), we aim
				to identify patterns and group them into distinct clusters based
				on shared characteristics. Each cluster reveals a set of{" "}
				<span className="text-white">skills</span> that are highly
				relevant to that group, offering a clear and concise view of
				what employers in that category are looking for.
				<br />
				<br />
				<span className="text-white">Approach:</span> Our approach
				involves applying{" "}
				<span className="text-white">clustering algorithms</span> to a
				large dataset of recent job descriptions in Denmark. Through
				this, we can categorize job roles and highlight the{" "}
				<span className="text-white">key skills</span> within each
				cluster. This enables job seekers to analyze and compare{" "}
				<span className="text-white">trending skills</span> across
				different clusters, or even input a new job description to
				determine the most relevant skills based on similar jobs in the
				same cluster.
				<br />
				<br />
				This project is designed to increase the efficiency and accuracy
				of job search processes, providing job seekers with a{" "}
				<span className="text-white"> tool</span> to navigate the
				complexities of the modern job market.
				<br />
				<br />
				Check out the project's code on{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://github.com/lukyrasocha/02807-comp-tools/tree/main"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				.
			</p>

			<div className="justify-center pt-5">
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/job-clustering/graph.png"
						alt="Clustering analysis diagram"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
