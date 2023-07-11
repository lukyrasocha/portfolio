import Image from 'next/image'
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa'; // imports Github, Linkedin, and Email icons
import { SiMaildotru } from 'react-icons/si'; 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/5 mx-auto mt-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold">hey! 👋</h1>
          <p className='pt-2 font-mono'>
            My name is Lukas. I'm czech 🇨🇿 and canadian 🇨🇦 living in the beautiful city of Copenhagen 🇩🇰. 
            I just graduated with a BSc. in Data Science from the <a className="text-purple-500 hover:underline" href="https://www.itu.dk/" target="_blank" rel="noopener noreferrer">IT University of Copenhagen</a> 🎓 and am about to start my master's in Human-Centered Artificial Intelligence at the <a className="text-purple-500 hover:underline" href="https://www.itu.dk/" target="_blank" rel="noopener noreferrer">Technical University of Denmark</a>. 🤖
            <br />
            <br />
            👨‍💻 Currently, I am honing my skills as a Software Developer at <a className="text-purple-500 hover:underline" href="https://computas.com/en/" target="_blank">Computas</a>, where I am mainly working with Google Cloud Platform. 
            <br />
            <br />
            🏀️ In my downtime, I love playing <a className="text-purple-500 hover:underline" href="https://www.chess.com/member/spagetal" target="_blank">chess</a> and basketball or attending <a className="text-purple-500 hover:underline" href="https://aitu.group" target="_blank">AITU</a>, a student community around the field of AI that I co-founded. Always ready to chat about movies of any and all genres or recent AI developments. Reach out if you want to connect!
          </p>

        <div className="flex justify-center mt-5 space-x-5 pb-5 md:pb-0">
        <a className="transition-colors duration-400 hover:text-purple-500" href="https://github.com/lukyrasocha" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>
        <a className="transition-colors duration-400 hover:text-purple-500" href="https://linkedin.com/in/lukasrasocha" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
        <a className="transition-colors duration-400 hover:text-purple-500" href="mailto:rasocha.lukas@gmail.com"><SiMaildotru size={30}/></a>
        <div className="relative group">
          <a href="/cv.pdf" target="_blank" className="transition-colors duration-500 hover:text-purple-500">
            <FaPaperclip size={30}/>
          </a>
          <span className="font-mono absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            CV
          </span>
        </div>
      </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/me.jpg" 
              alt="Lukas Rasocha"
              width={300} 
              height={300} 
            />
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center w-full mt-10">
        <h2 className="text-4xl font-sans mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-gray-300 shadow-md rounded-md p-5">
              <h3 className="text-2xl font-bold">Project {i+1}</h3>
              <p className="mt-2">A short description of project {i+1}.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
