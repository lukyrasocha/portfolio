import Image from "next/image"

export default function Page(){
  return (
  <div className="w-full md:w-1/2">
    <div className="text-sm breadcrumbs text-gray-400">
      <ul>
        <li><a href="/">Home</a></li> 
        <li>Projects</li> 
        <li>Digital Tourist Guide</li>
      </ul>
    </div>
      <h1 className="text-4xl font-bold pt-2">Digital Tourist Guide </h1>
      <p className="pt-5 text-gray-400">September, 2018</p>

      <div className='font-bold flex flex-wrap pt-5'>
        <div className="badge badge-primary mr-2 mb-2">NLP</div>
        <div className="badge badge-primary mr-2 mb-2">Chatbot</div>
        <div className="badge badge-primary mr-2 mb-2">2018</div>
      </div>

      <p className="font-mono pt-10 text-gray-400">
        During high-school I was part of a team that developed an interactive <span className="text-white">chatbot</span> through which 
        tourists were able to explore, get tips and answers, play various games or just simply learn about the history of places.
        We named the chatbot <span className="text-white">Karel Klostermann</span>, which was a famous czech writer from the local area. This was the first time I was exposed to  
        <span className="text-white"> machine learning</span> and <span className="text-white">natural language processing</span> which was a great experience that definitely 
        formed my path to pursue a <span className="text-white">BSc. in Data Science</span>.

        <br/><br/>
        In addition to the to the technical part, it was also the first time I was part of a team developing a product which 
        came with many other responsibilities, where already as a highschooler I had to be in a direct contact with the city council,
        present the project to potential clients and so on. We managed to reach thousands of users which eventually led 
        to winning a regional round of a start-up competition: <span className="text-white">T-mobile rozjezdy</span>.

        <br/><br/>
        Here is a short article about the project (in czech): <a className="text-purple-500 hover:underline" href="https://kct.cz/clanky/legendarni-karel-klostermann-oziva-v-nove-turisticke-aplikaci-pro-navstevniky-sumavy" target="_blank" rel="noopener noreferrer">Legendary Karel Klostermann resurrects in a new application for the visitors of Sumava!</a>
        
      </p>

      <div className="justify-center pt-5">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/projects/chatbot/group.jpeg" 
            alt="Chatbot group photo"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}