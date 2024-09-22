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
					<li>Tire Assembly</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Prediction of Successful Tire Assembly 🏎️{" "}
			</h1>
			<p className="pt-5 text-gray-400">Jan, 2024</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Machine Learning
				</div>
				<div className="badge badge-primary mr-2 mb-2">MLOps</div>
				<div className="badge badge-primary mr-2 mb-2">DTU</div>
				<div className="badge badge-primary mr-2 mb-2">2024</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				This project presents an attempt to find a solution for
				predicting the successful assembly of{" "}
				<span className="text-white">
					tires onto wheels autonomously.
				</span>{" "}
				Currently, the existing approach uses purely an image based
				classification to predict whether the tire was assembled
				correctly. To enrich this, we attempt to use an{" "}
				<span className="text-white">LSTM model</span> to analyze inputs
				from{" "}
				<span className="text-white">torque and force sensors</span> of
				the assembling robot, enabling the system to determine the
				optimal conditions for tire assembly without human intervention.
				<br />
				<br />
				The goal is to increase efficiency and accuracy in tire assembly
				processes, reducing the reliance on manual labor and minimizing
				errors.
				<br />
				<br />
				This end-to-end ML project additionally utilizes many different
				tools and frameworks such as{" "}
				<span className="text-white">Pytorch Lightning</span> for
				modelling, <span className="text-white">DVC</span> for data
				versioning, <span className="text-white">GCP</span> for model
				training, <span className="text-white">W&B</span> for monitoring{" "}
				<span className="text-white">FastAPI</span> for exposing an
				inference endpoint, and others.
				<br />
				<br />
				The project was done in collaboration with the Robotics lab at
				the{" "}
				<span className="text-white">
					CTU (Czech Technical University) in Prague
				</span>{" "}
				which also provided all the necessary data for the project.
				<br />
				<br />
				Check out the project's code on{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://github.com/malek-luky/Automatic-Wheel-Assembly-Detection"
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
						src="/projects/tire-assembly/tire-assembly-diagram.png"
						alt="Tire assembly system diagram"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
