import React from 'react'
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  link: string;
  tags: string[];
}

export default function Card(
  { 
  title,
  image,
  link,
  tags
  }: CardProps
  ) {

  return (
    <div className="card w-66 md:w-96 bg-base-300 shadow-xl">
      <figure className="h-64 w-full overflow-hidden relative">
        <img src={`/projects/${image}`} alt={title} className="h-full w-full object-cover absolute"/>
      </figure>
      <div className="card-body pl-5 md:pl-8">
        <h2 className="font-mono card-title">{title}
        </h2>
        <div className='font-bold flex flex-wrap'>
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-primary mr-2 mb-2">{tag}</div>
          ))}
        </div>
        <div className="card-actions justify-center">
          <Link href={link}>
            <button className="font-mono btn bg-base-200 btn-primary mt-5">See more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}