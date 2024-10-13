import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ProjectCard from './Card'
import reviews from '../data/reviews'
import Link from 'next/link'
import TestimonialCard from './TestimonialCard'

const Testimonials = ({title, limit, btnText, btnLink}: {title: string, limit?:number, btnText: string, btnLink: string}) => {
    const cardsToShow = limit ? reviews.slice(0, limit) : reviews;
  return (
    <div className="my-10">
        <div className="flex items-center my-4 justify-between">
          <h3 className="text-2xl py-3 font-semibold text-gray-300">{title}</h3>
          <Link href={btnLink} className="px-3 bg-gray-700 text-white hover:text-green-500 inline-flex items-center justify-center gap-3 py-2 rounded-md group transition-all duration-300 ease-linear">{btnText} <BsArrowRight size={20} className="transition-all duration-300 ease-linear group-hover:translate-x-1 group-hover:scale-110" /></Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {cardsToShow.map((review: {stars:number, content:string, name:string, img:string}, index: number) => {
            return (
                <TestimonialCard key={index} content={review.content} name={review.name} img={review.img} stars={review.stars}  />
            )
          })}
        </div>
      </div>
  )
}

export default Testimonials
