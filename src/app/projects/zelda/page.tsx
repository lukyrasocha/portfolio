import Image from "next/image"

export default function Page(){
  return (
  <div className="w-full md:w-1/2">
    <div className="text-sm breadcrumbs text-gray-400">
      <ul>
        <li><a href="/">Home</a></li> 
        <li>Projects</li> 
        <li>Zelda Level Craft 🛡️</li>
      </ul>
    </div>
      <h1 className="text-4xl font-bold pt-2">Zelda Level Craft 🛡️ </h1>
      <p className="pt-5 text-gray-400">May 16, 2023</p>

      <div className='font-bold flex flex-wrap pt-5'>
        <div className="badge badge-primary mr-2 mb-2">Artificial Intelligence</div>
        <div className="badge badge-primary mr-2 mb-2">ITU</div>
        <div className="badge badge-primary mr-2 mb-2">2023</div>
      </div>

      <p className="font-mono pt-10 text-gray-400">
        In my bachelor project at the <a className="text-purple-500 hover:underline" href="https://www.itu.dk/" target="_blank" rel="noopener noreferrer">IT University of Copenhagen</a>, I delved into the realm of Neural Cellular Automata (NCA) in the context of AI assisted procedural content generation. The aim was to automate game level design for <span className="text-white">The Legend of Zelda</span>.<br /><br /> 
        We developed a system that allows users to fix specific tiles, while the rest of the level grows through an evolved <span className="text-white">Neural Cellular Automata (NCA)</span> model. The users also have the freedom to select a model from a trained archive of NCA models. This results in a diverse array of specialized level generators capable of creating playable game levels. The generators consider both the specific level characteristics and the user-defined fixed tiles. <br /> <br />
        
        The code is available on <a className="text-purple-500 hover:underline" href="https://github.com/interactive-nca" target="_blank" rel="noopener noreferrer">GitHub</a> or you can play with the proposed system at the project's website <a className="text-purple-500 hover:underline" href="https://zeldalevelcraft.com" target="_blank" rel="noopener noreferrer">here</a>. 
      </p>

      <div className="justify-center pt-5">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/projects/zelda/webapp.png" 
            alt="zeldalevelcraft"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}