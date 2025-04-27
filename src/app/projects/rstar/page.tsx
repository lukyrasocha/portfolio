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
					<li>rStar</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Evaluating rStar: Robustness in Small Language Model Reasoning
				🧠
			</h1>
			<p className="pt-5 text-gray-400">Apr, 2025</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Monte Carlo Tree Search
				</div>
				<div className="badge badge-primary mr-2 mb-2">
					Small Language Models
				</div>
				<div className="badge badge-primary mr-2 mb-2">NLP</div>
				<div className="badge badge-primary mr-2 mb-2">DTU</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				This project focused on testing how well the{" "}
				<span className="text-white">rStar framework</span> (a reasoning
				system for small language models using the Monte carlo tree
				search) holds up when the input is slightly changed. We used a
				subset of the GSM8K dataset and introduced variations like
				swapping names, changing numbers, or adding irrelevant info to
				see if the model could still solve the problems accurately.
				<br />
				<br />
				While rStar handled simple changes like name swaps pretty well,
				its performance dropped significantly with more disruptive
				variations, especially when numerical values were altered or
				distracting details were added. We also tested a new custom
				action that aimed to remove irrelevant information before
				reasoning — with mixed results.
				<br />
				<br />
				The goal wasn't just to see where it fails, but to understand
				the limits of small language models and how frameworks like
				rStar might be improved to handle more realistic, messy inputs.
				<br />
				<br />
				Made together with{" "}
				<span className="text-white">
					Jone Steinhoff, Panagiota Emmanouilidi, Petr B. Nylander
				</span>
				, and <span className="text-white">Robert Spralja</span>
				<br />
				<br />
				Check out the code on{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://github.com/lukyrasocha/rStar"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				.
			</p>
			<div className="rounded-lg overflow-hidden bg-white">
				<Image
					src="/projects/rstar/overview.png"
					alt="The Prompted One gameplay screenshot"
					width={800}
					height={400}
					className="w-full"
				/>
			</div>
		</div>
	);
}
