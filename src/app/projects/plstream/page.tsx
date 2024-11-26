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
					<li>PLStream Capabilities Analysis 📊</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				PLStream Capabilities Analysis 📊
			</h1>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Natural Language Processing
				</div>
				<div className="badge badge-primary mr-2 mb-2">
					CheckList Framework
				</div>
				<div className="badge badge-primary mr-2 mb-2">ITU</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				This project explored the linguistic capabilities of{" "}
				<span className="text-white">PLStream</span>, a novel
				unsupervised framework for fast polarity labeling of massive
				data streams. In the project we analyzed how PLStream compares
				against state-of-the-art supervised models using the{" "}
				<span className="text-white">CheckList framework</span>. The
				framework assessed linguistic performance across various
				capabilities, such as negations, robustness to typos, and
				invariance tests.
				<br />
				<br />
				The results revealed PLStream's strong suitability for handling
				high-velocity data streams with minimal latency and high
				throughput. However, limitations included its inability to
				process contextual or temporal information and the presence of
				training data biases, leading to reduced performance in fairness
				tests.
				<br />
				<br />
				You can access the project's repository on{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://github.com/LudekCizinsky/plstream-lang-capabilities"
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
						src="/projects/plstream/results.png"
						alt="PLStream results"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
