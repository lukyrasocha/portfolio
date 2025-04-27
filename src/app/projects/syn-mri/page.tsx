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
					<li>Synthetic Brain Dataset</li>
				</ul>
			</div>
			<h1 className="text-4xl font-bold pt-2">
				Synthetic Brain Dataset: High-Fidelity Medical Image Generation
				🧠
			</h1>
			<p className="pt-5 text-gray-400">Apr, 2025</p>

			<div className="font-bold flex flex-wrap pt-5">
				<div className="badge badge-primary mr-2 mb-2">
					Text-to-Image
				</div>
				<div className="badge badge-primary mr-2 mb-2">
					Diffusion Models
				</div>
				<div className="badge badge-primary mr-2 mb-2">
					Medical Imaging
				</div>
				<div className="badge badge-primary mr-2 mb-2">DTU</div>
			</div>

			<p className="font-mono pt-10 text-gray-400">
				This project focuses on bridging the gap between vision-language
				models (VLMs) and text-to-image diffusion models in the medical
				domain. The goal is to generate highly realistic brain MRI scans
				with fine-grained pathological details such as{" "}
				<span className="text-white">
					tumor presence, location, size, shape, intensity, and brain
					orientation
				</span>
				.
				<br />
				<br />
				Unlike general text-to-image generation, we work with extremely{" "}
				<span className="text-white">
					precise medical descriptions
				</span>{" "}
				— for example:
				<em>
					{" "}
					"1: tumor: yes; location: pituitary; size: large; shape:
					regular; intensity: bright; orientation: sagittal; general
					description: Brain MRI in sagittal view showing large
					pituitary tumor with abnormal enhancement."
				</em>
				<br />
				<br />
				We use vision-language models to produce detailed annotations
				for existing medical images, and fine-tune powerful diffusion
				models to synthesize new, diverse examples guided by these
				structured prompts. This enables us to simulate rare conditions
				and specific anatomical variations, with potential applications
				in{" "}
				<span className="text-white">
					data augmentation, privacy-preserving model training, and
					medical education
				</span>
				.
				<br />
				<br />
				Part of the{" "}
				<span className="text-white">
					Advanced Deep Learning in Computer Vision course
				</span>{" "}
				project supervised by{" "}
				<span className="text-white">Changlu Guo</span> at DTU.
				<br />
				<br />
				Code and more details coming soon!
			</p>
			<div className="rounded-lg overflow-hidden bg-white">
				<Image
					src="/projects/syn-mri/synthetic_mri.png"
					alt="Synthetic Brain Dataset visualization"
					width={300}
					height={200}
					className="w-full"
				/>
			</div>
		</div>
	);
}
