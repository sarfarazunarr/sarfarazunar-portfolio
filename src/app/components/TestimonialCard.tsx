import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

const TestimonialCard = ({stars, content, name, img}: {stars: number, content:string, name: string, img: string}) => {
    const starsArray = Array(stars);
  return (
    <div className="border border-gray-800 bg-gray-950 rounded-md">
      <div className="p-4">
        <div className="flex justify-center items-center gap-1">{starsArray.map((index) => {
            return (
                <FaStar key={index} className='text-yellow-500 px-2' />
            )
        })}</div>
        <p className="text-sm text-gray-400">{content}</p>
        <div className="flex justify-center items-center gap-3 my-4">
          <Image src={img} className="w-10 h-10 rounded-full object-cover" width={100} height={100} alt={name} />
          <h3 className='text-gray-300'>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
