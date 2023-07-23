import Image from "next/image"

export default function Page(){
  return (
  <div className="w-full md:w-1/2">
    <div className="text-sm breadcrumbs text-gray-400">
      <ul>
        <li><a href="/">Home</a></li> 
        <li>Projects</li> 
        <li>Repommend</li>
      </ul>
    </div>
      <h1 className="text-4xl font-bold pt-2">Repommend </h1>
      <p className="pt-5 text-gray-400">Dec 20, 2021</p>

      <div className='font-bold flex flex-wrap pt-5'>
        <div className="badge badge-primary mr-2 mb-2">Network Analysis</div>
        <div className="badge badge-primary mr-2 mb-2">ITU</div>
        <div className="badge badge-primary mr-2 mb-2">2021</div>
      </div>

      <p className="font-mono pt-10 text-gray-400">
        As a final exam for the course <span className="text-white">Network Analysis</span> we built a recommendation system for github repositories, based on the 2009 GitHub bipartite network, representing User-Repository-Watches (unweighted) relationships. A similar pipeline as used within this project can be applied generically to any bipartite graph, to build a recommendation for either of the two classes.
        <br /> <br />
        Try it out <a className="text-purple-500 hover:underline" href="https://na-project.netlify.app/" target="_blank" rel="noopener noreferrer">here</a> or check the code on <a className="text-purple-500 hover:underline" href="https://github.com/lukyrasocha/github-recommendation-system" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>

      <div className="justify-center pt-5">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/projects/repommend/webapp.png" 
            alt="Repommend web application"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}