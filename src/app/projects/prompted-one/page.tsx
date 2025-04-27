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
					<li>The Prompted One</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				😴✨ The Prompted One ✨🌙
			</h1>
			<p className="pt-5 text-gray-400">April, 2025</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Game Development
				</div>
				<div className="badge badge-primary mr-2 mb-2">LLM</div>
				<div className="badge badge-primary mr-2 mb-2">Pixel Art</div>
				<div className="badge badge-primary mr-2 mb-2">
					Nordic GameJam 2025
				</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				My first time making a game, built in a weekend at the Nordic
				Game Jam 2025 with three friends. The theme was{" "}
				<span className="text-white">"Eat or Sleep"</span>, and we ended
				up making a small 2D pixel RPG where your only goal is to get{" "}
				<span className="text-white">10 hours of sleep</span>.
				<br />
				<br />
				You walk around in a dream world, avoiding (or fighting)
				light-based enemies that try to wake you up. The longer you stay
				asleep, the better. In the morning, a friend checks in with you
				and asks what you dreamed about and based on what you tell her,
				your abilities in the next dream change.
				<br />
				<br />
				We used an <span className="text-white">LLM</span> to handle the
				dialogue and generate upgrades depending on your responses.
				<br />
				<br />
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/prompted-one/mainmenu.png"
						alt="The Prompted One gameplay screenshot"
						width={800}
						height={400}
						className="w-full"
					/>
				</div>
				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/prompted-one/gameplay1.png"
						alt="The Prompted One gameplay screenshot"
						width={800}
						height={400}
						className="w-full"
					/>
				</div>

				<div className="rounded-lg overflow-hidden">
					<Image
						src="/projects/prompted-one/us.png"
						alt="The Prompted One gameplay screenshot"
						width={800}
						height={400}
						className="w-full"
					/>
					<p className="text-sm text-gray-400 mt-2">
						From left, me (Lukas), Emil, Robert and Lucas
					</p>
				</div>
			</div>
		</div>
	);
}
