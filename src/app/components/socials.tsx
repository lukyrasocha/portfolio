import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa'; // imports Github, Linkedin, and Email icons
import { SiMaildotru } from 'react-icons/si'; 

export default function Socials(){
  return (
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
  )

}