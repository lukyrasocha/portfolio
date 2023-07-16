import Image from "next/image"

export default function Page(){
  return (
  <div className="w-full md:w-1/2">
    <div className="text-sm breadcrumbs text-gray-400">
      <ul>
        <li><a href="/">Home</a></li> 
        <li>Projects</li> 
        <li>AITU</li>
      </ul>
    </div>
      <h1 className="text-4xl font-bold pt-2">AITU </h1>
      <p className="pt-5 text-gray-400">Jan 24, 2023</p>

      <div className='font-bold flex flex-wrap pt-5'>
        <div className="badge badge-primary mr-2 mb-2">Artificial Intelligence</div>
        <div className="badge badge-primary mr-2 mb-2">ITU</div>
        <div className="badge badge-primary mr-2 mb-2">2023</div>
      </div>

      <p className="font-mono pt-10 text-gray-400">
      <span className="text-white">AITU</span> is a student-led organization that I co-founded stationed at the <a className="text-purple-500 hover:underline" href="https://www.itu.dk/" target="_blank" rel="noopener noreferrer">IT University of Copenhagen</a>. <span className="text-white">AITU</span> is a hub of bright minds, fostering interactive reading groups, lab projects, and external talks dedicated to staying up to date with artificial intelligence research. <br /> <br />
      Being a part of AITU's vibrant community of students with shared interests was truly a rewarding experience, and I can't wait to see the organization's future trajectory. <br /> <br />
      On our <a className="text-purple-500 hover:underline" href="https://aitu.group" target="_blank" rel="noopener noreferrer">AITU Website</a>, you can discover more about aitu's mission and activities or check the members' insightful blog posts covering our recent events and readings. <br /> <br />
      We're also present on <a className="text-purple-500 hover:underline" href="https://github.com/aitu-dk" target="_blank" rel="noopener noreferrer">GitHub</a> and <a className="text-purple-500 hover:underline" href="https://www.linkedin.com/company/aitu-dk" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </p>

      <Image
        className="pt-5"
        src="/projects/aitu/group.jpg" 
        alt="AITU group photo"
        width={800}
        height={400}
      />
    </div>
  )
}