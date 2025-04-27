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
					<li>Geodesics in Latent Space</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Geodesics in Latent Space 🧭
			</h1>
			<p className="pt-5 text-gray-400">Apr, 2025</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Latent Geometry
				</div>
				<div className="badge badge-primary mr-2 mb-2">VAE</div>
				<div className="badge badge-primary mr-2 mb-2">Ensembles</div>
				<div className="badge badge-primary mr-2 mb-2">DTU</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				This project explores the geometry of latent spaces in{" "}
				<span className="text-white">
					Variational Autoencoders (VAEs)
				</span>{" "}
				by computing geodesic paths between data points. Instead of just
				connecting points in the latent space with straight lines
				(Euclidean paths), we optimize smooth curves that better follow
				the learned manifold.
				<br />
				<br />
				We first trained a standard VAE on a subset of MNIST and
				computed geodesics between latent representations using energy
				minimization. Then we extended the setup by introducing{" "}
				<span className="text-white">ensemble VAEs</span> — using
				multiple decoders to better capture uncertainty in the learned
				geometry. This also allowed us to define a new energy function
				based on model averaging, using Monte Carlo sampling across
				decoders.
				<br />
				<br />
				To evaluate robustness, we trained multiple models and compared
				how consistent the geodesics were across runs. As expected,
				using decoder ensembles led to more stable geodesics, especially
				in regions with less data support. We quantified this using the{" "}
				<span className="text-white">
					Coefficient of Variation (CoV)
				</span>
				, showing that ensembles reduce uncertainty compared to
				single-decoder setups.
				<br />
				<br />
				The project was part of the Advanced Machine Learning course at
				DTU and done in collaboration with{" "}
				<span className="text-white">Jone Steinhoff, Mads Prip</span>,
				and <span className="text-white">Petr Boska Nylander</span>.
			</p>
			<div className="flex flex-wrap gap-4 justify-center pt-5">
				<div className="rounded-lg overflow-hidden flex-1 min-w-[300px]">
					<Image
						src="/projects/geodesics/geodesics2.png"
						alt="VAE"
						width={800}
						height={400}
					/>
				</div>
				<div className="rounded-lg overflow-hidden flex-1 min-w-[300px]">
					<Image
						src="/projects/geodesics/geodesics1.png"
						alt="Ensemble VAE"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}
