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
					<li>AITU</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">AITU </h1>
			<p className="pt-5 text-gray-400">Jan 24, 2023</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Artificial Intelligence
				</div>
				<div className="badge badge-primary mr-2 mb-2">ITU</div>
				<div className="badge badge-primary mr-2 mb-2">2023</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				<span className="text-white">AITU</span> is a student-led
				organization that I co-founded in late 2022 at the{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://www.itu.dk/"
					target="_blank"
					rel="noopener noreferrer"
				>
					IT University of Copenhagen
				</a>
				, together with{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://mikasenghaas.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mika Senghaas
				</a>{" "}
				and{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://cizinsky.cc/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Ludek Cizinsky
				</a>{" "}
				. Serving as a community for students interested in machine
				learning and artificial intelligence across Copenhagen, we meet
				weekly to discuss selected research papers in an inclusive
				setting, where students of all levels are encouraged to
				participate actively, ask questions, and share their insights.{" "}
				<br /> <br />
				Beyond our weekly interactive reading groups, we also host lab
				projects, external talks from AI researchers and industry
				practitioners, and participate in hackathons and other events
				dedicated to staying up-to-date with cutting-edge artificial
				intelligence research. Since our founding,{" "}
				<span className="text-white">AITU</span> has grown to over 50
				members and collaborates with other student organizations like{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://bliss.berlin/"
					target="_blank"
					rel="noopener noreferrer"
				>
					BLISS in Berlin
				</a>{" "}
				and has a partnership with{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://www.novonordisk.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Novo Nordisk
				</a>
				, which kindly provides us with a venue for our meetings. <br />{" "}
				<br />
				On our{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://aitu.group"
					target="_blank"
					rel="noopener noreferrer"
				>
					AITU Website
				</a>
				, you can discover more about AITU's mission and activities or
				check the members' insightful blog posts covering our recent
				events and readings. <br /> <br />
				We're also present on{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://github.com/aitu-dk"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>{" "}
				and{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://www.linkedin.com/company/aitu-dk"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				.
			</p>
			<div className="justify-center pt-5">
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/aitu/group.jpg"
						alt="AITU group photo"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
