import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'; 

export default function GithubRepos() {
  interface Repo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: string;
    created_at: string,
    language: string,
  }
  
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/lukyrasocha/repos')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a: Repo, b: Repo) => {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
        setRepos(sortedData);
      })
  }, [])


  return (
      <div className="flex flex-col items-center w-full mt-10">
      <button 
        className="font-mono btn bg-base-300 btn-primary mt-5"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide my repos" : "Show the rest of my repositories"}
      </button>
      {isVisible && (
        <div>
          {repos.map((repo, index) => (
            <div className='indicator flex flex-col items-center w-full font-mono'>
            <div key={index} className="collapse collapse-arrow border border-primary bg-base-400 mt-2">
            <input type="checkbox" /> 
              <div className="collapse-title text-xl font-medium">
                <h2><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
              </div>
              <div className="collapse-content"> 

              <div className='flex flex-wrap'>
                  <div className="badge badge-primary badge-outline mr-2">
                    {repo.language}
                    {repo.language === 'Python' && <span role="img" aria-label="snake"> 🐍</span>}
                  </div>
                  <div className="badge badge-primary badge-outline mr-2">
                    <p>  {new Date(repo.created_at).toLocaleDateString('en-US', {
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                    </p>
                  </div>
                  <div className='badge badge-primary badge-outline'>
                    <p>⭐ {repo.stargazers_count}</p>
                  </div>
                </div>

                <p className='pt-5 pb-5'>{repo.description}</p>
                <a className="transition-colors duration-400 hover:text-purple-500 text-sm" href={repo.html_url} target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>
              </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
