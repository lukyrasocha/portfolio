import Image from "next/image"

export default function Page(){
  return (
  <div className="w-full md:w-1/2">
    <div className="text-sm breadcrumbs text-gray-400">
      <ul>
        <li><a href="/">Home</a></li> 
        <li>Projects</li> 
        <li>Pathfinding visualizer 🗺️</li>
      </ul>
    </div>
      <h1 className="text-4xl font-bold pt-2">Pathfinding visualizer 🗺️️</h1>
      <p className="pt-5 text-gray-400">Jun 30, 2020</p>

      <div className='font-bold flex flex-wrap pt-5'>
        <div className="badge badge-primary mr-2 mb-2">Algorithms & Data Structures</div>
        <div className="badge badge-primary mr-2 mb-2">2020</div>
      </div>

      <p className="font-mono pt-10 text-gray-400">
        In this project, we implemented and tested four distinct graph-searching algorithms: <span className="text-white">A*, BFS, DFS</span>, and <span className="text-white">Dijkstra</span>. We evaluated their performance across a range of randomly generated maps of varying sizes to compare them and verify their theoretical <span className="text-white">big-O</span> complexity. 
        <br /><br />
        If you're interested in learning more, you can <a className="text-purple-500 hover:underline" href="http://webkutil.cz/algorithms/" target="_blank" rel="noopener noreferrer">explore the implementations here</a> or <a className="text-purple-500 hover:underline" href="https://rucforsk.ruc.dk/ws/files/68132039/BP2_Group_1_Pathfinding__new___4_.pdf" target="_blank" rel="noopener noreferrer">read the full paper here</a>.
      </p>


      <div className="justify-center pt-5">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/projects/pathfinding/system.png" 
            alt="pathfinding-visualizer"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}