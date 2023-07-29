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
        In our <span className="text-white">Network Analysis</span> course, we took on the task of building 
        a recommendation system for GitHub repositories by using solely a <span className="text-white">bipartite graph </span>
        that represents the relationships between users and the repositories they watch. 
        The technique used can be generally applied to any bipartite graph, to build a recommendation for either of the two classes. 
        <br /><br /> 
        If you're interested, you can try the system  <a className="text-purple-500 hover:underline" href="https://na-project.netlify.app/" target="_blank" rel="noopener noreferrer">here</a> or 
        take a look at the code on <a className="text-purple-500 hover:underline" href="https://github.com/lukyrasocha/github-recommendation-system" target="_blank" rel="noopener noreferrer">GitHub</a>.
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