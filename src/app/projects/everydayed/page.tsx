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
					<li>Everyday Ed: Chatbot for Better Living</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Everyday Ed: Chatbot Who Educates for Better Living 💬{" "}
			</h1>
			<p className="pt-5 text-gray-400">May, 2024</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Mental Health
				</div>
				<div className="badge badge-primary mr-2 mb-2">Chatbot</div>
				<div className="badge badge-primary mr-2 mb-2">
					Visualization
				</div>
				<div className="badge badge-primary mr-2 mb-2">DTU</div>
				<div className="badge badge-primary mr-2 mb-2">2024</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				As awareness of{" "}
				<span className="text-white">mental health</span> grows, the
				demand for effective support tools rises, especially among
				younger demographics. This project presents{" "}
				<span className="text-white">"Everyday Ed"</span>, a mood and
				habit tracking system utilizing{" "}
				<span className="text-white">Meta developer tools</span> and a
				customized visualization dashboard.
				<br />
				<br />
				Grounded in the{" "}
				<span className="text-white">five-stage model</span> of personal
				informatics systems, "Everyday Ed" offers tailored experiences
				with four predefined personalities (Joyful Jellyfish, Hustling
				Horse, Mindful Moose and Curious Crocodile), where each
				personality has its own set of mood tracking questions and
				optional user-customized bad habit tracking. The system allows
				users to easily track their daily moods and habits through a
				chat interface, and provides personalized visualizations in the
				dashboard to empower users in monitoring and enhancing their
				mental health.
				<br />
				<br />
				<Image
					src="/projects/everydayed/chat.png"
					alt="Everyday Ed chat interface"
					width={300}
					height={300}
				/>
				<br />
				<br />
				<span className="text-white">User evaluations</span> showed a
				high appreciation for the intuitive nature of tracking via a
				chatbot. However, while the prototype does well in the
				preparation, collection, and reflection stages of the model,
				future iterations should aim to enhance the action stage by
				offering proactive suggestions to the users.
				<br />
				<br />
				The code is available on{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://github.com/moorekevin/everydayed/tree/main"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>{" "}
				or you can play with the proposed system at the project's
				website{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://everydayed.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
				.
			</p>

			<div className="justify-center pt-5">
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/everydayed/visualizations.png"
						alt="Everyday Ed visualization dashboard"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
