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
					<li>Civillians at the crossroads</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Civilians at the Crossroads: The Human Cost of Conflict in the
				Black Sea Region
			</h1>
			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Data Visualization
				</div>
				<div className="badge badge-primary mr-2 mb-2">
					Technical University of Denmark
				</div>
			</div>
			<p className="font-mono pt-10 text-gray-400">
				This project looks at the human impact of political violence in
				the Black Sea region. Using data on battles, protests, and other
				conflict related events, we tried to highlight not just how
				often these things happen, but what they actually mean for the
				people living through them including fatalities, injuries, and
				displacement.
				<br />
				<br />
				You can explore the full interactive story{" "}
				<a
					className="text-purple-500 hover:underline"
					href="https://cost-of-war-in-the-black-sea-region-771755230276.europe-west1.run.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					here.
				</a>
			</p>
			<div className="justify-center pt-5">
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/ukraine-russia-conflict/hours.png"
						alt="Hours of the day"
						width={800}
						height={400}
					/>
				</div>
				<p className="font-mono pt-10 text-gray-500">
					Violent events during the day. Each dot represents one
					event.
				</p>
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/ukraine-russia-conflict/dots.png"
						alt="Hours of the day"
						width={800}
						height={400}
					/>
				</div>
				<p className="font-mono pt-10 text-gray-500">
					On the left side, we have the number of deaths, and on the
					right side, we have the number of refugees. One white dot
					represents 10 deaths, one yellow dot represents 1000
					refugees.
				</p>
			</div>
		</div>
	);
}
