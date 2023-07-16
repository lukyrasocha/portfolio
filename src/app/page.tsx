"use client"
import Image from 'next/image'
import Card from './components/card';
import Socials from './components/socials';
import GithubRepos from './components/githubrepos';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/5 mx-auto mt-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold">hey! 👋</h1>
          <p className='pt-2 font-mono'>
            My name is Lukas. I'm czech 🇨🇿 and canadian 🇨🇦 living in the beautiful city of Copenhagen 🇩🇰. 
            I just graduated with a BSc. in Data Science from the <a className="text-purple-500 hover:underline" href="https://www.itu.dk/" target="_blank" rel="noopener noreferrer">IT University of Copenhagen</a> 🎓 and am about to start my master's in Human-Centered Artificial Intelligence at the <a className="text-purple-500 hover:underline" href="https://www.dtu.dk/" target="_blank" rel="noopener noreferrer">Technical University of Denmark</a>. 🤖
            <br />
            <br />
            👨‍💻 Currently, I am honing my skills as a Software Developer at <a className="text-purple-500 hover:underline" href="https://computas.com/en/" target="_blank">Computas</a>, where I am mainly working with Google Cloud Platform. 
            <br />
            <br />
            🏀️ In my downtime, I love playing <a className="text-purple-500 hover:underline" href="https://www.chess.com/member/spagetal" target="_blank">chess</a> and basketball or attending <a className="text-purple-500 hover:underline" href="https://aitu.group" target="_blank">AITU</a>, a student community around the field of AI that I co-founded. Always ready to chat about movies of any and all genres or recent AI developments. Reach out if you want to connect!
          </p>
          <Socials />
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
      <div className="divider pt-12"></div> 
      <section className="flex flex-col items-center w-full mt-10">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          title="zeldalevelcraft.com"
          image='zelda/zeldaintro.png'
          link='/projects/zelda/'
          tags={['AI', 'ITU', '2023']}
        />
        <Card
          title="aitu.group"
          image='aitu/aitu.webp'
          link='/projects/aitu/'
          tags={['AI', 'ITU']}
        />
        <Card
          title="pathfinding-visualizer"
          image='pathfinding.png'
          link='/projects/pathfinding/'
          tags={['Algorithms & Data Structures', '2020']}
        />

        </div>
      </section>
      <GithubRepos />
      
    </main>
  )
}
